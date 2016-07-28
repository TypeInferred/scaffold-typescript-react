import {Reducer} from 'redux';

abstract class ReducerFactory<T> {
  abstract create(): Reducer<T>;
}

export default ReducerFactory;
