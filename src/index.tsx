import * as React from 'react';
import {render} from 'react-dom';
import {Container} from 'eye-oh-see';
import {Calculator, Add} from './calculator';
import App from './app';
import 'file?name=[name].[ext]!./index.html';

const container = new Container();
container.register(Calculator);
container.register(Add);
const calculator = container.resolve(Calculator);
const element = document.getElementById('root');
if (element) {
  render(<App calculator={calculator} />, element);
} else {
  console.error('Cannot find root element.');
}
