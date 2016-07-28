import {WIDGET_ADDED} from '../constants/ActionTypes';
import {handleActions} from 'redux-actions';

export interface IWidget {
  id: number;
}

export type Type = IWidget[];

export const Reducer = handleActions<Type, {}>({
  [WIDGET_ADDED]: (state, action) => [{id: state.length}, ...state]
}, []);

