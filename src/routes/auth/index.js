import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import Login from './login'
import Signup from './signup'

export default class Auth extends Component {
	render() {
		const { match } = this.props;
		return (
			<div>
				<h1>this is auth</h1>
				<Route path={`${match.url}/login`} component={Login}></Route>
			</div>
		)
	}
}
