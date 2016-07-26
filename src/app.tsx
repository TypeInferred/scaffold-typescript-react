import * as React from 'react';
import {Calculator} from './calculator';
import * as style from './app.styl';

interface IAppProps {
  calculator: Calculator;
}

export default class App extends React.Component<IAppProps, {}> {
  render() {
    return <div className={style.container}>{this.props.calculator.add(2,2)}</div>;
  }
}
