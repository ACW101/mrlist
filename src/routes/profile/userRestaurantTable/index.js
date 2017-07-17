import React, { Component } from 'react';
import { fetchUserList } from "../actions";
import { connect } from "react-redux";

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class UserRestaurantTable extends Component {
    componentDidMount() {
        this.props.fetchUserList().then(()=> console.log(this.props.userList));
    }
    render() {
        return (
            <Table multiSelectable={true}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>NAME</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {_.map(this.props.userList, (restaurant) => this.renderList(restaurant))}
                </TableBody>
            </Table>
        )
    }
    renderList(restaurant){
        return (
            <TableRow key={restaurant.id}>
                <TableRowColumn>{restaurant.name}</TableRowColumn>
            </TableRow>
        )
    }
}
function mapStateToProps({ userList }) {
    return { userList }; 
}
export default connect(mapStateToProps, { fetchUserList })(UserRestaurantTable);