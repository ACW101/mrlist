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
    constructor(props) {
        super(props);
        this.renderList = this.renderList.bind(this)
    }
    componentDidMount() {
        this.props.fetchTagList();
    }
    render() {
        return(
            <div style={styles.wrapper}>
                {_.map(this.props.tagList, tag => this.renderList(tag))}
            </div>
        )
    }
    renderList(tag) {
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
    }
}

function mapStateToProps({ tagList }) {
    return { tagList };
}
export default connect(mapStateToProps, { fetchTagList, selectTag })(TagList);