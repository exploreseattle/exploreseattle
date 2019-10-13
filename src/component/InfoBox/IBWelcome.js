import React, { Component } from "react";
import IBSearchResults from "./IBSearchResults";
import "./IBWelcome.css";

class IBWelcome extends Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.handleKey = this.handleKey.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleInput(evt) {
    this.props.setSearch(evt.target.value);
  }

  handleKey(evt) {
    if (evt.key === "Enter") {
      if (evt.target.value) {
        this.props.commitSearch(evt.target.value);
      } else {
        this.props.deactivateSearch();
      }
    }
  }

  handleBlur(evt) {
    if (evt.target.value === "") {
      this.props.deactivateSearch();
    }
  }

  render() {
    return (
      <div className="IBWelcome">
        <div className="IBWelcome-hero">
          <div className="IBWelcome-header">
            <h1>Seattle Public Art Walk</h1>

            <div className="IBWelcome-blurb">
              Click around to learn more about Seattle’s public art! Or, if
              you’re looking for something more specific, search by artist,
              title, location, medium, etc.
            </div>
          </div>

          <div className="IBWelcome-search">
            {this.props.searchActive && (
              <button onClick={this.props.deactivateSearch}>
                <i className="material-icons" aria-label="close search">
                  close
                </i>
              </button>
            )}
            <input
              type="search"
              id="site-search"
              value={this.props.search}
              onChange={this.handleInput}
              onBlur={this.handleBlur}
              onKeyUp={this.handleKey}
            />
          </div>

          <div className="IBWelcome-hint">
            <div>Try searching:</div>
            <button onClick={() => this.props.commitSearch("Mural")}>
              Mural
            </button>
            <button onClick={() => this.props.commitSearch("Park")}>
              Park
            </button>
            <button onClick={() => this.props.commitSearch("Mosaic")}>
              Mosaic
            </button>
            <button onClick={() => this.props.commitSearch("Steel")}>
              Steel
            </button>
            <button onClick={() => this.props.commitSearch("Environments")}>
              Environments
            </button>
            <button onClick={() => this.props.commitSearch("Glass")}>
              Glass
            </button>
            <button onClick={() => this.props.commitSearch("Library")}>
              Library
            </button>
          </div>
        </div>

        {this.props.searchActive && (
          <IBSearchResults
            data={this.props.data}
            onSelect={this.props.onSelect}
          />
        )}
      </div>
    );
  }
}

export default IBWelcome;
