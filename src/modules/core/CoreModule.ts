import { Module } from '../../bootstrapping/Module';

export class CoreModule extends Module {
  public requireContext() {
    return require.context('./', true, /^\.\/.*\.tsx?$/);
  }
}
