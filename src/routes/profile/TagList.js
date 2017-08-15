import React, { Component } from 'react';
import { fetchTagList, selectTag } from "./actions";
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

class TagList extends Component {
    componentDidMount() {
        this.props.fetchTagList();
    }
    render() {
        return(
            <div style={styles.wrapper}>
                {this.props.tagList.map(tag => this.renderList(tag))}
            </div>
        )
    }
    renderList(tag) {
        console.log(tag)
        return(
            <Chip
                key={tag.id}
                style={styles.chip}
                onClick={() => this.handleTagSelect(tag.id)}
            >
                {tag.name}
            </Chip>
        )
    }
    handleTagSelect(tag_id) {
        this.props.selectTag(tag_id);
        console.log(tag_id);
    }
}

function mapStateToProps({ tagList }) {
    return { tagList };
}
export default connect(mapStateToProps, { fetchTagList, selectTag })(TagList);