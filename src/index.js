import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import _ from "lodash";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './style.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
import reducers from './reducers';

// import routes components
import Home from './routes/home';
import Profile from './routes/profile';
import Auth from './routes/auth';
import Yelp from './routes/yelp';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <MuiThemeProvider>
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/auth" component={Auth} />
        <Route path="/yelp" component={Yelp} />
      </div>
    </Router>
  </Provider>
  </MuiThemeProvider>
  , document.getElementById('root'));
