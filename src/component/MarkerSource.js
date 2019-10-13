import React, { Component } from "react";
import { Marker } from "@react-google-maps/api";

class MarkerSource extends Component {
  constructor(props) {
    super(props);

    this.makeMarker = this.makeMarker.bind(this);

    this.seenPositions = new Set();
  }

  makeMarker(data) {
    if (!data.geolocation) return null;

    // don't show multiple pins for one location
    const locKey = data.latitude + data.longitude;
    if (this.seenPositions.has(locKey)) return null;
    this.seenPositions.add(locKey);

    return (
      <Marker
        position={{
          lat: data.geolocation.latitude,
          lng: data.geolocation.longitude
        }}
        options={{
          /* global google */
          label: data.key === this.props.selectedPoint ? "⭐️" : null
        }}
        key={data.key}
        onClick={() => this.props.onSelect(data)}
      />
    );
  }

  render() {
    let data;
    this.seenPositions.clear();
    if (this.props.filter) {
      data = this.props.data.filter(this.props.filter);
    } else {
      data = this.props.data;
    }

    return data.map(this.makeMarker);
  }
}

export default MarkerSource;
