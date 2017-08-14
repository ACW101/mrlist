import React, { Component } from 'react';
import { fetchTagList } from "./actions";
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
            <div>
                <Chip
                    style={styles.chip}
                >
                    {tag.name}
                </Chip>
            </div>
        )
    }
}

function mapStateToProps({ tagList }) {
    return { tagList };
}
export default connect(mapStateToProps, { fetchTagList })(TagList);