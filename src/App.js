import React, { Component } from 'react';
import './App.css';
import SideBar from './SideBar'
import SushiMap from './SushiMap'
import escapeRegExp from 'escape-string-regexp'
import { slide as Menu } from 'react-burger-menu'


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
       //isOpen: false,
       filterResults: [],
       selectedMarker: '',
       isSelected: false,
       animation: 0,
       menuOpen: false,
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


setSelected(status) {
  this.setState({
    isSelected: status,
  })
}

//NEED TO SET TRUE???
setSelectedMarker(id) {
  this.setState({
    selectedMarker: id,
  })
}

//Used from https://github.com/negomi/react-burger-menu
showSidebar (event) {
    event.preventDefault();
  }

  handleStateChange (state) {
     this.setState({menuOpen: state.isOpen})
   }

   closeMenu () {
    this.setState({menuOpen: false})
  }

  render() {

    return (

      <div className="App flex-container">
        <header className="App-header">
          <h1 className="App-title">London's Best Sushi</h1>
          </header>


          <Menu
            width={ 225 }
            className={ "my-menu" }
            pageWrapId={ "page-wrap" }
            isOpen={ this.state.menuOpen }
            onStateChange={(state) => this.handleStateChange(state)}
            showSidebar={this.showSidebar}
            noOverlay
            right
            >
            <div className="Sidebar">
            <a onClick={ this.showSidebar }
                className="menu-item--small"
                tabIndex={0}
                href="">Sushi Restaurant List</a>
            </div>
              <SideBar
                sushi={this.state.sushi}
                onToggleOpen={this.onToggleOpen}
                updateFilterResults={this.updateFilterResults.bind(this)}
                filterResults={this.state.filterResults}
                setSelected={this.setSelected.bind(this)}
                setSelectedMarker={this.setSelectedMarker.bind(this)}
                selectedMarker={this.state.selectedMarker}
                />
          </Menu>

          <main id="page-wrap" >
            <div className="map-wrapper" style={{ height: `550px`, width: `100%` }} >
          <SushiMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBq_ZPuFQWvhI2VFA8pLw3coL_3PvpCDwU&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%`, width: `100%` }} />}
            containerElement={
              <div id="map"
                role="application"
                aria-label="Sushi restaurants markers on map"
                style={{ width: `100%`, marginLeft: `30px`, marginRight: `225px` }}
                />}
            mapElement={<div style={{ height: `100%`, width: `100%` }} />}
            sushi={this.state.sushi}
            onToggleOpen={this.onToggleOpen}
            updateFilterResults={this.updateFilterResults.bind(this)}
            filterResults={this.state.filterResults}
            setSelected={this.setSelected.bind(this)}
            setSelectedMarker={this.setSelectedMarker.bind(this)}
            selectedMarker={this.state.selectedMarker}
            />
            </div>
          </main>
        <footer id="footer">
          <div>Data from <a href="https://cloud.google.com/maps-platform/">Google Maps</a> and <a href="https://developer.foursquare.com/"> Foursquare</a> APIs.</div>
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Sushi">Sushi</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div>
        <div><a href="/"><strong>London's Best Sushi</strong></a> Built by <a href="https://www.linkedin.com/in/jennifersmithuk" >Jennifer Smith</a> as part of the Google Udacity Scholarship 2018</div>
        </footer>
      </div>
    );
  }
}

export default App;
