import React, { Component } from "react";
import "./App.css";

import data from "./data/data";

import MapView from "./component/MapView";
import InfoBox from "./component/InfoBox";
import MarkerSource from "./component/MarkerSource";

class App extends Component {
  constructor(props) {
    super(props);

    this.activateSearch = this.activateSearch.bind(this);
    this.setSearch = this.setSearch.bind(this);
    this.commitSearch = this.commitSearch.bind(this);
    this.deactivateSearch = this.deactivateSearch.bind(this);
    this.closeDetail = this.closeDetail.bind(this);
    this.selectPoint = this.selectPoint.bind(this);

    this.state = {
      selectedPoint: -1,
      points: [],
      infoBoxData: [],
      infoBoxSearch: "",
      infoBoxSearchActive: false,
      infoBoxDetailVisible: false,
      filter() {
        return true;
      }
    };

    this.getPoints();
  }

  activateSearch() {
    this.setState({
      infoBoxSearchActive: true
    });
  }

  setSearch(search) {
    this.setState({
      infoBoxSearch: search
    });
  }

  commitSearch(search) {
    let ls = search.toLowerCase();
    this.closeDetail();
    this.setState({
      infoBoxSearchActive: true,
      infoBoxSearch: search,
      points: this.rawData.filter(
        data => ~data.searchKey.indexOf(search.toLowerCase())
      )
    });

    // perform search!
  }

  deactivateSearch() {
    this.setState({
      infoBoxSearchActive: false,
      infoBoxSearch: "",
      points: this.rawData,
    });
  }

  closeDetail() {
    this.setState({
      selectedPoint: -1,
      infoBoxDetailVisible: false
    });
  }

  selectPoint(data) {
    let matchingPoints = this.state.points.filter(point => {
      return (
        point.latitude === data.latitude && point.longitude === data.longitude
      );
    });

    this.setState({
      selectedPoint: data.key,
      infoBoxData: matchingPoints,
      infoBoxDetailVisible: true
    });
  }

  async getPoints() {
    const points = await data;
    this.rawData = points;
    this.setState({ points });
  }

  render() {
    return (
      <div className="App">
        <MapView>
          <MarkerSource
            selectedPoint={this.state.selectedPoint}
            data={this.state.points}
            onSelect={this.selectPoint}
          />
        </MapView>
        <InfoBox
          search={this.state.infoBoxSearch}
          setSearch={this.setSearch}
          searchActive={this.state.infoBoxSearchActive}
          detailVisible={this.state.infoBoxDetailVisible}
          selectedData={this.state.infoBoxData}
          activateSearch={this.activateSearch}
          deactivateSearch={this.deactivateSearch}
          commitSearch={this.commitSearch}
          closeDetail={this.closeDetail}
          onSelect={this.selectPoint}
          points={this.state.points}
        />
      </div>
    );
  }
}

export default App;
