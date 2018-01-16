import React, { Component } from 'react';
import { fetchRestaurantList, selectRestaurant, importFromYelp, openImportDialog } from "../../actions/RestaurantListAction";
import { connect } from "react-redux";
import {map} from "lodash";

import List, { ListItem, ListItemText } from 'material-ui/List';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/Button';
import Button from 'material-ui/Button';

import ImportDialog from './RestaurantList/ImportDialog'

const styles = {
    root: {
        height: "auto",
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
                <ImportDialog />
                <Typography type="display2">Kevin Wang's List</Typography>
                <Button onClick={ this.props.openImportDialog }>import from yelp</Button>
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
    handleSelectRestaurant(restaurant_id) {
        this.props.selectRestaurant(restaurant_id);
    }
}

function mapStateToProps({restaurantList, isOpenAddRestaurantDialog}) {
    return {restaurantList, isOpenAddRestaurantDialog};
}
export default connect(mapStateToProps, { fetchRestaurantList, selectRestaurant, importFromYelp, openImportDialog })(withStyles(styles)(RestaurantList));