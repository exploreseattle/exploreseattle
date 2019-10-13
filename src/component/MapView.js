import React, { Component } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { API_KEY } from "../config/google.json";

import "./MapView.css";

class MapView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="MapView">
        <LoadScript id="script-loader" googleMapsApiKey={API_KEY}>
          <GoogleMap
            onLoad={map => {
              this.$map = map;
              console.log(map)
            }}
            id="main-map"
            mapContainerStyle={{
              height: "100%",
              width: "100%"
            }}
            zoom={15}
            center={{
              lat: 47.653797,
              lng: -122.307265
            }}
          >
            <Marker
              onLoad={marker => {
                console.log("marker: ", marker);
              }}
              position={{
                lat: 47.655501,
                lng: -122.305102
              }}
              onClick={function() {
                alert("You clicked!");
              }}
            />
          </GoogleMap>
        </LoadScript>
      </div>
    );
  }
}

export default MapView;
