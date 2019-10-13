import React, { Component } from "react";
import "./App.css";

import { run, query } from "./data/data";

import MapView from "./component/MapView";
import InfoBox from "./component/InfoBox";
import MarkerSource from "./component/MarkerSource";

class App extends Component {
  constructor(props) {
    super(props);

    this.updateBounds = this.updateBounds.bind(this);
    this.getPoints = this.getPoints.bind(this);
    this.state = {
      points: []
    };
  }

  async getPoints() {
    if (this.state.bounds === undefined) return;
    const ne = this.state.bounds.getNorthEast();
    const sw = this.state.bounds.getSouthWest();
    const points = await run(
      query().where(
        `within_box(geolocation, ${ne.lat()}, ${sw.lng()}, ${sw.lat()}, ${ne.lng()})`
      )
    );
    this.setState({ points });
  }

  updateBounds(bounds) {
    this.setState({
      bounds: bounds
    });
    // setTimeout(
    this.getPoints()//)
  }

  render() {
    return (
      <div className="App">
        <MapView updateBounds={this.updateBounds}>
          <MarkerSource data={this.state.points} />
        </MapView>
        <InfoBox />
      </div>
    );
  }
}

export default App;
