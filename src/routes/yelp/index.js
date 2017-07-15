import React, { Component } from 'react';
import ResultTable from './resultTable';
import SearchBar from './searchBar';

export default class Yelp extends Component {
  render() {
    return (
    	<div>
        this is yelp
    		<SearchBar />
    		<ResultTable />
    	</div>
    );
  }
}
