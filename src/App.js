import React, { Component } from 'react';
import './App.css';
import SideBar from './SideBar'
//import MapContainer from './MapContainer'
import SushiMap from './SushiMap'


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
       sushiDetails: [],
       infoWindow: '',

           isMarkerShown: false,
           //marker: [],
           isOpen: false
         }
     };


      componentDidMount() {
        foursquare.venues.getVenues(params)
          .then(res=> {
            this.setState({ sushi: res.response.venues });
            console.log("got venues!")
          })
          .catch(error => {
            console.log("error!");
          })


      }

      openWindow = () => {
        this.setState({ infoWindow: this.state.sushi.id });
        console.log("infoWindow");
      }

      closeWindow = () => {
      this.setState({ infoWindow: '' });
      console.log("infoWindow closed");
      }


      handleToggleOpen = () => {
          this.setState({
            isOpen: true
          })
        }

      handleToggleClose = () => {
          this.setState({
            isOpen: false
          })
        }


  render() {

    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">London's Best Sushi</h1>
          </header>
          <main className="flex-container">

          <SideBar
            sushi={this.state.sushi}
            openWindow={this.openWindow}
            closeWindow={this.closeWindow}
            />
          <div id="map" role="application" aria-label="Sushi restaurants markers on map">
          <SushiMap
            sushi={this.state.sushi}
            openWindow={this.openWindow}
            closeWindow={this.closeWindow}
            handleToggleOpen={this.state.isOpen}
            handleToggleClose={this.state.isOpen}
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
