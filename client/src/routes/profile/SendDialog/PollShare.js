import React, {Component} from 'react';
import {connect} from 'react-redux';

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

class PollShare extends Component {
    componentDidMount(){
        this.urlTextField.focus();
    }
    render() {
        const url = `http://localhost:3000/poll/${this.props.newPoll}`
        return (
            <div>
                <input
                    readOnly
                    name="urlTextField"
                    value={url}
                    onFocus={(e) => e.target.select()}
                    ref={(urlTextField) => {this.urlTextField = urlTextField}}
                />
                <Button
                    label="Copy"
                    onClick={() => document.execCommand('copy') }
                />
            </div>
        )
    }
}
function mapStateToProps({newPoll}) {
    return {newPoll};
}
export default connect(mapStateToProps, {})(PollShare);