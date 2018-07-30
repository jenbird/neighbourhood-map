import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SideBar from './SideBar'
import MapContainer from './MapContainer'


class App extends Component {

  state = {
      locations: []
    }



  render() {

    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">London's Best Sushi</h1>
          </header>
          <main className="flex-container">

          <SideBar

            />

          <MapContainer
        
            />
          </main>
        <footer id="footer">
  <a href="/"><strong>London's Best Sushi</strong></a> Built by Jennifer Smith as part of the Google Udacity Scholarship 2018
        </footer>
      </div>
    );
  }
}

export default App;
