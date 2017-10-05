import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ResultList from './ResultList';

// import { addTag, toggleTagTextfield } from './actions';
// import { connect } from "react-redux";
// import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class YelpDialog extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <ResultList />
            </div>
        )
    }
}