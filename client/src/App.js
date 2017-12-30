import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Paper from "material-ui/Paper";
import Home from "./routes/home";
import AppBar from 'material-ui/AppBar/AppBar';
import Toolbar from 'material-ui/Toolbar/Toolbar';
import Typography from 'material-ui/Typography';

class App extends Component {
  render() {
    return (
      <Router>
        <Paper id="container">
          <AppBar>
            <Toolbar>
              <Typography type="title">Restaurant List</Typography>
            </Toolbar>
          </AppBar>
          <Route exact path="/" component={Home} />
        </Paper>
      </Router>
    );
  }
}

export default App;
