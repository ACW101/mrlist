import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile } from 'material-ui/GridList';

const styles = theme => ({
    gridList: {
      width: "calc(100% + 100px)",
      height: "auto",
    }
});
  

// dummy data
const tileData = {
    cover_photos: [
        "https://s3-media4.fl.yelpcdn.com/bphoto/8g2CIrJv__soJG63eKi3jA/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/bX3bCn-qOHCDWql_KC-uLQ/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/DxkWdB_7j0P7r9dSPJMFQA/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/eATWAFB-LijVMTyOyFlDzQ/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/nnqKPHHmChI0O6Y0Zjv_oQ/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/YReRdyHCU-Nbz3eLPZi8ZA/o.jpg"]
}

class CoverGridList extends Component {
    render() {
        const { classes } = this.props;
        return (
            <GridList cellHeight={200} className={classes.gridList} cols={4}>
                {tileData.cover_photos.map((tile, i) => (
                <GridListTile key={i} cols={i === 0 || i === 4 ? 2 : 1}>
                    <img src={tile} alt={tile} />
                </GridListTile>
                ))}
            </GridList>
        )
    }
}
export default withStyles(styles)(CoverGridList);