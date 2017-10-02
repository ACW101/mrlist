import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
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
import TitleBar from './TitleBar';

import Paper from 'material-ui/Paper';

const middlewares = [ReduxPromise, ReduxThunk];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

ReactDOM.render(
  <MuiThemeProvider>
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <Paper id="container">
        <TitleBar/>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/auth" component={Auth} />
        <Route path="/yelp" component={Yelp} />
      </Paper>
    </Router>
  </Provider>
  </MuiThemeProvider>
  , document.getElementById('root'));
