import React, { Component } from 'react';
import './App.css';
import SideBar from './SideBar'
import SushiMap from './SushiMap'
import escapeRegExp from 'escape-string-regexp'
import { slide as Menu } from 'react-burger-menu'
import ErrorBoundaryComponent from './ErrorBoundaryComponent'


//https://www.npmjs.com/package/react-foursquare
var foursquare = require('react-foursquare')({
  clientID: '',
  clientSecret: ''
});

var params = {
  ll: '51.5073509,-0.1277583',
  query: 'sushi'
};

//Alert if Google Maps doesn't load
window.gm_authFailure = function() {
    alert("Google Maps did not load correctly, please try again.")
}


class App extends Component {

  constructor(props) {
     super(props);

     this.state = {
       sushi: [],
       //TODO To fetch and add more venue sushiDetails
       //e.g. price, rating, photo
       //sushiDetails: [],
       isOpen: false,
       filterResults: [],
       selectedMarker: '',
       isSelected: false,
       animation: 0,
       menuOpen: true,
       errorFound: false,
       filterQuery: '',
       windowOpen: false,
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
          .catch((error, info) => {
            this.setState({
              errorFound: true,
              });
            console.log('error: ', error);
            console.log('info: ', info);
            //alert("Could not load restaurants!");
          })
      }

      componentDidCatch(error, info) {
        this.setState({ errorFound: true });
        window.alert("Oops, something went wrong. Please refresh the page.")
        console.log('error: ', error);
        console.log('info: ', info);
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

//Works for Sidebar clicks, open windows can be closed with onToggleOpen function onCloseClick
setSelectedMarker(e, position) {
  this.setState({
    selectedMarker: position,
    windowOpen: true,
  })
}

//Works for onCloseClick within InfoWindows
onToggleOpen = (e) => {
    this.setState((prevState) =>
    ({
     windowOpen: !prevState.windowOpen
   })
  )
  }

//Sets the animation for list item clicks
setAnimation(animation) {
  this.setState({
      animation: animation,
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

      <ErrorBoundaryComponent>

      <div className="App flex-container">
        <header className="App-header">
          <h1 className="App-title">London's Best Sushi</h1>
          </header>

          <Menu
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
                updateFilterResults={this.updateFilterResults.bind(this)}
                filterResults={this.state.filterResults}
                setSelected={this.setSelected.bind(this)}
                setSelectedMarker={this.setSelectedMarker.bind(this)}
                selectedMarker={this.state.selectedMarker}
                onToggleOpen={this.onToggleOpen.bind(this)}
                errorFound={this.state.errorFound}
                setAnimation={this.setAnimation.bind(this)}
                windowOpen={this.state.windowOpen}
                />
          </Menu>

          <main id="page-wrap" >
            <div className="map-wrapper" style={{ height: `550px`, width: `100%` }} >

              {navigator.onLine &&
                  !this.state.errorFound && this.state.filterResults && (
          <SushiMap
            googleMapURL=""
            loadingElement={<div style={{ height: `100%`, width: `100%` }} />}
            containerElement={
              <div id="map"
                role="application"
                aria-label="Sushi restaurants markers on map"
                style={{ width: `100%` }}
                />}
            mapElement={<div style={{ height: `100%`, width: `100%` }} />}
            sushi={this.state.sushi}
            onToggleOpen={this.onToggleOpen.bind(this)}
            updateFilterResults={this.updateFilterResults.bind(this)}
            filterResults={this.state.filterResults}
            setSelected={this.setSelected.bind(this)}
            setSelectedMarker={this.setSelectedMarker.bind(this)}
            selectedMarker={this.state.selectedMarker}
            animation={this.state.animation}
            windowOpen={this.state.windowOpen}
            />
        )}

        {!navigator.onLine &&
          <h4 className="Error-alert">Oops, maps did not load. Check connection.</h4>}


       {navigator.onLine && this.state.errorFound && (
         <h4 className="Error-alert">Oops, Maps went wrong!</h4>
       )}

            </div>
          </main>
        <footer id="footer">
          <div>Data from <a href="https://cloud.google.com/maps-platform/">Google Maps</a> and <a href="https://developer.foursquare.com/"> Foursquare</a> APIs.</div>
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Sushi">Sushi</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div>
        <div><a href="/"><strong>London's Best Sushi</strong></a> Built by <a href="https://www.linkedin.com/in/jennifersmithuk" >Jennifer Smith</a> as part of the Google Udacity Scholarship 2018</div>
        </footer>
      </div>

    </ErrorBoundaryComponent>
    );
  }
}

export default App;
