import React, { Component } from 'react';
import {fetchRestaurantDetail} from "./actions";
import {connect} from "react-redux";

import CoverGridList from './CoverGridList'
import RestaurantInfo from './RestaurantInfo'

class Details extends Component {
    render() {
        return (
            <div>
                <CoverGridList />
                <RestaurantInfo />
            </div>
        )
    }
}

function mapStateToProps({restaurantList, selectedRestaurant }) {
    return {restaurantList, selectedRestaurant };
}
export default Details;