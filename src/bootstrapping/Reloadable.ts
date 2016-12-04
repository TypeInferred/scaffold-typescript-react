import { SingleInstance } from 'eye-oh-see';

export abstract class Reloadable {
  public abstract get key(): string;
  public abstract save(): any;
  public abstract load(state: any): void;
}

@SingleInstance(Reloadable)
export class NullReloadable {
  public get key() {
    return 'null';
  }

  public save() {
    return undefined;
  }

  public load() {}
}
