import React, { Component } from "react";
import './IBDetail.css';

class IBDetail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="IBDetail">
        <button onClick={this.props.hideDetail}>Back</button>
        <p>{JSON.stringify(this.props.data)}</p>
      </div>
    )
  }
}

export default IBDetail;