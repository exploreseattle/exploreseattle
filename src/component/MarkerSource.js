import React, { Component, Fragment } from "react";
import { Marker } from "@react-google-maps/api";

class MarkerSource extends Component {
  render() {
    return (
      <Fragment>
        {this.props.data.map(function(dat, n) {
          if (dat.geolocation) {
            return (
              <Marker
                position={{
                  lat: parseFloat(dat.geolocation.latitude),
                  lng: parseFloat(dat.geolocation.longitude)
                }}
                key={n}
                onClick={() => {
                  console.log(dat);
                }}
              />
            );
          }
          return null;
        })}
      </Fragment>
    );
  }
}

export default MarkerSource;
