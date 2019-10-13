import React, { Component } from "react";
import "./IBDetail.css";

class IBDetail extends Component {
  constructor(props) {
    super(props);

    this.makeItemDetail = this.makeItemDetail.bind(this);
  }

  makeItemDetail(data) {
    return (
      <div className="IBDetail-item">
        <h1>{data.title}</h1>
        <p className="IBDetail-artist">
          {data.fullArtist}{" "}
          {data.fullArtist !== "Unknown" && (
            <button
              className="IBDetail-artist-link"
              onClick={() => this.props.commitSearch(data.fullArtist)}
            >
              (see more)
            </button>
          )}
        </p>

        {data.classification && (
          <p className="IBDetail-classification">
            <i class="material-icons">brush</i>
            <span>{data.classification}</span>
          </p>
        )}

        <p className="IBDetail-address">
          <i className="material-icons">my_location</i>
          <span>{data.safeAddress}</span>
        </p>

        {data.description && (
          <p className="IBDetail-description">{data.description}</p>
        )}
      </div>
    );
  }

  render() {
    return (
      <div className="IBDetail">
        <button
          onClick={this.props.closeDetail}
          aria-label="back"
          className="IBDetail--back-button"
        >
          <i className="material-icons">arrow_back</i>
        </button>

        {this.props.data.map(this.makeItemDetail)}

        {false && <p>{JSON.stringify(this.props.data)}</p>}
      </div>
    );
  }
}

export default IBDetail;
