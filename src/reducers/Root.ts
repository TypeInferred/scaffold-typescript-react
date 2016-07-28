import {SingleInstance} from 'eye-oh-see';
import {combineReducers} from 'redux';
import * as Widgets from './Widgets.ts';
import ReducerFactory from '../store/ReducerFactory';

export interface IRootState {
  widgets: Widgets.Type;
}

@SingleInstance(ReducerFactory)
export class RootReducerFactory implements ReducerFactory<IRootState> {
  create() {
    return combineReducers<IRootState>({
      widgets: Widgets.Reducer
    });
  }
}
