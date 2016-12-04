import { InstancePerDependency } from 'eye-oh-see';
import * as React from 'react';
import { Shell } from './Shell';
import { Greeter } from '../../../core/models/Greeter';
import { RootController } from '../../../../bootstrapping/RootController';

@InstancePerDependency(RootController)
export class ShellController extends RootController {
  constructor(private greeter: Greeter) {
    super();
  }

  public get view() {
    return React.createElement(Shell, {
      greeting: this.greeter.greet()
    });
  }
}
