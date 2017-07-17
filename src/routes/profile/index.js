import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import UserRestaurantTable from './userRestaurantTable';

export default class Profile extends Component {
	render() {
		const addButtonStyle = {
			position: 'fixed',
			right: '25px',
			bottom: '25px'
		}
		return (
			<Paper zDepth={2}>
				<UserRestaurantTable />
				<Link to="/yelp">
					<FloatingActionButton style={addButtonStyle}>
						<ContentAdd />
					</FloatingActionButton>
				</Link>
			</Paper>
			
		)
	}
}
