import React, { Component } from "react";
import IBWelcome from "./InfoBox/IBWelcome";
import IBDetail from "./InfoBox/IBDetail";
import "./InfoBox.css";

class InfoBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let cls = "InfoBox "
    if (this.props.searchActive) {
      cls += "InfoBox--search "
    }
    if (this.props.detailVisible) {
      cls += "InfoBox--detail"
    }

    return (
      <div className="InfoBox">
        <IBWelcome
          activateSearch={this.props.activateSearch}
          commitSearch={this.props.commitSearch}
        />
        <IBDetail
          data={this.props.data}
          closeDetail={this.props.closeDetail}
        />
      </div>
    );
  }
}

export default InfoBox;
