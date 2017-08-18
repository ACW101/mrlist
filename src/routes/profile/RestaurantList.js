import React, { Component } from 'react';
import { fetchRestaurantList, selectRestaurant } from "./actions";
import { connect } from "react-redux";

import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Divider from 'material-ui/Divider';
import {blue300, indigo900} from 'material-ui/styles/colors';

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
        const hasTag = this.props.selectedTag != null && restaurantTags[this.props.selectedTag] != null;
        const styles={
            active: {
                backgroundColor: blue300
            }
        }
        return(
            <div>
                <ListItem
                    key={restaurant.id}
                    primaryText={restaurant.name}
                    style={hasTag ? styles.active: null}
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