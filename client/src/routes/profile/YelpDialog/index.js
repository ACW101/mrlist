import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ResultList from './ResultList';

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