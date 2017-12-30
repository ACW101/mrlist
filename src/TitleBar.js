import React, {Component} from 'react';
import {connect} from 'react-redux';

import AppBar from 'material-ui/AppBar';
import ToolBar from 'material-ui/ToolBar';
import Typography from 'material-ui/Typography';

class TitleBar extends Component {
    render() {
        const LoginButton = (
            <a href="/auth/facebook">
                <img 
                    id="fb_login" 
                    style={{height: "40px"}} 
                    src="/images/fb_login.png" 
                    alt="facebook_login"
                />
            </a>
        )
        return (
            <AppBar>
                <Toolbar>
                    <Typography type="title">Restaurant List</Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

function mapStateToProps({isLoggedIn}) {
    return {isLoggedIn};
}

export default connect (mapStateToProps, {})(TitleBar);
