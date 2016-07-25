import * as React from 'react';
import {render} from 'react-dom';
import {Container} from 'eye-oh-see/dist/src/Index';
import {Calculator, Add} from './calculator';
import App from './app';
import 'file?name=[name].[ext]!./index.html';

const container = new Container();
container.register(Calculator);
container.register(Add);
const calculator = container.resolve(Calculator);

render(<App calculator={calculator} />, document.getElementById('root'));
