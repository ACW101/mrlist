import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './routes';
import Auth from './routes/auth';



ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/auth' component={Auth}/>
    </Switch>
  </BrowserRouter>
), document.getElementById('root'))
