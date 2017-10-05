import React, { Component } from 'react';
import {toggleTagTextfield, removeTag, fetchRestaurantDetail} from "./actions";
import {connect} from "react-redux";

import Chip from 'material-ui/Chip';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import TagTextfield from './TagTextField';

const muiTheme = getMuiTheme();

const styles = {
    chip: {
      margin: 4,
    },
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    add: {
        margin: 4,
        backgroundColor: muiTheme.palette.accent1Color,
    }
  };

class Details extends Component {
    constructor(props) {
        super(props);
        this.handleAddButtonClicked = this.handleAddButtonClicked.bind(this);
    }
    // componentDidMount() {
    //     console.log("yes")
    //     this.props.selectedRestaurant
    //     if (this.props.selectedRestaurant != null) {
    //         console.log("called")
    //         const {yelp_id} = this.props.restaurantList[restaurant_id];
    //         this.props.fetchRestaurantDetail(yelp_id);
    //     }
    // }
    render() {
        const restaurant_id = this.props.selectedRestaurant;
        const restaurantTags = this.props.restaurantTags[restaurant_id];
        const AddBtn = (
            <Chip
                style={styles.add} 
                mini={true} 
                zDepth={0}
                onClick={this.handleAddButtonClicked.bind(this)}
            >
                add Tag
            </Chip>
        );
        const textField = (
            <Chip style={styles.add}>
                <TagTextfield
                    toggleTagTextfield={this.props.toggleTagTextfield}
                />
            </Chip>
        )
        const selectRestaurantPrompt = <p>please select a restaurant on the left</p>;
        if(this.props.selectedRestaurant == null) return selectRestaurantPrompt;
        else return(
            <div>      
                <h3>{this.props.restaurantList[restaurant_id].name}</h3>
                <div style={styles.wrapper}>
                    {_.map(restaurantTags, (tagName, tagId) => this.renderList(tagName, tagId))}
                    {this.props.showTagTextfield ? textField : AddBtn }
                </div>
            </div>
        )
    }
    renderList(tagName, tagId) {
        return(
            <Chip
                key={tagId}
                style={styles.chip}
                onRequestDelete={() => this.handleRequestDeleteTag(tagId)}
            >
                {tagName}
            </Chip>
        )
    }
    handleAddButtonClicked() {
        this.props.toggleTagTextfield();
    }
    handleRequestDeleteTag(tagId) {
        if(this.props.selectedRestaurant == null) return;
        const params = {
            restaurant_id: this.props.selectedRestaurant,
            tag_id: parseInt(tagId),
        }
        this.props.removeTag(params);
    }
}

function mapStateToProps({ selectedRestaurant, restaurantTags, showTagTextfield, restaurantList }) {
    return { selectedRestaurant, restaurantTags, showTagTextfield, restaurantList };
}
export default connect(mapStateToProps, {toggleTagTextfield, removeTag, fetchRestaurantDetail})(Details);