import React, { Component } from "react";
import './IBWelcome.css';

class IBWelcome extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="IBWelcome">

        <h1>Welcome to Seattle!</h1>
        
        <div className="blurb">
        Click on a pin on the map to learn more
        Click around and explore Seattle’s
public art! Or if you’re looking for
something more specific, try using 
filters or search a particular artist or
title below.

        </div>


        <div className="dropdown">
       <button className="dropbtn">Search</button>
       <div className="dropdown-content">
         <a href="#">Title</a>
         <a href="#">Artist</a>
         </div>
       </div>
      </div>
    )
  }
}

export default IBWelcome;