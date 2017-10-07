import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';


class RestaurantDetail extends Component {
    render() {
        const styles = {
            photo: {
                width: "100%",
                height: "100%",
                objectFit: "cover"
            },
            photoContainer: {
                width: "150px",
                height: "150px",
                padding: "2px"
            }
        }
        const {restaurantDetail} = this.props;
        const yelp_starsURL = `/images/yelp_stars/regular/regular_${this.props.restaurantDetail.rating}.png`
        console.log(yelp_starsURL)
        return (
            <div>
                <Paper style={styles.photoContainer}>
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
                </Paper>
            </div>
        )
    }
}
function mapStateToProps({ restaurantDetail }) {
    return { restaurantDetail };
}
export default connect(mapStateToProps, {})(RestaurantDetail);