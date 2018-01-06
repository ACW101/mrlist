import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './style.css';

import { withStyles } from 'material-ui/styles';

import RestaurantList from './RestaurantList';
import Content from './content';

const styles = {
	root: {
		display: "flex",
    	flexDirection: "row",
    	height: "100%"
	},
	rlist: {
		flex: 1,
		maxWidth: 400
	},
	content: {
		flex: 2,
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
			<div className={classes.root}>
				<div className={classes.rlist}>
					<RestaurantList/>
				</div>
				<div className={classes.content}>
					<Content/>
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(Profile);