import * as React from 'react';
import {render} from 'react-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import 'file?name=[name].[ext]!./index.html';
import './index.styl';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


render(<App />, document.getElementById('root'));
