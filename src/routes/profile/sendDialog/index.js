import React, {Component} from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';


class SendDialog extends Component {
    render() {
        const actions = [
            <RaisedButton
                label="Send"
                primary={true}
                onTouchTap={this.props.handleClose}
            />
        ];
        const wrapperStyle = {
            display: "flex",
            flexWrap: "wrap"
        }
        const { selectedRestaurants, userList } = this.props;
        return(
            <Dialog
                title="Invitation"
                actions={actions}
                modal={false}
                open={this.props.open}
            >
                <div>
                    Selected Restaurants:
                    <div style={wrapperStyle}>
                        {this.renderChips(selectedRestaurants, userList)}
                    </div>
                </div>
            </Dialog>
        )
    }
    renderChips(selectedRestaurants, userList) {
        const chipStyle = {
            margin: 4,
        }
        console.log(selectedRestaurants);
        return selectedRestaurants.map((index) => {
            const restaurant = userList[index];
            return (
                <Chip key={restaurant.id} style={chipStyle}>
                    {restaurant.name}
                </Chip>
            )
        })
    }
}
function mapStateToProps({ selectedRestaurants, userList }) {
    return { selectedRestaurants, userList };
}

export default connect(mapStateToProps, null)(SendDialog);