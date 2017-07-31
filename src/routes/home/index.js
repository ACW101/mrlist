import React, {Component} from 'react'
import { Link } from 'react-router-dom'
// import RaisedButton from 'material-ui/RaisedButton';

import './style.css';

export default class Home extends Component {
	render() {
		return (
			<div className="main grid">
				<div id="title">
					<h1>Welcome to MasteR List</h1>
				</div>
				<div id="login">
					<a href="/auth/facebook">
						<img id="fb_login" style={{height: "50px"}} src="/images/fb_login.png" alt="facebook_login"/>
					</a>
				</div>
			</div>
		)
	}
}
