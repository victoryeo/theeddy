import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const styles = theme => ({
  root: {
    margin: 20,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 600,
    height: 660
  },
  subheader: {
    width: "100%"
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
});

const tileData = [
  {
    img: "https://material-ui.com/static/images/grid-list/breakfast.jpg",
    title: "Breakfast",
    author: "jill111",
    cols: 2,
    featured: true
  },
  {
    img: "https://material-ui.com/static/images/grid-list/burgers.jpg",
    title: "Tasty burger",
    author: "director90",
    subfeatured: true
  },
  {
    img: "https://material-ui.com/static/images/grid-list/honey.jpg",
    title: "Honey",
    author: "fancycravel"
  },
  {
    img: "https://material-ui.com/static/images/grid-list/vegetables.jpg",
    title: "Vegetables",
    author: "jill111",
    cols: 2
  },
  {
    img: "https://material-ui.com/static/images/grid-list/plant.jpg",
    title: "Water plant",
    author: "BkrmadtyaKarki",
  },
  {
    img: "https://material-ui.com/static/images/grid-list/mushroom.jpg",
    title: "Mushrooms",
    author: "PublicDomainPictures"
  },
  {
    img: "https://material-ui.com/static/images/grid-list/olive.jpg",
    title: "Olive oil",
    author: "congerdesign"
  },
];

function EatList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1}
           rows={tile.featured ? 2 : [(tile.subfeatured ? 2 : 1)]
                }>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

EatList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EatList);
