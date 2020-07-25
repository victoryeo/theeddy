import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

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
    title: "Soda",
    author: "dan fador"
  },
  {
    img: "https://images.theconversation.com/files/194291/original/file-20171113-27595-ox08qm.jpg",
    title: "Tequila",
    author: "jill",
    cols: 2,
    featured: true
  },
];

function DrinkList(props) {
  const { classes } = props;

  function handleClick(e) {
    console.log('click')
  };

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
      <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
        <ListSubheader component="div">July</ListSubheader>
      </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`}
                className={classes.icon} onClick={handleClick} >
                  <InfoIcon />
                </IconButton>
              }
            />
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
