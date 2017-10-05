import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './style.css';

import {createPoll, toggleSendDialog, login} from './actions';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';


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
			<RaisedButton
			  label="Cancel"
			  primary={true}
			  onClick={this.props.toggleSendDialog}
			/>,
			<RaisedButton
			  label="Submit"
			  primary={true}
			  keyboardFocused={true}
			  onClick={() => this.handleSubmitPoll(this.props.pollForm)}
			/>,
		  ];
		return (
			<div id="profile">
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
				<FloatingActionButton
					style={addButtonStyle}
					onClick={this.props.toggleSendDialog}
				>
					<ContentAdd />
				</FloatingActionButton>
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

function mapStateToProps({ pollForm, isOpenSendDialog }) {
	return {pollForm, isOpenSendDialog};
}

export default connect(mapStateToProps, {createPoll, toggleSendDialog, login})(Profile);