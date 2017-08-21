import React, { Component } from 'react';
import { toggleTagTextfield } from "./actions";
import { connect } from "react-redux";

import Chip from 'material-ui/Chip';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';

import TagTextfield from './TagTextField';

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
    constructor(props) {
        super(props);
        this.handleAddButtonClicked = this.handleAddButtonClicked.bind(this);
    }
    render() {
        const restaurant_id = this.props.selectedRestaurant;
        const restaurantTags = this.props.restaurantTags[restaurant_id];
        const AddBtn = (
            <FloatingActionButton 
                style={styles.chip} 
                mini={true} 
                zDepth={0}
                onClick={this.handleAddButtonClicked.bind(this)}
            >
                <ContentAdd />
            </FloatingActionButton>
        );
        const textField = (
            <TagTextfield
                toggleTagTextfield={this.props.toggleTagTextfield}
            />
        )
        
        return(
            <div style={styles.wrapper}>
                {_.map(restaurantTags, tag => this.renderList(tag))}
                {this.props.showTagTextfield ? textField : AddBtn }
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
    handleAddButtonClicked() {
        this.props.toggleTagTextfield();
    }
}

function mapStateToProps({ selectedRestaurant, restaurantTags, showTagTextfield }) {
    return { selectedRestaurant, restaurantTags, showTagTextfield };
}
export default connect(mapStateToProps, { toggleTagTextfield })(Details);