import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './style.css';

import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';

import RestaurantList from './RestaurantList';
import Content from './content';

const styles = {
	root: {
		display: "flex",
		width: "100%",
		maxWidth: 960,
		margin: "auto",
    	flexDirection: "column",
		height: "100%",
	}
}

class Profile extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = { 
	// 		addFriendDialog: { open: false }
	// 	};
	// 	this.props.login();
	// }
	render() {
		const { classes } = this.props;
		
		return (
			<Paper className={classes.root}>
				<RestaurantList />
			</Paper>
		)
	}
}

export default withStyles(styles)(Profile);