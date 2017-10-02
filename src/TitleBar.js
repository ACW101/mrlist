import React, {Component} from 'react';
import {connect} from 'react-redux';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

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
            <AppBar
                title="My Restaurant List"
                showMenuIconButton={false}
                iconElementRight={this.props.isLoggedIn ? null : LoginButton}
            />
        )
    }
}

function mapStateToProps({isLoggedIn}) {
    return {isLoggedIn};
}

export default connect (mapStateToProps, {})(TitleBar);
