import React from 'react';
import {connect} from 'react-redux';
import {closeLoginDialog, signIn, register} from './actions/AppAction';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';
import TextField from 'material-ui/TextField';

import fb_login_img from './fb_login.png';

const formContainerStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center"
}
const closeButtonStyle = {
    position: "absolute",
    right: 10,
    top: 10,
}
const formElementStyle = {
    width: 300,
}
const spacerStyle = {
    height: 20,
}
function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class LoginDialog extends React.Component {
    state = {
        username: "",
        password: "",
    }
    handleChange = name => event => {
        console.log(event.target.value);
        this.setState({
            [name]: event.target.value,
        })
    }
    handleSignin = e => {
        const { username, password } = this.state; 
        this.props.signIn(username, password);
    }
    handleRegister = e => {
        const { username, password } = this.state; 
        this.props.register(username, password);
    }
    render() {
        const { classes } = this.props;
        return (
            <Dialog
                fullScreen
                open={this.props.isOpenLoginDialog}
                transition={Transition}
            >
                <IconButton
                    style={closeButtonStyle}
                    onClick={this.props.closeLoginDialog}
                >
                    <CloseIcon />
                </IconButton>
                <div style={formContainerStyle}>
                    <TextField
                        id="username"
                        label="Email"
                        value={this.state.userName}
                        style={formElementStyle}
                        onChange={this.handleChange('username')}
                        margin="normal"
                    />
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        style={formElementStyle}
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        margin="normal"
                    />
                    <div style={spacerStyle}></div>
                    <Button color="primary" style={formElementStyle} onClick={this.handleSignin}>
                        Sign in
                    </Button>
                    <div style={spacerStyle}></div>
                    <Button color="secondary" style={formElementStyle} onClick={this.handleRegister}>
                        Create Account
                    </Button>
                    <div style={spacerStyle}></div>
                    <a href="/auth/facebook">
                        <img id="fb_login" style={formElementStyle} src={fb_login_img} alt="facebook_login"/>
                    </a>
                </div>
            </Dialog>
        );
    }
}

LoginDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps({isOpenLoginDialog}) {
    return {isOpenLoginDialog};
}

export default connect(mapStateToProps, {closeLoginDialog, signIn, register})(LoginDialog)