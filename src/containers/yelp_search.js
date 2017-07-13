import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRestaurant } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: "" , location: ""};
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	onInputChange(event) {
		const keyToUpdate = {};
		keyToUpdate[event.target.name] = event.target.value;
		this.setState(keyToUpdate);
		console.log(this.state);
	}
	onFormSubmit(event) {
		event.preventDefault();
		const query = {
			location: this.state.location,
			term: this.state.term,
		}

		this.props.fetchRestaurant(query);
		this.setState({ term: "", location: ""});
	}
	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<div className="row">
					<input 
						className="form-control" 
						placeholder="thai, noodle..."
						name="term"
						value={this.state.term}
						onChange={event => this.onInputChange(event)}
					/>
					<input 
						className="form-control" 
						placeholder="Taipei"
						name="location"
						value={this.state.location}
						onChange={event => this.onInputChange(event)}
					/>
				</div>
				
				<span className="input-group-btn">
					<button type="submit" className="btn btn-default">Search</button>
				</span>
    	</form>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchRestaurant }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
