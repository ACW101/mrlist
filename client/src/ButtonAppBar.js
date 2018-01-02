import React, { Component } from 'react';
import {connect} from 'react-redux';
import {toggleLoginDialog} from './actions/AppAction';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar/AppBar';
import Toolbar from 'material-ui/Toolbar/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
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
  };
  
function ButtonAppBar(props) {
    const { classes } = props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu" onClick={props.onMenuButtonClick}>
              <MenuIcon/>
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              Restaurant List
            </Typography>
            <Button color="contrast" onClick={props.toggleLoginDialog}>Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
  ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default connect(null, {toggleLoginDialog})(withStyles(styles)(ButtonAppBar));