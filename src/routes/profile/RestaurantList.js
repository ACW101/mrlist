import React, { Component } from 'react';
import { fetchRestaurantList, selectRestaurant, toggleAddDialog } from "./actions";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import YelpDialog from './YelpDialog';

import List from 'material-ui/List/List';
import Paper from 'material-ui/Paper'
import ListItem from 'material-ui/List/ListItem';
import ContentAdd from 'material-ui/svg-icons/content/add';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';
import {blue300, indigo900} from 'material-ui/styles/colors';

class RestaurantList extends Component {
    componentDidMount() {
        this.props.fetchRestaurantList();
        this.renderList = this.renderList.bind(this);
    }
    render() {
        const styles = {
            listHeader: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: "5px 5px"
            },
            addDialog: {
                height: '500px',
                maxHeight: '50%'
            },
            root: {
                paddingTop: "10%"
            }
        }
        const dialogAction = <FlatButton
            label="Done"
            primary={true}
            onClick={() => this.handleCloseAddDialog()}
        />
        return(
            <Paper id="restaurantList" zDepth={1}>
                <Dialog
                    title="Search on Yelp"
                    actions={dialogAction}
                    style={styles.root}
                    autoScrollBodyContent={true}
                    autoDetectWindowHeight={false}
                    open={this.props.isOpenAddRestaurantDialog}
                >
                    <YelpDialog />
                </Dialog>
                <div id="listHeader" style={styles.listHeader}>
                    <IconButton onClick={() => this.props.toggleAddDialog(true)}>
                        <ContentAdd />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {_.map(this.props.restaurantList, restaurant => this.renderList(restaurant))}
                </List>
            </Paper>
        )
    }
    renderList(restaurant) {        
        return(
            <div key={restaurant.id}>
                <ListItem
                    primaryText={restaurant.name}
                    onClick={() => this.handleSelectRestaurant(restaurant.id)}
                >
                </ListItem>
                <Divider/>
            </div>
        )
    }
    handleCloseAddDialog() {
        this.props.toggleAddDialog(false);
        this.props.fetchRestaurantList();
    }
    handleSelectRestaurant(restaurant_id) {
        this.props.selectRestaurant(restaurant_id);
    }
}

function mapStateToProps({restaurantList, isOpenAddRestaurantDialog}) {
    return {restaurantList, isOpenAddRestaurantDialog};
}
export default connect(mapStateToProps, { fetchRestaurantList, selectRestaurant, toggleAddDialog})(RestaurantList);