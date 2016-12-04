import { Module } from '../../bootstrapping/Module';

export class WebUiModule extends Module {
  public requireContext() {
    return require.context('./', true, /^\.\/.*\.tsx?$/);
  }
}
