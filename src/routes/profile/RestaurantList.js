import React, { Component } from 'react';
import { fetchRestaurantList } from "./actions";
import { connect } from "react-redux";

import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Divider from 'material-ui/Divider';

class RestaurantList extends Component {
    componentDidMount() {
        this.props.fetchRestaurantList();
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
        return(
            <div>
                <ListItem
                    primaryText={restaurant.name}
                >
                </ListItem>
                <Divider/>
            </div>
        )
    }
}

function mapStateToProps({ restaurantList }) {
    return { restaurantList };
}
export default connect(mapStateToProps, { fetchRestaurantList })(RestaurantList);