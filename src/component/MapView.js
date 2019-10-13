import React, { Component } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { API_KEY } from "../config/google.json";

import "./MapView.css";

class MapView extends Component {
  constructor(props) {
    super(props);

    this.onLoad = this.onLoad.bind(this);
    this.newBounds = this.newBounds.bind(this);
    this.newBoundsTimeout = this.newBoundsTimeout.bind(this);
  }

  onLoad(map) {
    this.$map = map;

    map.setZoom(14);
    /*global google*/
    map.setCenter(new google.maps.LatLng(47.65, -122.3));

    map.addListener("zoom_changed", this.newBoundsTimeout);
  }

  newBoundsTimeout() {
    if (this.newBoundsTimeoutId) {
      clearTimeout(this.newBoundsTimeoutId);
    }
    this.newBoundsTimeoutId = setTimeout(this.newBounds, 500);
  }

  newBounds() {
    const bounds = this.$map.getBounds();
    this.props.updateBounds(bounds);
    this.$map.panToBounds(bounds);
  }

  render() {
    return (
      <div className="MapView">
        <LoadScript id="script-loader" googleMapsApiKey={API_KEY}>
          <GoogleMap
            onLoad={this.onLoad}
            onDragEnd={this.newBounds}
            id="main-map"
            mapContainerStyle={{
              height: "100%",
              width: "100%"
            }}
          >
            {this.props.children}
          </GoogleMap>
        </LoadScript>
      </div>
    );
  }
}

export default MapView;
