import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import SendDialog from './sendDialog';
import UserRestaurantTable from './userRestaurantTable';

export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {open: false};

		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}
	render() {
		const addButtonStyle = {
			position: 'fixed',
			right: '25px',
			bottom: '25px'
		}
		return (
			<div>
				<SendDialog open={this.state.open} handleClose={this.handleClose} />
				<Paper zDepth={2}>
					<RaisedButton label="SEND INVITATION" onTouchTap={this.handleOpen} />
					<UserRestaurantTable />
					<Link to="/yelp">
						<FloatingActionButton style={addButtonStyle}>
							<ContentAdd />
						</FloatingActionButton>
					</Link>
				</Paper>
			</div>
		)
	}
	handleOpen() {
		this.setState({open: true});
	}
	handleClose() {
		this.setState({open: false});
	}
}
