import React, { Component } from 'react';
import {connect} from "react-redux";
import {toggleTagTextfield, removeTag} from "./actions";

import Chip from 'material-ui/Chip';
import TagTextfield from './TagTextField';
import {map} from "lodash";

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
        backgroundColor: "blue",
    }
}

class TagList extends Component {
    componentWillReceiveProps() {
        console.log(this.props.restaurantTags)
    }
    render() {
        const restaurant_id = this.props.selectedRestaurant;
        const restaurantTags = this.props.restaurantTags[restaurant_id];
        const AddBtn = (
            <Chip
                style={styles.add} 
                mini={true} 
                zDepth={0}
                onClick={() => this.handleAddButtonClicked()}
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
        return (
            <div style={styles.wrapper}>
                {map(restaurantTags, (tagName, tagId) => this.renderList(tagName, tagId))}
                {this.props.showTagTextfield ? textField : AddBtn }
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
function mapStateToProps({selectedRestaurant, restaurantTags, showTagTextfield }) {
    return {selectedRestaurant, restaurantTags, showTagTextfield };
}
export default connect(mapStateToProps, {toggleTagTextfield, removeTag})(TagList);