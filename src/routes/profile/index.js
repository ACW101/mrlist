import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import './style.css'

import SendDialog from './sendDialog';
import UserRestaurantTable from './userRestaurantTable';
import FriendList from './friendList';

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
			<div id="profile">
				<SendDialog open={this.state.open} handleClose={this.handleClose} />
				<Paper id="rlist">
					<UserRestaurantTable
						height="600px"
					/>
					<Link to="/yelp">
						<FloatingActionButton style={addButtonStyle}>
							<ContentAdd />
						</FloatingActionButton>
					</Link>
				</Paper>
				<Paper id="flist">
					<FriendList />
				</Paper>
				<RaisedButton 
					className="send-btn" 
					label="SEND INVITATION" 
					onTouchTap={this.handleOpen} 
				/>
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
