import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeImportDialog, importFromYelp, toggleImportCheckbox,  } from '../../../actions/RestaurantListAction'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';


const styles = {
};

class ImportDialog extends Component {
    state = {
        bookmarkURL: ""

    }
    handleChange = (event) => {
        this.setState({
            bookmarkURL: event.target.value
        })
    }
    handleClose = () => {
        this.props.closeImportDialog();
    };

    handleOpen = () => {
        this.props.openImportDialog();
    };
    handleToggle = (i) => (e) => {
        this.props.toggleImportCheckbox(i);
    }
    handleClick = (val) => e =>  {
        if (val === "import") {
            this.props.importFromYelp(this.state.bookmarkURL)
        } else if (val === "confirm") {
            this.handleClose();
        }
    }
    render() {
    const { classes } = this.props;

    const importPrompt = (
        <div>
            <TextField 
                type="url" 
                helperText="Paste your Yelp Bookmark URL here"
                onChange={this.handleChange}
                value={this.state.bookmarkURL}
            >
            </TextField>
            <Button onClick={this.handleClick("import")}>START IMPORT</Button>
        </div>
    )

    const importResultList = (
        <List>
            {this.props.importResult.map( (val, i) => {
                return (
                    <div>
                        <ListItem>
                            <ListItemText primary={val.name} />
                            <ListItemSecondaryAction>
                                <Checkbox
                                    checked={this.props.importCheckbox[i]}
                                    onChange={this.handleToggle(i)}
                                />
                            </ListItemSecondaryAction>
                        </ListItem>
                    </div>
                )
            })}
            <Button onClick={this.handleClick("confirm")}>
            CONFIRM
            </Button>
        </List>
    )

    return (
      <Dialog onClose={this.handleClose} open={this.props.isOpenImportDialog} >
        <DialogTitle id="simple-dialog-title">Import from Yelp bookmarks</DialogTitle>
        {this.props.importResult.length > 0 ? importResultList : importPrompt }
      </Dialog>
    );
  }
}

ImportDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func
};

function mapStateToProp({ isOpenImportDialog, importResult, importCheckbox }) {
    return { isOpenImportDialog, importResult, importCheckbox };
}

export default connect(mapStateToProp, { closeImportDialog, importFromYelp, toggleImportCheckbox }) (ImportDialog);
