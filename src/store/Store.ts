import {SingleInstance} from 'eye-oh-see';
import ReducerFactory from './ReducerFactory';
import {createStore, Store as IStore} from 'redux';

@SingleInstance()
export default class Store<S> {
  _innerStore: IStore<S>;

  public dispatch = this._innerStore.dispatch;
  public getState = this._innerStore.getState;

  constructor(factory: ReducerFactory<S>) {
    const reducer = factory.create();
    this._innerStore = createStore(reducer);
  }
}
