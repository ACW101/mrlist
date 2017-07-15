import React, { Component } from "react";
import { connect } from "react-redux";
import { addRestaurant } from "../actions";
import RestaurantList from "../../../components/restaurantList"

class ResultTable extends Component {
  onClick(event) {
    const { id } = event.target;
    const restaurantData = this.props.searchResult[id];
    this.props.addRestaurant(restaurantData, (err, response) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  }
  
  render() {
    return( 
      <RestaurantList restaurantData={this.props.searchResult} onClick={this.onClick.bind(this)} />
    )
  }
}

function mapStateToProps({ searchResult }) {
  return { searchResult };
}

export default connect(mapStateToProps, { addRestaurant })(ResultTable);