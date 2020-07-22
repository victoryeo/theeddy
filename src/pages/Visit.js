import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Typography from '@material-ui/core/Typography';

const styles = ({
  root: {
    margin: 0,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    width: 600,
    height: 850
  },
  subheader: {
    width: "100%"
  }
});

const mapStyles = {
  width: '70%',
  height: '70%'
};

class  Visit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <Typography color="inherit" variant="h6">
        This is where we are
      </Typography>
      <div style={styles.root}>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
           lat: 41.8781,
           lng: 87.6298
         }}
         />
      </div>
      </>
    );
  }
}

Visit.propTypes = {
  classes: PropTypes.object.isRequired
};

export default (GoogleApiWrapper({
  apiKey: 'AIzaSyD6-FRm_114Pe1DbY8a5q87XUVo0Yr0JbY'
})) (Visit);
