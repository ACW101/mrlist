import React, {Component} from 'react';

import {connect} from 'react-redux';
import {onPollFormChange} from '../actions';
import Close from 'material-ui-icons/Close';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import {GridList, GridTile} from 'material-ui/GridList';
import {map, uniq, remove} from "lodash";


import TagList from '../TagList';

class PollForm extends Component {
    constructor(props) {
        super(props);
        this.handleSelectionChange = this.handleSelectionChange.bind(this);
        this.handleDeleteSelected = this.handleDeleteSelected.bind(this);
        this.handleDeleteSelected = this.handleDeleteSelected.bind(this)
    }
    onInputChange(event, inputName) {
        const newState = { [inputName]: event};
		this.props.onPollFormChange(newState);
	}
    componentWillReceiveProps(nextProps) {
        const {tagList, restaurantTags} = nextProps;
        this.handleSelectionChange(tagList, restaurantTags);        
    }
    render(){
        const styles = {
            root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            },
            gridList: {
            width: 'auto',
            height: 450,
            overflowY: 'auto',
            },  
        };
        return (
            <div>
                Name of Event:
                <br/>
                <TextField
                    name="eventName"

                    onChange={event => this.onInputChange(event.target.value, "eventName")}
                />
                <br/>
                Date:
                <TextField
                    name="eventDate"
                    type="date"
                    defaultValue="2017-05-04"
                    onChange={(event, date) => this.onInputChange(date, "eventDate")}
                />
                <br/>
                Tags:
                <TagList /> 
                Restaurants Selected:
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                    cols={3}
                >
                    {this.props.pollForm.selected.map(restaurantId => {
                        return (
                            <GridTile
                                key={restaurantId}
                                title={this.props.restaurantList[restaurantId].name}
                                titlePosition="top"   
                                actionIcon={
                                    <IconButton
                                        onClick={() => this.handleDeleteSelected(restaurantId)}
                                    >
                                        <Close color="white" />
                                    </IconButton>
                                }
                                actionPosition="left"
                            >
                            </GridTile>)
                        })
                    }
                </GridList>
            </div>
        )
    }
    handleSelectionChange(tagList, restaurantTags) {
        var restaurantsWithTags = [];
        const selectedTags = map(tagList, (tag) => {
            if(tag.selected) {
                map(restaurantTags, (restaurant, key) => {
                    if (restaurant[tag.id] != null) {
                        restaurantsWithTags.push(key);
                    }
                })
            }
        });
        this.props.onPollFormChange({selected: uniq(restaurantsWithTags)});
    }
    handleDeleteSelected(restaurantId) {
        let {selected} = this.props.pollForm;
        const newState = remove(selected, n => n != restaurantId);
        console.log(newState);
        this.props.onPollFormChange({selected: newState})
    }
}
function mapStateToProps({ restaurantTags, tagList, restaurantList, pollForm }) {
    return { restaurantTags, tagList, restaurantList, pollForm };
}
export default connect(mapStateToProps, {onPollFormChange})(PollForm);