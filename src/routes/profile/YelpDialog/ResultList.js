import React, { Component } from "react";
import { connect } from "react-redux";
import { addRestaurant } from "./actions";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class ResultList extends Component {
  constructor(props) {
    super(props);
    this.handleAddRestaurant = this.handleAddRestaurant.bind(this);
  }
  handleAddRestaurant(event, id) {
    const restaurantData = this.props.searchResult[id];
    this.props.addRestaurant(restaurantData, (err, response) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  }
  componentDidUpdate() {
    // force window resize to enforce top-padding constraint
    window.dispatchEvent(new Event('resize'));    
  }
  render() {
    const cardStyle = {
      margin: 'auto',
      padding: 0,
    }
    const cards = _.map(this.props.searchResult, (restaurantData) => {
      const name = restaurantData.id;
      const imageURL = restaurantData.image_url;
      const address = restaurantData.location.display_address;
      return (
        <Card style={cardStyle} key={name}>
          <CardHeader 
            title={name}
            subtitle={_.flatten(address)}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardActions>
            <RaisedButton
              label="Add Restaurant" 
              onTouchTap={(e) => this.handleAddRestaurant(e, name)}
            />
          </CardActions>
        </Card>
      )
    })
    return( 
      <div>
        {cards}
      </div>
    )
  }
}

function mapStateToProps({ searchResult }) {
  return { searchResult };
}

export default connect(mapStateToProps, { addRestaurant })(ResultList);