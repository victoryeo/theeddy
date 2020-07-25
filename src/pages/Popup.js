import React, { Component } from "react";

export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };

render() {
  //console.log(this.props)
  return (
   <div >
     <div className="modal_content">
       <span className="close" onClick={this.handleClick}>&times;
         <p>Search result</p>
         <p>{this.props.string}</p>
       </span>
     </div>
   </div>
  );
 }
}
