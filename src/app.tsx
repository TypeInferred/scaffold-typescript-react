import * as React from 'react';
import {Calculator} from './calculator';

interface IAppProps {
  calculator: Calculator;
}

export default class App extends React.Component<IAppProps, {}> {
  render() {
    return <div>{this.props.calculator.add(2,2)}</div>;
  }
}
