import React, { Component } from 'react';
import './App.css';
import SideBar from './SideBar'
import SushiMap from './SushiMap'
import escapeRegExp from 'escape-string-regexp'


// https://www.npmjs.com/package/react-foursquare
var foursquare = require('react-foursquare')({
  clientID: 'YFQIXTPIIUHAOVQ4C1DOQTKKLANG1QIUUIO140SIZLKV3DDA',
  clientSecret: 'QVTNCBNNTUZMSAMT515A0CIBMRIEVPPEYR3YUJMNG2FG3124'
});

var params = {
  ll: '51.5073509,-0.1277583',
  query: 'sushi'
};


class App extends Component {

  constructor(props) {
     super(props);

     this.state = {
       sushi: [],
       //TODO If want to fetch and add more venue sushiDetails
       //e.g. price, rating
       //sushiDetails: [],
       isOpen: false,
       filterResults: [],
       setSelectedMarker: '',
       isSelected: false,
       animation: 0,
         }
     };

/*Fetches data on sushi venues and populates both sushi and filterResults array
so all names and markers shown on initial load*/
      componentDidMount() {
        foursquare.venues.getVenues(params)
          .then(res=> {
            this.setState({
              sushi: res.response.venues,
              filterResults: res.response.venues
            });
            console.log("got venues!")
          })
          .catch(error => {
            console.log("error!");
          })

//TODO: Add UI for user if content does not load
      }


//When query starts, filter results
updateFilterResults(query) {
    const match = new RegExp(escapeRegExp(query), 'i')
    this.setState({
      filterResults: this.state.sushi.filter((sushi) => match.test(sushi.name))
    })
  }

/*
setSelected(status) {
  this.setState({
    isSelected: status,
  })
}

setSelectedMarker(id) {
  this.setState({
    selectedMarker: id,
  })
}
*/


  render() {


    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">London's Best Sushi</h1>
          </header>
          <main className="flex-container">

          <SideBar
            sushi={this.state.sushi}

            showInfo={this.showInfo}
            onToggleOpen={this.onToggleOpen}
            updateFilterResults={this.updateFilterResults.bind(this)}
            filterResults={this.state.filterResults}
            setSelected={this.setSelected}
            selectedMarker={this.state.selectedMarker}
            setSelectedMarker={this.setSelectedMarker}
            />
          <div id="map" role="application" aria-label="Sushi restaurants markers on map">
          <SushiMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBq_ZPuFQWvhI2VFA8pLw3coL_3PvpCDwU&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div id="map" role="application" aria-label="Sushi restaurants markers on map" style={{ height: `600px`, width: `800px` }} />}
            mapElement={<div style={{ height: `100%`, width: `100%` }} />}
            sushi={this.state.sushi}
            onToggleOpen={this.onToggleOpen}
            showInfo={this.showInfo}
            updateFilterResults={this.updateFilterResults.bind(this)}
            filterResults={this.state.filterResults}
            setSelected={this.setSelected}
            selectedMarker={this.state.selectedMarker}
            />
        </div>
          </main>
        <footer id="footer">
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Sushi">Sushi</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div>
        <div><a href="/"><strong>London's Best Sushi</strong></a> Built by Jennifer Smith as part of the Google Udacity Scholarship 2018</div>
        </footer>
      </div>
    );
  }
}

export default App;
