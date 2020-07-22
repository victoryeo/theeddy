import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Typography from '@material-ui/core/Typography';
import mainLogo from '../assets/eddy01.jpg';
import '../App.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 600,
    height: 650
  },
  subheader: {
    width: "50%"
  },
  textp: {
    color: "#cccccc"
  },
  full: {
    width: "100%",
    height: "100%"
  }
});

function ImageGridList(props) {
  const { classes } = props;

  return (
    <>
    <div className={classes.textp} style={{ backgroundColor: "black" }} >
    <Typography color="inherit" variant="h6">
      Home
    </Typography>
    </div>
    <img className="home" src={mainLogo} alt="home"/>
    </>
  );
}

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageGridList);
