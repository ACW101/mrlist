import React, {Component} from 'react'

export default class Login extends Component {
	render() {
		return (
			<div>
				<a href="/auth/facebook">
					<img id="fb_login" style={{height: "36px"}} src="/images/fb_login.png" alt="facebook_login"/>
				</a>
			</div>
		)
	}
}
