import React, { Component } from "react";
import IBWelcome from "./InfoBox/IBWelcome";
import "./InfoBox.css";

class InfoBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="InfoBox">
        <IBWelcome />
      </div>
    );
  }
}

export default InfoBox;
