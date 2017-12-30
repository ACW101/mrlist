import React, {Component} from 'react';
import { connect } from 'react-redux';

import { addFriends } from '../actions';

import Dialog from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import Add from 'material-ui-icons/Add';
import Subheader from 'material-ui/Subheader';

class AddFriendDialog extends Component {
    constructor(props) {
		super(props);
        this.state = { 
            emailField: "",
            nameField: "",
            friends: []
        };
		this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleRequestDelete = this.handleRequestDelete.bind(this);
	}
    onInputChange(event, fieldName) {
        this.setState({ [fieldName]: event.target.value });
    }
    onFormSubmit(event) {
        event.preventDefault();
        const newFriend = {
            name: this.state.nameField,
            email: this.state.emailField
        }
        if (newFriend.email != '' && newFriend.name != '') {
            this.setState({
                emailField: '',
                nameField: '',
                friends: [...this.state.friends, newFriend]
            })
            addFriends(newFriend);
        }
    }
    handleRequestDelete(i) {
        const friendToDelete = this.state.friends[i];
        let friendCopy = this.state.friends;
        friendCopy.splice(i, 1);
        this.setState({
            friends: friendCopy
        })
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
        const { selectedRestaurants, userList } = this.props;
        const actions = [
            <Button
                label="DONE"
                primary={true}
                onTouchTap={this.props.handleClose}
            />
        ];
        return(
            <Dialog
                title="Add Friend"
                modal={false}
                actions={actions}
                open={this.props.open}
            >
                <form onSubmit={this.onFormSubmit} className="input-group">
                <Paper style={formStyle}>
                    <TextField
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
                    <Button
                        fab
                        mini={true } 
                        style={addButtonStyle} 
                        zDepth={0}
                        type='submit'    
                    >
                        <Add />
                    </Button>
                </Paper>
                </form>
                <div style={wrapperStyle}>
                    {this.renderChips(this.state.friends)}
                </div>
            </Dialog>
        )
    }
    renderChips(friends) {
        const chipStyle = {
            margin: 4,
        }
        return friends.map((friend, i) => {
            return (
                <Chip key={i} style={chipStyle} onRequestDelete={() => this.handleRequestDelete(i)}>
                    {`${friend.name} - ${friend.email}`}
                </Chip>
            )
        })
    }
}
function mapStateToProps({ friendList }) {
    return { friendList };
}

export default connect(mapStateToProps, {addFriends})(AddFriendDialog);