import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import reducers from './reducers';

// import routes components
import Home from './routes/home';
import Profile from './routes/profile';
import Auth from './routes/auth';
import Yelp from './routes/yelp';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
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
  , document.getElementById('root'));
