import * as React from 'react';
import {Provider} from 'react-redux';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {IRootState} from '../../reducers/Root';
import Store from '../../store/Store';
import Header from '../header/Header';
import WidgetHost from '../widget-host/WidgetHost';

// TODO: containerize views
export interface IRootProps {
  store: Store<IRootState>;
}

export const Root = ({store}: IRootProps) =>
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div>
        <Header />
        <WidgetHost />
      </div>
    </MuiThemeProvider>
  </Provider>;
