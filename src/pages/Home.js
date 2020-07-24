import React, { Component } from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Typography from '@material-ui/core/Typography';
import mainLogo from '../assets/eddy01.jpg';
import Popup from './Popup';
import ReactDOM from 'react-dom';

const styles = ({
  root: {
    flexGrow: 1,
    justifyContent: "space-around",
    overflow: "hidden",
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
  },
  home: {
    width: "100%",
    height: "100%",
  }
});

class Home extends Component {
  constructor(props) {
    super(props);
    //this.handleChange = this.handleChange.bind(this);
    this.state = {
      query: 'Eddy',
      seen: false,
    }
    this.containerEl = document.createElement('div');
    this.externalWindow = null;
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('do validate');
      console.log(this.state.query)
      this.setState({
        seen: true,
      })
      ReactDOM.createPortal(this.props.children, this.containerEl);
    }
  }

  handleChange = (e) => {
    // If the search bar isn't empty
    if (e.target.value !== "") {
      this.setState({
          query: e.target.value,
      })
    }
  }

  togglePop = () => {
   this.setState({
    seen: !this.state.seen
   });
  };

  componentDidMount() {
    // open a new browser window and store a reference to it
    this.externalWindow = window.open('', '', 'width=600,height=400,left=200,top=200');

    // append the container <div> (that has props.children appended to it) to the body of the new window
    //this.externalWindow.document.body.appendChild(this.containerEl);
  }

  render() {
    return (
      <>
      <div align="right" style={{ backgroundColor: "black" }} >
        <Typography color="inherit" variant="h6">
          <input type="text" onChange={this.handleChange} onKeyDown={this.handleKeyDown} placeholder="Search..." />
        </Typography>
      </div>
      <div align="center" style={{ backgroundColor: "black" }} >
        <img style={styles.home}  src={mainLogo} alt="home"/>
      </div>
      <style>{'body { background-color: black; }'}</style>

      </>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
