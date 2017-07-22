import React, { Component } from "react";

const imageStyle = {
  width: '150px',
  height: '150px',
  borderRadius: '50%',
}

export default class RestaurantList extends Component {
  renderList(restaurantData) {
    console.log(restaurantData);
    const name = restaurantData.id;
    const imageURL = restaurantData.image_url;
    const address = restaurantData.location.display_address;

    return (
      <tr key={name}>
      <td>
        <span id={name} onClick={(event) => this.props.onClick(event)} className="fa fa-plus" aria-hidden="true"></span>
      </td>
      <td><a className="thumbnail"><img  style={imageStyle} src={imageURL} /></a></td>
      <td>
        <div >
          <h3>{name}</h3>
          {address.map((address, i) => <p key={i}>{address}</p>)}
        </div>
      </td>
      </tr>
    );
  }
  
  render() {
    return( 
      <table className="table table-hover">
        <tbody>
          {_.map(this.props.restaurantData, this.renderList.bind(this))}
        </tbody>
      </table>
    )
  }
}