import React, { Component } from "react";
import { connect } from "react-redux";
import { addRestaurant } from "../actions";
import RestaurantList from "../../../components/restaurantList"

// const imageStyle = {
//   width: '150px',
//   height: '150px',
//   borderRadius: '50%',
// }

class ResultTable extends Component {
  onClick(event) {
    const { id } = event.target;
    const restaurantData = this.props.searchResult[id];
    this.props.addRestaurant(restaurantData, (response) => {
      console.log(response);
    });
  }

  // renderList(restaurantData) {
  //   console.log(restaurantData);
  //   const name = restaurantData.id;
  //   const imageURL = restaurantData.image_url;
  //   const address = restaurantData.location.display_address;

  //   return (
  //     <tr key={name}>
  //     <td>
  //       <span id={name} onClick={this.onClick.bind(this)} className="fa fa-plus" aria-hidden="true"></span>
  //     </td>
  //     <td><a className="thumbnail"><img  style={imageStyle} src={imageURL} /></a></td>
  //     <td>
  //       <div >
  //         <h3>{name}</h3>
  //         {address.map((address, i) => <p key={i}>{address}</p>)}
  //       </div>
  //     </td>
  //     </tr>
  //   );
  // }
  
  render() {
    return( 
      <RestaurantList restaurantData={this.props.searchResult} onClick={this.onClick.bind(this)} />
      // <table className="table table-hover">
      //   <tbody>
      //     {_.map(this.props.searchResult, this.renderList.bind(this))}
      //   </tbody>
      // </table>
    )
  }
}

function mapStateToProps({ searchResult }) {
  return { searchResult };
}

export default connect(mapStateToProps, { addRestaurant })(ResultTable);