import { Module } from "eye-oh-see-react/dist/Module";

export class CoreModule extends Module {
  public requireContext() {
    return require.context("./", true, /^\.\/(.(?!\.d))*\.tsx?$/);
  }
}
