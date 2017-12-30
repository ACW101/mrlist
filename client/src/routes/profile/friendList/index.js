import React, { Component } from 'react';
import { fetchFriendList } from "../actions";
import { connect } from "react-redux";

import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import FontIcon from 'material-ui/FontIcon';
import Subheader from 'material-ui/Subheader';
import Button from 'material-ui/Button';
import Add from 'material-ui-icons/Add';
import Divider from 'material-ui/Divider';

class FriendList extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchFriendList();
    }
    render() {
        return (
            <div>
                <div style={{display: 'flex', position: 'relative', top: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 56}}>
                    <Subheader style={{width: 'auto'}}>Friends</Subheader>
                    <Button
                        fab
                        style={{marginRight: 10}}
                        mini={true}
                        secondary={true}
                        zDepth={0}
                        onTouchTap={this.props.handleOpen}
                    >
                        <Add />
                    </Button>
                </div>
                <Divider/>
                <List style={{height: this.props.height, overflowY: 'scroll'}}>
                    {this.props.friendList.map(friend => this.renderList(friend))}
                </List>
            </div>
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