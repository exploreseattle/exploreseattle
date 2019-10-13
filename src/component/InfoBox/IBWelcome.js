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
        Click around to learn more about Seattle’s
public art! Or if you’re looking for
something more specific, search below by a particular artist, 
title, location, medium, etc.

        </div>
        <input type="search" id="site-search" name="q"></input>

        <div className="dropdown">
       <button className="dropbtn">Search</button>
       
         
         
         </div>
       </div>
      
    )
  }
}

export default IBWelcome;