import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import './style.css'

import SendDialog from './sendDialog';
import AddFriendDialog from './addFriendDialog';
import UserRestaurantTable from './userRestaurantTable';
import FriendList from './friendList';

export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			sendDialog: { open: false },
			addFriendDialog: { open: false }
		};

		this.handleOpenSendDialog = this.handleOpenSendDialog.bind(this);
		this.handleCloseSendDialog = this.handleCloseSendDialog.bind(this);
		this.handleOpenAddFriendDialog = this.handleOpenAddFriendDialog.bind(this);
		this.handleCloseAddFriendDialog = this.handleCloseAddFriendDialog.bind(this);
	}
	render() {
		const addButtonStyle = {
			position: 'fixed',
			right: '25px',
			bottom: '25px'
		}
		return (
			<div id="profile">
				<SendDialog open={this.state.sendDialog.open} handleClose={this.handleCloseSendDialog} zDepth={2}/>
				<AddFriendDialog open={this.state.addFriendDialog.open} handleClose={this.handleCloseAddFriendDialog} zDepth={2}/>
				<Paper id="rlist">
					<UserRestaurantTable height="600px"/>
					<Link to="/yelp">
						<FloatingActionButton style={addButtonStyle}>
							<ContentAdd />
						</FloatingActionButton>
					</Link>
				</Paper>
				<Paper id="flist">
					<FriendList 
						handleOpen={this.handleOpenAddFriendDialog} 
						handleClose={this.handleCloseAddFriendDialog}
						height="600px"
					/>
				</Paper>
				<RaisedButton 
					className="send-btn" 
					label="SEND INVITATION"
					id="sendDialog"
					onTouchTap={this.handleOpenSendDialog} 
				/>
			</div>
		)
	}
	handleOpenSendDialog() {
		this.setState({sendDialog: {open: true}});
	}
	handleCloseSendDialog() {
		this.setState({sendDialog: {open: false}});
	}
	handleOpenAddFriendDialog() {
		this.setState({addFriendDialog: {open: true}})
	}
	handleCloseAddFriendDialog() {
		this.setState({addFriendDialog: {open: false}})
	}
}
