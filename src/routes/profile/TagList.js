import React, { Component } from 'react';
import { fetchTagList, selectTag } from "./actions";
import { connect } from "react-redux";
import {blue300, indigo900} from 'material-ui/styles/colors';

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
        return(
            <Chip
                backgroundColor={tag.id == this.props.selectedTag ? blue300 : null}
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

function mapStateToProps({ tagList, selectedTag}) {
    return { tagList, selectedTag};
}
export default connect(mapStateToProps, { fetchTagList, selectTag })(TagList);