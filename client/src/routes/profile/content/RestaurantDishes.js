import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {
        margin: "50px 50px",
        padding: "50px 50px"
    },
    gridCell: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            justifyContent: "center",
        }
    },
    dishPhoto: {
        height: 120,
        width: 120,
        overflow: "hidden",
        backgroundSize: "cover",
        margin: "20px 20px"
    }
});

// dummy data
const restaurantDishes = [
    {
        name: "MALA Special Pot",
        url: "https://s3-media2.fl.yelpcdn.com/bphoto/HM2YasM30ld1oZGVtzyTWA/o.jpg"
    }, {
        name: "Crawfish Special Pot",
        url: "https://s3-media4.fl.yelpcdn.com/bphoto/nnqKPHHmChI0O6Y0Zjv_oQ/o.jpg"
    }, {
        name: "BBQ",
        url: "https://s3-media3.fl.yelpcdn.com/bphoto/954yAGzyfWBX5cGlIHDn_Q/o.jpg"
    }
]


class RestaurantDishes extends Component {
    renderGridCell = classes => e => {
        return (
            <Grid item xs={12} md={6} lg={4}>
                <div className={classes.gridCell}>
                    <div
                        src={e.photo} 
                        alt={e.name} 
                        className={classes.dishPhoto} 
                        style={{backgroundImage: `url(${ e.url })`}}>
                    </div>
                    <Typography type="body1">{e.name}</Typography>
                </div>
            </Grid>
        )
    }
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Typography type="headline">Dishes</Typography>
                <Grid container>
                    {
                        restaurantDishes.map(this.renderGridCell(classes))
                    }
                </Grid>
            </Paper>
        )
    }
}

export default compose(withStyles(styles), withWidth())(RestaurantDishes);