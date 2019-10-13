import React, { Component } from 'react';
import './App.css';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import { API_KEY } from './config/google.json';

class App extends Component {
  render() {
    return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey={API_KEY}
      >
        <GoogleMap
          id="main-map"
          mapContainerStyle={{
            height: "100vh",
            width: "100vw"
          }}
          zoom={15}
          center={{
            lat: 47.653797,
            lng: -122.307265
          }}
        >
          <Marker
            onLoad={marker => {
              console.log('marker: ', marker)
            }}
            position={{
              lat: 47.655501,
              lng: -122.305102
            }}
            onClick={function() {
              alert("You clicked!")
            }}
          />
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default App;
