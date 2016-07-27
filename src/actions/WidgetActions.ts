import {SingleInstance} from 'eye-oh-see';
import {createAction} from 'redux-actions';
import {WIDGET_ADDED} from '../constants/ActionTypes';

@SingleInstance()
export default class WidgetActions {
  public widgetAdded = createAction(WIDGET_ADDED);
}
