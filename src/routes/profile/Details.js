import React, { Component } from 'react';
import {fetchRestaurantDetail} from "./actions";
import {connect} from "react-redux";

import RestaurantDetail from './Details/RestaurantDetail'

import Chip from 'material-ui/Chip';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class Details extends Component {
    render() {
        const restaurant_id = this.props.selectedRestaurant;
        const selectRestaurantPrompt = <p>please select a restaurant on the left</p>;
        // render default detail message when no restaurant selected
        if (this.props.selectedRestaurant == null) return selectRestaurantPrompt;
        else return(
            <div>      
                <RestaurantDetail />
            </div>
        )
    }
}

function mapStateToProps({restaurantList, selectedRestaurant }) {
    return {restaurantList, selectedRestaurant };
}
export default connect(mapStateToProps, {fetchRestaurantDetail})(Details);