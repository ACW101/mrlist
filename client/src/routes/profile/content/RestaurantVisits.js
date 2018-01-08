    import React, {Component} from 'react';
    import { connect } from 'react-redux';
    import { withStyles } from 'material-ui/styles';
    import compose from 'recompose/compose';
    import withWidth from 'material-ui/utils/withWidth';
    import Grid from 'material-ui/Grid';
    import Paper from 'material-ui/Paper';
    import Typography from 'material-ui/Typography';
    import StarRatingComponent from 'react-star-rating-component';
    import NavigateNextIcon from 'material-ui-icons/NavigateNext';
    import NavigateBeforeIcon from 'material-ui-icons/NavigateBefore';
    import IconButton from 'material-ui/IconButton';
    import Button from 'material-ui/Button';

    const styles = theme => { return {
            root: {
                margin: "50px 50px",
                padding: "50px 50px",
            },
            flex: {
                display: 'flex',
                [theme.breakpoints.down('sm')]: {
                    flexDirection: "column",
                    justifyContent: "center",
                }
            },
            visitContainer: {
                width: "100%",
                height: 250,
                display: "flex",
                flexDirection: "row",
            },
            visitPhoto: {
                height: 250,
                width: 300,
                overflow: "hidden",
                backgroundSize: "cover",
                backgroundPosition: "center",
            },
            visitContent: {
                display: "flex",
                flexDirection: "column",
            },
            navigateButtons: {
                display: "flex",
                marginTop: -28,
                height: "100%",
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            },
            visitPhotoTitle: {
                marginTop: 5,
                display: "flex",
                justifyContent: "space-around"
            }
        }
    }

    // dummy data
    const restaurantVisits = [
        {
            dishes: [
                {
                    name: "MALA Special Pot",
                    photo: "https://s3-media4.fl.yelpcdn.com/bphoto/hxpD4_Hv0Gy8UOFAVlVPyw/o.jpg",
                    stars: 5
                },
                {
                    name: "MALA Special Pot",
                    photo: "https://s3-media4.fl.yelpcdn.com/bphoto/hxpD4_Hv0Gy8UOFAVlVPyw/o.jpg",
                    stars: 5
                },
                {
                    name: "MALA Special Pot",
                    photo: "https://s3-media4.fl.yelpcdn.com/bphoto/hxpD4_Hv0Gy8UOFAVlVPyw/o.jpg",
                    stars: 5
                }
            ],
            date: "10/30/2017",
            friends: [
                {
                    name: "Jerry",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmavfO0SftVjdMIyXTZH1o2I4w-FP5ETIQlKMA8hG7Z_f2UYQugw"
                }
            ]
        }
    ]

    class RestaurantVisits extends Component {
        renderGridCell = classes => visit => {
            return (
                <Grid item xs={12}>
                    <Paper square elevation={6} className={classes.visitContainer}>
                        <div
                            alt="photo 1"
                            className={classes.visitPhoto} 
                            style={{backgroundImage: `url(${ visit.dishes[0].photo })`}}>
                            <div className={classes.visitPhotoTitle}>
                                <Typography color="accent">{visit.dishes[0].name}</Typography>
                                <StarRatingComponent
                                    name="ReviewRating"
                                    value={visit.dishes[0].stars}
                                    editing={false}/>
                            </div>
                            <div className={classes.navigateButtons}>
                                <IconButton color="contrast">
                                    <NavigateBeforeIcon />
                                </IconButton>
                                <IconButton color="contrast">
                                    <NavigateNextIcon />
                                </IconButton>
                            </div>
                        </div>
                        <div className={classes.visitContent}>
                            <Typography type="title">{visit.date}</Typography>
                            {visit.dishes.map(this.renderDishesNames(classes))}
                        </div>
                    </Paper>
                </Grid>
            )
        }
        renderDishesNames = classes => dish => {
            return (
                <Button>{dish.name}</Button>
            )
        }
        render() {
            const { classes } = this.props;
            return (
                <Paper className={classes.root}>
                    <Typography type="headline">Visits</Typography>
                    <Grid container>
                        {
                            restaurantVisits.map(this.renderGridCell(classes))
                        }
                    </Grid>
                </Paper>
            )
        }
    }

    export default compose(withStyles(styles), withWidth())(RestaurantVisits);