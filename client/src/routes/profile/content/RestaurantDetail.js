import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import TagList from './TagList';
import Typography from 'material-ui/Typography/Typography';

const styles = {
    grid: {
        marginTop: 50
    }
}

// dummy data
const restaurantDetail = {
    name: "MALA",
    tags: ["spicy", "everyday", "chinese", "fast", "take-out"],
    note: "The place I can eat every single day when I want something spicy",
    last_visit: "10.19.2017",
    visit_month: "4",
    total_visit: "20",
    top_dish: "Spicy Pot",
    worest_dish: "Spicy Fish",
    friend: ["Jerry", "John", "Stanley"],
    cover_photos: [
        "https://s3-media4.fl.yelpcdn.com/bphoto/8g2CIrJv__soJG63eKi3jA/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/bX3bCn-qOHCDWql_KC-uLQ/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/DxkWdB_7j0P7r9dSPJMFQA/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/eATWAFB-LijVMTyOyFlDzQ/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/YReRdyHCU-Nbz3eLPZi8ZA/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/nnqKPHHmChI0O6Y0Zjv_oQ/o.jpg"]
}

class RestaurantDetail extends Component {
    render() {
        const { classes } = this.props;
        const {restaurantDetail} = this.props;
        const yelp_starsURL = `/images/yelp_stars/regular/regular_${this.props.restaurantDetail.rating}.png`
        console.log(yelp_starsURL)
        return (
            <Grid container className={classes.grid}>
                <Typography type="display4">{restaurantDetail.name}</Typography>
                <img src={restaurantDetail.image_url} style={styles.photo}/>
                <h3>{restaurantDetail.name}</h3>
                <img 
                    id="yelp_logo" 
                    style={{height: "40px"}} 
                    src="/images/Yelp_trademark_RGB_outline.png" 
                    alt="facebook_login"
                />
                <img
                    id="yelp_stars"
                    src={yelp_starsURL}
                />
                <TagList />
            </Grid>
        )
    }
}
function mapStateToProps({ restaurantDetail }) {
    return { restaurantDetail };
}
export default connect(mapStateToProps, {})(withStyles(styles)(RestaurantDetail));