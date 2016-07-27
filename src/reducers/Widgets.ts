import {WIDGET_ADDED} from '../constants/ActionTypes';
import {handleActions} from 'redux-actions';

export default handleActions({
  [WIDGET_ADDED]: (state, action) => [{id: state.length}, ...state]
}, []);
