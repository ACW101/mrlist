import React, { Component } from 'react';
import { fetchRestaurantList, selectRestaurant } from "./actions";
import { connect } from "react-redux";

import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Divider from 'material-ui/Divider';

class RestaurantList extends Component {
    componentDidMount() {
        this.props.fetchRestaurantList();
        this.renderList = this.renderList.bind(this);
    }
    render() {
        return(
            <div>
                <List>
                    {this.props.restaurantList.map(restaurant => this.renderList(restaurant))}
                </List>
            </div>
        )
    }

    renderList(restaurant) {
        const restaurantTags = this.props.restaurantTags[restaurant.id];
        if(this.props.selectedTag != null && restaurantTags[this.props.selectedTag] == null) return;
        return(
            <div>
                <ListItem
                    key={restaurant.id}
                    primaryText={restaurant.name}
                    onClick={() => this.handleSelectRestaurant(restaurant.id)}
                >
                </ListItem>
                <Divider/>
            </div>
        )
    }
    
    handleSelectRestaurant(restaurant_id) {
        this.props.selectRestaurant(restaurant_id);
    }
}

function mapStateToProps({ restaurantList, selectedTag, restaurantTags }) {
    return { restaurantList, selectedTag, restaurantTags };
}
export default connect(mapStateToProps, { fetchRestaurantList, selectRestaurant })(RestaurantList);