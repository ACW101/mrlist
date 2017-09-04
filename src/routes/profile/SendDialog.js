import React, {Component} from 'react';

import {connect} from 'react-redux';
import DatePicker from 'material-ui/DatePicker';
import Subheader from 'material-ui/Subheader';
import SelectField from 'material-ui/SelectField';

import TagList from './TagList';

class SendDialog extends Component {
    render(){
        return (
            <div>
                Event Date: 
                <DatePicker hintText="yyyy-mm-dd" />
                Tags:
                <TagList />

            </div>
        )
    }
}
function mapStateToProps({  }) {
    return {  };
}
export default connect(mapStateToProps, {})(SendDialog);