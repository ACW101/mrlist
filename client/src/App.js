import React, { Component } from 'react';
import {connect} from 'react-redux';
import { toggleMenuDrawer, checkToken } from './actions/AppAction';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import Home from "./routes/home";
import Profile from "./routes/profile";
import ButtonAppBar from './ButtonAppBar';
import Menu, { MenuItem } from 'material-ui/Menu';
import LoginDialog from './LoginDialog';
import './App.css';

const menuItems = ["about", "profile"]

class App extends Component {
  constructor(props) {
    super(props)
    this.props.checkToken();
  }
  state = {
    anchorEl: null,
    open: false
  }

  handleMenuClick = e => {
    this.setState({open: true, anchorEl: e.currentTarget});
  }

  handleMenuClose = e => {
    this.setState({open: false});
  }

  handleMenuItemClick = e =>  {
    this.setState({open: false});
    this.props.history.push("/" + e);
  }

  render() {
    return (
      <div id="container">
        <Menu
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onClose={this.handleMenuClose}>
          {menuItems.map((e) => 
            <MenuItem onClick={() => this.handleMenuItemClick(e)}>
              {e.toUpperCase()}
            </MenuItem>
          )}
        </Menu>
        <LoginDialog/>
        <ButtonAppBar onMenuButtonClick={this.handleMenuClick}/>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </div>
    );
  }
}

function mapStateToProp({ isLoggedIn }) {
  return { isLoggedIn }
}

export default withRouter(connect(mapStateToProp, { checkToken })(App))