import React, {Component} from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Subheader from 'material-ui/Subheader';
import muiThemeable from 'material-ui/styles/muiThemeable';

class AddFriendDialog extends Component {
    constructor(props) {
		super(props);

        this.state = { 
            emailField: "",
            nameField: "",
            emails: [],
            names: []
        };
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
    onInputChange(event, fieldName) {
        this.setState({ [fieldName]: event.target.value });
    }
    onFormSubmit(event) {
        event.preventDefault();
        const newEmail = this.state.emailField;
        const newName = this.state.nameField;
        if (newEmail != '') {
            this.setState({
                emailField: '',
                nameField: '',
                emails: [...this.state.emails, newEmail],
                names: [...this.state.names, newName]
            })
        }
	}
    render() {
        const addButtonStyle = {
			marginRight: '5px',
		}
        const formStyle = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
        const wrapperStyle = {
            display: "flex",
            flexWrap: "wrap",
            marginTop: 10,
        }
        const verticalLine = {
            borderRight: `thin solid ${this.props.muiTheme.palette.borderColor}`,
        }
        const { selectedRestaurants, userList } = this.props;
        return(
            <Dialog
                title="Add Friend"
                modal={false}
                open={this.props.open}
            >
                <form onSubmit={this.onFormSubmit} className="input-group">
                <Paper style={formStyle}>
                    <TextField
                        style={verticalLine}
                        hintText="Name"
                        underlineShow={false}
                        value={this.state.nameField}
                        fullWidth={true}
                        onChange={event => this.onInputChange(event, "nameField")}
                    />
                    <TextField
                        hintText="Email"
                        underlineShow={false}
                        value={this.state.emailField}
                        fullWidth={true}
                        onChange={event => this.onInputChange(event, "emailField")}
                    />
                    <FloatingActionButton
                        mini={true } 
                        style={addButtonStyle} 
                        zDepth={0}
                        type='submit'    
                    >
                        <ContentAdd />
                    </FloatingActionButton>
                </Paper>
                </form>
                <div style={wrapperStyle}>
                    {this.renderChips(this.state.names)}
                </div>
            </Dialog>
        )
    }
    renderChips(names) {
        const chipStyle = {
            margin: 4,
        }
        return names.map((name, i) => {
            return (
                <Chip key={i} style={chipStyle}>
                    {name}
                </Chip>
            )
        })
    }
}
function mapStateToProps({ friendList }) {
    return { friendList };
}

export default connect(mapStateToProps, null)(muiThemeable()(AddFriendDialog));