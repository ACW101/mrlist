import React, { Component } from 'react';

export default class TagTextField extends Component {
    componentDidMount() {
        this.textInput.focus();
    }
    render() {
        return(
            <input
                type='text'
                onBlur={this.props.toggleTagTextfield}
                ref={input => { this.textInput = input;}}
            />
        )
    }
}