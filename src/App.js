import React, { Component } from "react";
import "./App.css";

import data from "./data/data";

import MapView from "./component/MapView";
import InfoBox from "./component/InfoBox";
import MarkerSource from "./component/MarkerSource";

class App extends Component {
  constructor(props) {
    super(props);

    this.getPoints = this.getPoints.bind(this);
    this.state = {
      points: [],
      filter() {
        return true;
      }
    };

    this.getPoints();
  }

  async getPoints() {
    const points = await data;
    this.setState({ points });
  }

  render() {
    return (
      <div className="App">
        <MapView>
          <MarkerSource data={this.state.points} filter={this.state.filter} />
        </MapView>
        <InfoBox />
      </div>
    );
  }
}

export default App;
