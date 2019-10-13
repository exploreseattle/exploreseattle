import React, { Component } from "react";
import { Marker } from "@react-google-maps/api";

class MarkerSource extends Component {
  constructor(props) {
    super(props);

    this.makeMarker = this.makeMarker.bind(this);
  }

  makeMarker(data) {
    if (!data.geolocation) return null;
    return (
      <Marker
        position={{
          lat: data.geolocation.latitude,
          lng: data.geolocation.longitude
        }}
        key={data.key}
        onClick={() => this.props.onSelect(data)}
      />
    );
  }

  render() {
    let data;
    if (this.props.filter) {
      data = this.props.data.filter(this.props.filter);
    } else {
      data = this.props.data;
    }

    return data.map(this.makeMarker);
  }
}

export default MarkerSource;
