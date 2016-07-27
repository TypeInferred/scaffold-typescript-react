import * as React from 'react';
import {render} from 'react-dom';
import {Container} from 'eye-oh-see';
import Header from './components/header/Header';
import WidgetHost from './components/widget-host/WidgetHost';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import 'file?name=[name].[ext]!./index.html';
import './index.styl';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const container = new Container();
container.register(null); // TODO

class App extends React.Component<{}, {}> {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <Header />
          <WidgetHost />
        </div>
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
