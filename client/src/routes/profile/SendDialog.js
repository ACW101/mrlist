import React, {Component} from 'react';
import {connect} from 'react-redux';

import PollForm from './SendDialog/PollForm';
import PollShare from './SendDialog/PollShare';

class SendDialog extends Component{
    render() {
        return this.props.newPoll == null ? <PollForm/> : <PollShare/>
    }
}
function mapStateToProps({newPoll}) {
    return {newPoll};
}
export default connect(mapStateToProps, {})(SendDialog);