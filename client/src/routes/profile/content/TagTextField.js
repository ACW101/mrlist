import React, { Component } from 'react';
import { addTag, toggleTagTextfield } from './actions';
import { connect } from "react-redux";

class TagTextField extends Component {
    constructor(props){
        super(props)
        this.state = {value: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    componentDidMount() {
        this.textInput.focus();
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
            <input
                type='text'
                onBlur={this.props.toggleTagTextfield}
                ref={input => { this.textInput = input;}}
                value={this.state.value}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
                style={{width: 70}}
            />
            </form>
        )
    }
    handleKeyDown(e) {
        console.log(e.key);
        if (e.key == 'Backspace') {
            this.setState({ value: this.state.value.slice(0, -1) })
        }
    }
    handleChange(e) {
        this.setState({value: e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();
        if(this.props.selectedRestaurant == null || this.state.value == '') return;
        const params={
            restaurant_id: this.props.selectedRestaurant,
            name: this.state.value,
        }
        this.props.addTag(params);
        this.setState({value: ''});
        this.props.toggleTagTextfield();
    }
}

function mapStateToProps({ selectedRestaurant }) {
    return { selectedRestaurant };
}

export default connect(mapStateToProps, { addTag, toggleTagTextfield }) (TagTextField);