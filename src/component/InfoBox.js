import React, { Component } from "react";
import './InfoBox.css';

class InfoBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="InfoBox">
               <form>
          <h1>Welcome</h1>
          <p>search</p>
          <input
            type="text"
          />
        </form>
      </div>
    )
  }
}

export default InfoBox;