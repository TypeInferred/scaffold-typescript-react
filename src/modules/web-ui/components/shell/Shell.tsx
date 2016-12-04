import * as React from 'react';
import * as style from './Shell.styl';

export interface ShellProps {
  greeting: string;
}

export class Shell extends React.Component<ShellProps, {}> {
  render() {
    return <div className={style.container}>{this.props.greeting}</div>;
  }
}
