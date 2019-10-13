import React, { Component } from 'react';
import './App.css';

import MapView from './component/MapView'
import InfoBox from './component/InfoBox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapView/>
        <InfoBox/>
      </div>
    )
  }
}

export default App;
