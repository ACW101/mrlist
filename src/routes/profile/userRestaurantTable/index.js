import React, { Component } from 'react';
import { fetchUserList, selectRestaurants} from "../actions";
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
    constructor(props) {
        super(props);
        this.handleRowSelection = this.handleRowSelection.bind(this);
    }
    componentDidMount() {
        this.props.fetchUserList();
    }
    render() {
        return (
            <Table
            multiSelectable={true} 
            onRowSelection={this.handleRowSelection}
            height={this.props.height}
            >
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>NAME</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody deselectOnClickaway={false}>
                    {this.props.userList.map((restaurant) => this.renderList(restaurant)) }
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
    handleRowSelection(selectedRows) {
        this.props.selectRestaurants(selectedRows);
    }
}
function mapStateToProps({ userList }) {
    return { userList };
}
export default connect(mapStateToProps, { fetchUserList, selectRestaurants })(UserRestaurantTable);