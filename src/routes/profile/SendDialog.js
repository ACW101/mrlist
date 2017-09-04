import React, {Component} from 'react';

import {connect} from 'react-redux';
import DatePicker from 'material-ui/DatePicker';
import Subheader from 'material-ui/Subheader';
import SelectField from 'material-ui/SelectField';
import Close from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import {GridList, GridTile} from 'material-ui/GridList';


import TagList from './TagList';

class SendDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [],
        }
        this.handleSelectionChange = this.handleSelectionChange.bind(this);
        this.handleDeleteSelected = this.handleDeleteSelected.bind(this);
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
                Event Date: 
                <DatePicker hintText="yyyy-mm-dd" />
                Tags:
                <TagList />
                Restaurants Selected:
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                    cols={3}
                >
                    {this.state.selected.map(restaurantId => {
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
                    }
                    )}
                </GridList>
            </div>
        )
    }
    handleSelectionChange(tagList, restaurantTags) {
        var restaurantsWithTags = [];
        const selectedTags = _.map(tagList, (tag) => {
            if(tag.selected) {
                _.map(restaurantTags, (restaurant, key) => {
                    if (restaurant[tag.id] != null) {
                        restaurantsWithTags.push(key);
                    }
                })
            }
        });
        this.setState({selected: _.uniq(restaurantsWithTags)});
    }
    handleDeleteSelected(restaurantId) {
        const newState = _.remove(this.state.selected, n => n != restaurantId);
        this.setState({selected: newState});
    }
}
function mapStateToProps({ restaurantTags, tagList, restaurantList }) {
    return { restaurantTags, tagList, restaurantList };
}
export default connect(mapStateToProps, {})(SendDialog);