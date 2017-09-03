import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './style.css'

import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

// import SendDialog from './sendDialog';
// import AddFriendDialog from './addFriendDialog';
import RestaurantList from './RestaurantList';
import TagList from './TagList';
import Details from './Details';

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
			<Paper id="profile">
				<div id="rlist">
					<Subheader>Filter by tag</Subheader>
					<TagList />
					<Divider />
					<RestaurantList height="600px"/>
					
				</div>
				<div id="details">
					<Details/>
				</div>
				<Link to="/yelp">
					<FloatingActionButton style={addButtonStyle}>
						<ContentAdd />
					</FloatingActionButton>
				</Link>
			</Paper>
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
