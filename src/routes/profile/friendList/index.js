import React, { Component } from 'react';
import { fetchFriendList } from "../actions";
import { connect } from "react-redux";

import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import FontIcon from 'material-ui/FontIcon';
import Subheader from 'material-ui/Subheader';

class FriendList extends Component {
    constructor(props) {
        super(props);
        // this.handleItemSelection = this.handleItemSelection.bind(this);
    }
    componentDidMount() {
        this.props.fetchFriendList();
    }
    render() {
        return (
            <List>
                <Subheader>Friends</Subheader>
                {this.props.friendList.map(friend => this.renderList(friend))}
            </List>
        )
    }
    renderList(friend){
        const nameFirstChar = friend.name[0].toUpperCase();
        const avatar = <Avatar>{nameFirstChar}</Avatar>;
        return (
            <ListItem
                disabled={false}
                leftAvatar={avatar}
                primaryText={friend.name}
                secondaryText={friend.email}
            >
            </ListItem>
        )
    }
    handleItemSelection(selectedRows) {
        this.props.selectRestaurants(selectedRows);
    }
}
function mapStateToProps({ friendList }) {
    return { friendList };
}
export default connect(mapStateToProps, { fetchFriendList })(FriendList);