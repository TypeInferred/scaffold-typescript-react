import {Container} from 'eye-oh-see';
import {RootReducerFactory} from './reducers/Root';
import Store from './store/Store';
import WidgetActions from './actions/WidgetActions';

export default class Bootstrapper {
  bootstrap(): Container {
    const container = new Container();
    // TODO: Register by file using require.context(...)
    container.register(RootReducerFactory);
    container.register(Store);
    container.register(WidgetActions);
    return container;
  }
}
