import React, { Component } from 'react';
import { fetchRestaurantList, selectRestaurant, toggleAddDialog } from "./actions";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import YelpDialog from './YelpDialog';
import {map} from "lodash";

import List from 'material-ui/List/List';
import Paper from 'material-ui/Paper'
import ListItem from 'material-ui/List/ListItem';
import Add from 'material-ui-icons/Add';
import IconButton from 'material-ui/Button';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';

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
            },
            container: {
                height: '100%',
            }

        }
        const dialogAction = <Button
            label="Done"
            primary={true}
            onClick={() => this.handleCloseAddDialog()}
        />
        return(
            <div id="restaurantList">
                <List style={styles.container}>
                    {map(this.props.restaurantList, restaurant => this.renderList(restaurant))}
                </List>
            </div>
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