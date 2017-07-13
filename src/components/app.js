import React, { Component } from 'react';
import YelpSearch from '../containers/yelp_search';
import YelpList from '../containers/yelp_list';

export default class App extends Component {
  render() {
    return (
    	<div>
    		<YelpSearch />
    		<YelpList />
    	</div>
    );
  }
}
