import React from 'react';
import ReactDOM from 'react-dom';
import _ from "lodash";
import {  BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';


import App from "./App";
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const middlewares = [ReduxPromise, ReduxThunk];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <Router>
            <App />
        </Router>
    </Provider>
  , document.getElementById('root'));
registerServiceWorker();
