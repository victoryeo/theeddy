import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import storyLogo from '../assets/theddy02.jpg';

const styles = ({
  root: {
    margin: 20,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    overflow: "hidden",
  },
  gridList: {
    width: 600,
    height: 600
  },
  subheader: {
    width: "100%"
  }
});

class Story extends Component {

  render() {
    return (
      <>
      <Typography color="inherit" variant="h6">
      The Eddy Story
      </Typography>
<div style={styles.root}>
<p>
It is a story of friendship and food, and a mission to create a great-tasting burger.
</p><p>
Meet Eddy: One real man with varied backgrounds and interests, but vastly different two personalities.
</p><p>
One is outspoken, boisterous and fast-thinking. The other is quiet, reflective and soft spoken.
One dives in to everything head first, the other prefers to test the waters first.
</p><p>
They are a dynamic duo with vastly different personalities and an ability to disagree on nearly everything.
Except for what tops both of their lists as the perfect food item—the all-American burger. With this shared
burger love and boredom from retirement, this man has developed a new restaurant appropriately named The Eddy.
His goal: design a family friendly restaurant that provides customers with three essentials: delicious food,
exemplary customer service, and an extraordinary dining experience.
</p><p>
To achieve this goal, Eddy dined at numerous restaurants across Chicago and
throughout the US to assess the current state of the gourmet burger. To help develop
 their own better burger, the pair assembled a small team of co-workers to help develop
  the menu and framework for the restaurant.
</p><p>
The team quickly settled on a mission, to put "good taste in everything we do” and began
searching for high quality ingredients from Chicago and the surrounding area. In the
 winter of 2009, The Eddy hosted an eight week test restaurant at the College of
 DuPage, serving over 1100 meals to friends, students, and members of community
 organizations in exchange for feedback on the food and service. The customer feedback
 was analyzed and the menu was tweaked to reflect customer suggestions and comments.
 And of course, Eddy spent numerous hours debating ideas, recipes and decisions.
 But with time, persistence and hard work, the current Eddy’s menu and restaurant
 concept was finalized.
</p><p>
The Eddy's tale of friendship and food took on a new chapter as their first
restaurant opened its doors to customers in August 2010. Come taste for yourself what
one men (who has split personality) considers to be the best tasting burger around.
</p>
      </div>
      <img src={storyLogo} alt="logo"/>
      </>
    );
  }
}

Story.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Story);
