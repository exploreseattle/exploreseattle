import React, { Component } from "react";
import "./IBSearchResults.css";

class IBSearchResult extends Component {

  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(evt) {
    this.props.onClick(this.props.item, /*zoom to*/true);
    evt.preventDefault();
    return false;
  }

  render() {
    return (
      <li className="IBSearchResult">
        <a href="#" onClick={this.clickHandler}>
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.fullArtist}{this.props.item.classification &&
            <React.Fragment>
            {" · "}{this.props.item.classification}
            </React.Fragment>}
          </p>
        </a>
      </li>
    )
  }
}

class IBSearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="IBSearchResults">
        {this.props.data.map(item => (
          <IBSearchResult
            item={item}
            key={item.key}
            onClick={this.props.onSelect}
          />
        ))}
      </ul>
    );
  }
}

export default IBSearchResults;
