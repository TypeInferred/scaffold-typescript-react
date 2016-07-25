import {SingleInstance, InstancePerDependency} from 'eye-oh-see/dist/src/Index';

@SingleInstance()
export class Add {
  apply(x: number, y: number) : number {
    return x + y;
  }
}

@InstancePerDependency()
export class Calculator {
  constructor(private _add: Add) {}
  add(x: number, y:number) : number {
    return this._add.apply(x, y);
  }
}
