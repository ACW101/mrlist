import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography/Typography';
import Chip from 'material-ui/Chip';
const styles = {
    container: {
        margin: "50px 50px",
        padding: "50px 50px"
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    marginAfter: {
        margin: "5px 5px"
    }

}

// dummy data
const restaurantInfo = {
    name: "MALA",
    location: "Allston, MA",
    note: "The place I can eat every single day when I want something spicy",
    tags: ["spicy", "everyday", "chinese", "fast", "take-out"],
}

class RestaurantInfo extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.container}>
                <Typography type="headline">{restaurantInfo.name}</Typography>
                <Typography type="subheading">{restaurantInfo.location}</Typography>
                <div className={classes.row}>
                    {restaurantInfo.tags.map((e) => {
                        return (
                            <Chip className={classes.marginAfter}
                                label={"#" + e}
                            />
                        )
                    })}
                </div>
                <Typography type="paragraph">{restaurantInfo.note}</Typography>
            </Paper>
        )
    }
}

export default withStyles(styles)(RestaurantInfo);