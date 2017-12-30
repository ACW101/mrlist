import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './style.css';

import {createPoll, toggleSendDialog, login} from './actions';
import {fireSnackbar, hideSnackbar} from './YelpDialog/actions';
import Button from 'material-ui/Button';
import Add from 'material-ui-icons/Add';
import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';
import Snackbar from 'material-ui/Snackbar';


// import SendDialog from './sendDialog';
// import AddFriendDialog from './addFriendDialog';
import RestaurantList from './RestaurantList';
import TagList from './TagList';
import Details from './Details';
import SendDialog from './SendDialog';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			addFriendDialog: { open: false }
		};
		this.props.login();
	}
	render() {
		const addButtonStyle = {
			position: 'fixed',
			right: '25px',
			bottom: '25px'
		}
		const dialogActions = [
			<Button
			  label="Cancel"
			  primary={true}
			  onClick={this.props.toggleSendDialog}
			/>,
			<Button
			  label="Submit"
			  primary={true}
			  keyboardFocused={true}
			  onClick={() => this.handleSubmitPoll(this.props.pollForm)}
			/>,
		  ];
		return (
			<div id="profile">
				<Snackbar
					open={this.props.addRestaurantSnackbar}
					message="Restaurant Added"
					autoHideDuration={1000}
					onRequestClose={this.props.hideSnackbar}
				/>
				<Dialog
					title="Invitation"
					actions={dialogActions}
					modal={false}
					open={this.props.isOpenSendDialog}
					onRequestClose={this.handleClose}
				>
					<SendDialog />
				</Dialog>
				<div id="rlist">
					<RestaurantList height="600px"/>
				</div>
				<div id="details">
					<Details/>
				</div>
				<Button
					fab
					style={addButtonStyle}
					onClick={this.props.toggleSendDialog}
				>
					<Add />
				</Button>
			</div>
		)
	}
	handleSubmitPoll(pollForm) {
		const formData = {
			name: pollForm.eventName,
			restaurant_ids: pollForm.selected.toString()
		}
		this.props.createPoll(formData);
	}
	toggleSendDialog() {
		this.props.toggleSendDialog();
	}
}

function mapStateToProps({ pollForm, isOpenSendDialog, addRestaurantSnackbar}) {
	return {pollForm, isOpenSendDialog, addRestaurantSnackbar};
}

export default connect(mapStateToProps, {createPoll, toggleSendDialog, login, fireSnackbar, hideSnackbar})(Profile);