import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Profile extends Component {
	render() {
		return (
			<div>
				This is Profile
				<Link to="/yelp">add New</Link>
			</div>
		)
	}
}
