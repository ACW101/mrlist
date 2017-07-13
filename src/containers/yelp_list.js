import React, { Component } from "react";
import { connect } from "react-redux";

const imageStyle = {
  width: '150px',
  height: '150px',
  borderRadius: '50%',
}
const trStyle = {
  'textAlign': 'center'
}

class YelpList extends Component {
  renderList(restaurantData) {
    console.log(restaurantData);
    const name = restaurantData.id;
    const imageURL = restaurantData.image_url;
    const address = restaurantData.location.display_address;

    return (
      <tr style={trStyle} key={name}>
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
          {this.props.searchResult.map(this.renderList)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ searchResult }) {
  return { searchResult };
}

export default connect(mapStateToProps)(YelpList);