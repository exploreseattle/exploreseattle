import React, { Component } from "react";
import './IBDetail.css';

class IBDetail extends Component {
  constructor(props) {
    super(props)

    this.makeItemDetail = this.makeItemDetail.bind(this);
  }

  makeItemDetail(data) {
    return (
      <div className="IBDetail-item">
        <h1>{data.title}</h1>
        <p className="IBDetail-artist">
          {data.fullArtist}
        </p>

        {data.classification &&
          <p className="IBDetail-classification">
            {data.classification}
          </p>
        }

        <p className="IBDetail-address">
          {data.safeAddress}
        </p>

        {data.description &&
          <p className="IBDetail-description">
            {data.description}
          </p>
        }

      </div>
    )
  }

  render() {
    return (
      <div className="IBDetail">
        <button onClick={this.props.closeDetail}>Back</button>

        {this.props.data.map(this.makeItemDetail)}

        {false && <p>{JSON.stringify(this.props.data)}</p>}
      </div>
    )
  }
}

export default IBDetail;