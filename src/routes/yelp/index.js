import React, { Component } from 'react';
import ResultList from './resultList';
import SearchBar from './searchBar';
import Paper from 'material-ui/Paper';

export default class Yelp extends Component {
  render() {
    const containerStyle = {
      width: '1036px',
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
    }
    return (
    	<div>
        <Paper zDepth={2} style={containerStyle}>
          <h1>Find and Add Restaurants</h1>
          <SearchBar />
          <ResultList />
        </Paper>
    	</div>
    );
  }
}
