import React, { Component } from 'react';
// import {} from "./actions";
import { connect } from "react-redux";

import Chip from 'material-ui/Chip';

const styles = {
    chip: {
      margin: 4,
    },
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  };

class Details extends Component {
    componentDidMount() {
    }
    render() {
        const restaurant_id = this.props.selectedRestaurant;
        const restaurantTags = this.props.restaurantTags[restaurant_id];
        console.log(restaurantTags);
        return(
            <div style={styles.wrapper}>
                {_.map(restaurantTags, tag => this.renderList(tag))}
            </div>
        )
    }
    renderList(tag) {
        return(
            <Chip
                key={tag}
                style={styles.chip}
            >
                {tag}
            </Chip>
        )
    }
}

function mapStateToProps({ selectedRestaurant, restaurantTags }) {
    return { selectedRestaurant, restaurantTags};
}
export default connect(mapStateToProps, {})(Details);