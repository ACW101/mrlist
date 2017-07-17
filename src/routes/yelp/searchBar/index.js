import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRestaurant } from '../actions';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: "" , location: ""};
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	onInputChange(event, fieldName) {
		console.log(event.target.value);
		const newState = { [fieldName]: event.target.value};
		this.setState(newState);
	}
	onFormSubmit(event) {
		event.preventDefault();
		const query = {
			location: this.state.location,
			term: this.state.term,
		}

		this.props.fetchRestaurant(query);
	}
	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<TextField
					hintText="thai, noodle..."
					floatingLabelText="Search on Yelp"
					value={this.state.term}
					onChange={event => this.onInputChange(event, "term")}
				/>
				<TextField 
					hintText="Taipei, SongShan..."
					floatingLabelText="place"
					value={this.state.location}
					onChange={event => this.onInputChange(event, "location")}
				/><br/>
				<RaisedButton type="submit">Search</RaisedButton>
    		</form>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchRestaurant }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
