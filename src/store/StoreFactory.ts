import {SingleInstance} from 'eye-oh-see';
import {createStore, Reducer, Store} from 'redux';

@SingleInstance()
export default class StoreFactory<S> {
  create(reducer: Reducer<S>): Store<S> {
    return createStore(reducer);
  }
}
