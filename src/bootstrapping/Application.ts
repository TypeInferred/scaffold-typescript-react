import * as ReactDOM from 'react-dom';
import { Container } from 'eye-oh-see';
import { Module } from './Module';
import { Reloadable , NullReloadable } from './Reloadable';
import { RootController } from './RootController';

const context = <any>window;
const reloadableState: { [key: string]: any } = context.__reloadableState || (context.__reloadableState = {});

export class Application {
  private rootElement: HTMLDivElement;
  private container: Container;
  private reloadables: Reloadable[];

  constructor(private iocModules: Module[]) {}

  public start() {
    this.container = new Container();
    this.bootstrapContainer();
    this.reloadState();
    this.renderRoot();
  }

  public stop() {
    ReactDOM.unmountComponentAtNode(this.rootElement);
    document.body.removeChild(this.rootElement);
    this.saveReloadableState();
    this.container.dispose();
  }

  private bootstrapContainer() {
    this.iocModules.forEach(mod => {
      mod.exports.forEach(exp => {
        this.container.register(exp);
      });
    });
    // Necessary because resolveMany() will throw if nothing is registered
    this.container.register(NullReloadable);
  }

  private saveReloadableState() {
    this.reloadables.forEach(reloadable => {
      reloadableState[reloadable.key] = reloadable.save();
    });
  }

  private reloadState() {
    this.reloadables = <Reloadable[]>this.container.resolveMany(<any>Reloadable);
    this.reloadables.forEach(reloadable => {
      const hotState = reloadableState[reloadable.key];
      if (hotState != null) {
        reloadable.load(hotState);
      }
    });
  }

  private renderRoot() {
    const rootController = <RootController>this.container.resolve(<any>RootController);
    this.rootElement = document.createElement('div');
    this.rootElement.style.height = '100%';
    document.body.appendChild(this.rootElement);
    ReactDOM.render(rootController.view, this.rootElement);
  }
}
