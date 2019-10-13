import React, { Component } from "react";
import './IBWelcome.css';

class IBWelcome extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="IBWelcome">

        <h1>Welcome</h1>
        <div className="dropdown">
       <button class="dropbtn">Search</button>
       <div class="dropdown-content">
         <a href="#">Title</a>
         <a href="#">Artist</a>
         </div>
       </div>
      </div>
    )
  }
}

export default IBWelcome;