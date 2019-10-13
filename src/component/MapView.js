import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { API_KEY } from "../config/google.json";

import "./MapView.css";

class MapView extends Component {
  constructor(props) {
    super(props);

    this.onLoad = this.onLoad.bind(this);
  }

  onLoad(map) {
    this.$map = map;

    map.setZoom(14);
    /* global google */
    map.setCenter(new google.maps.LatLng(47.65, -122.3));
  }

  render() {
    return (
      <div className="MapView">
        <LoadScript id="script-loader" googleMapsApiKey={API_KEY}>
          <GoogleMap
            onLoad={this.onLoad}
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
