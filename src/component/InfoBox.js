import React, { Component } from "react";
import './InfoBox.css';

class InfoBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="InfoBox">

        <h1>Welcome</h1>
        <div className="dropdown">
       <butoon class="dropbtn">Search</butoon>
       <div class="dropdown-content">
         <a href="#">Title</a>
         <a href="#">Artist</a> 
         </div>
       </div>
      </div>
    )
  }
}

export default InfoBox;