import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { API_KEY } from "../config/google.json";

import "./MapView.css";

class MapView extends Component {
  constructor(props) {
    super(props);

    this.onLoad = this.onLoad.bind(this);
    this.zoomTo = this.zoomTo.bind(this);
  }

  onLoad(map) {
    this.$map = map;

    map.setZoom(13);
    /* global google */
    map.setCenter(new google.maps.LatLng(47.621875, -122.326245));
    map.setOptions({
      disableDefaultUI: false,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_BOTTOM
      },
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
      },
      scaleControl: false,
      streetViewControl: true,
      streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_BOTTOM
      },
      rotateControl: false,
      fullscreenControl: false
    });

    this.props.registerZoomHandler(this.zoomTo)
  }

  zoomTo(data) {
    if (this.$map.getZoom() < 10) {
      this.$map.setZoom(12)
    }
    this.$map.panTo(new google.maps.LatLng(data.geolocation.latitude, data.geolocation.longitude))
  }

  render() {
    return (
      <div className="MapView">
        <LoadScript id="script-loader" googleMapsApiKey={API_KEY}>
          <GoogleMap
            onLoad={this.onLoad}
            id="main-map"
            clickableIcons={false}
            options={{
              disableDefaultUI: true
            }}
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
