import React, { Component } from 'react';
import {connect} from 'react-redux';
import {openLoginDialog} from './actions/AppAction';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar/AppBar';
import Toolbar from 'material-ui/Toolbar/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircleIcon from 'material-ui-icons/AccountCircle'
import {withStyles} from 'material-ui/styles';

const styles = {
    root: {
      width: '100%',
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    toolBar: {
      width: 960,
      margin: '0 auto',
    }
  };
  
function ButtonAppBar(props) {
    const { classes } = props;
    return (
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolBar}>
          <IconButton className={classes.menuButton} color="contrast" aria-label="Menu" onClick={props.onMenuButtonClick}>
            <MenuIcon/>
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            Restaurant List
          </Typography>
          {props.isSignedIn 
            ? <IconButton><AccountCircleIcon /></IconButton>
            : <Button color="contrast" onClick={props.openLoginDialog}>Login</Button> 
          }
        </Toolbar>
      </AppBar>
    );
  }
  
  ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  function mapStateToProp({isSignedIn}) {
    return {isSignedIn}
  }

  export default connect(mapStateToProp, {openLoginDialog})(withStyles(styles)(ButtonAppBar));