import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  },
  subheader: {
    width: "100%"
  }
});

const tileData = [
  {
    img: "https://www.unicef.org/malaysia/sites/unicef.org.malaysia/files/styles/press_release_feature/public/beverages-carbonated-carbonated-drink-1282273.jpg",
    title: "Drink",
    author: "danfador"
  },
  {
    img: "https://images.theconversation.com/files/194291/original/file-20171113-27595-ox08qm.jpg",
    title: "Drink",
    author: "jill111",
    cols: 2,
    featured: true
  },
];

function DrinkList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

DrinkList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DrinkList);
