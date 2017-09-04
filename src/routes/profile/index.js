import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './style.css'

import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';


// import SendDialog from './sendDialog';
// import AddFriendDialog from './addFriendDialog';
import RestaurantList from './RestaurantList';
import TagList from './TagList';
import Details from './Details';
import SendDialog from './SendDialog';

export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			sendDialog: { open: false },
			addFriendDialog: { open: false }
		};

		this.handleOpenSendDialog = this.handleOpenSendDialog.bind(this);
		this.handleCloseSendDialog = this.handleCloseSendDialog.bind(this);
	}
	render() {
		const addButtonStyle = {
			position: 'fixed',
			right: '25px',
			bottom: '25px'
		}
		const dialogActions = [
			<RaisedButton
			  label="Cancel"
			  primary={true}
			  onClick={this.handleCloseSendDialog}
			/>,
			<RaisedButton
			  label="Submit"
			  primary={true}
			  keyboardFocused={true}
			  onClick={this.handleCloseSendDialog}
			/>,
		  ];
		return (
			<Paper id="profile">
				<Dialog
					title="Invitation"
					actions={dialogActions}
					modal={false}
					open={this.state.sendDialog.open}
					onRequestClose={this.handleClose}
				>
					<SendDialog/>
				</Dialog>
				<div id="rlist">
					<Subheader>Filter by tag</Subheader>
					<TagList />
					<Divider />
					<RestaurantList height="600px"/>
					
				</div>
				<div id="details">
					<Details/>
				</div>
				<FloatingActionButton
					style={addButtonStyle}
					onClick={this.handleOpenSendDialog}
				>
					<ContentAdd />
				</FloatingActionButton>
			</Paper>
		)
	}
	handleOpenSendDialog() {
		this.setState({sendDialog: {open: true}});
	}
	handleCloseSendDialog() {
		this.setState({sendDialog: {open: false}});
	}
}
