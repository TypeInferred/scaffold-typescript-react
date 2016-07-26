#!/bin/sh
":" //# comment; exec /usr/bin/env node --harmony "$0" "$@"

// Forked from: https://github.com/Quramy/typed-css-modules/blob/master/src/cli.js

'use strict';

const path = require('path');
const gaze = require('gaze');
const glob = require('glob');
const yargs = require('yargs');
const chalk = require('chalk');
const DtsCreator  = require('typed-css-modules');
const stylus = require('stylus');
const fs = require('fs');

let yarg = yargs.usage('Create .css.d.ts from CSS modules *.css files.\nUsage: $0 [options] <input directory>')
  .example('$0 src/styles')
  .example('$0 src -o dist')
  .example('$0 -p styles/**/*.icss -w')
  //.detectLocale(false)
  .demand(['_'])
  .alias('o', 'outDir').describe('o', 'Output directory')
  .alias('p', 'pattern').describe('p', 'Glob pattern with css files')
  .alias('w', 'watch').describe('w', 'Watch input directory\'s css files or pattern').boolean('w')
  .alias('h', 'help').help('h')
  .version(() => require('../package.json').version)
let argv = yarg.argv;
let creator;

let writeFile = f => {
  fs.readFile(f, 'utf-8', (err, source) => {
    if (err) {
      console.error('[Error] ' + err);
      return;
    }
    stylus.render(source, { filename: f }, (err, css) => {
      if (err) {
        console.error('[Error] ' + err);
        return;
      }
      creator.create(f, css, !!argv.w)
      .then(content => content.writeFile())
      .then(content => {
        console.log('Wrote ' + chalk.green(content.outputFilePath));
        content.messageList.forEach(message => {
          console.warn('[Warn] ' + chalk.red(message));
        });
      })
      .catch(reason => console.error(reason));
    });
  });
};

let main = () => {
  let rootDir, searchDir;
  if(argv.h) {
    yarg.showHelp();
    return;
  }

  if(argv._ && argv._[0]) {
    searchDir = argv._[0];
  }else if(argv.p) {
    searchDir = './';
  }else{
    yarg.showHelp();
    return;
  }
  let filesPattern = path.join(searchDir, argv.p || '**/*.css');
  rootDir = process.cwd();
  creator = new DtsCreator({rootDir, searchDir, outDir: argv.o});

  if(!argv.w) {
    glob(filesPattern, null, (err, files) => {
      if(err) {
        console.error(err);
        return;
      }
      if(!files || !files.length) return;
      files.forEach(writeFile);
    });
  }else{
    console.log('Watch ' + filesPattern + '...');
    gaze(filesPattern, function(err, files) {
      this.on('changed', writeFile);
      this.on('added', writeFile);
    });
  }
};

main();

