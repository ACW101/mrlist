import React, { Component } from 'react';
import { fetchRestaurantList, selectRestaurant, toggleAddDialog } from "./actions";
import { connect } from "react-redux";
import {map} from "lodash";

import List, { ListItem, ListItemText } from 'material-ui/List';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/Button';
import Button from 'material-ui/Button';

const styles = {
    root: {
        height: "100%",
        overflow: "scroll"
    }
}

class RestaurantList extends Component {
    componentDidMount() {
        this.props.fetchRestaurantList();
        this.renderList = this.renderList.bind(this);
    }
    render() {
        const { classes } = this.props;
        return(
            <Paper id="restaurantList" className={classes.root}>
                <List className={classes.list}>
                    {map(this.props.restaurantList, restaurant => this.renderList(restaurant))}
                </List>
            </Paper>
        )
    }
    renderList(restaurant) {        
        return(
            <div key={restaurant.id}>
                <ListItem
                    button
                    onClick={() => this.handleSelectRestaurant(restaurant.id)}
                >
                    <ListItemText primary={restaurant.name}/>
                </ListItem>
            </div>
        )
    }
    handleCloseAddDialog() {
        this.props.toggleAddDialog(false);
        this.props.fetchRestaurantList();
    }
    handleSelectRestaurant(restaurant_id) {
        this.props.selectRestaurant(restaurant_id);
    }
}

function mapStateToProps({restaurantList, isOpenAddRestaurantDialog}) {
    return {restaurantList, isOpenAddRestaurantDialog};
}
export default connect(mapStateToProps, { fetchRestaurantList, selectRestaurant, toggleAddDialog})(withStyles(styles)(RestaurantList));