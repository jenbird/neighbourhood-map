import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SideBar from './SideBar'
import MapContainer from './MapContainer'


class App extends Component {

  state = {
      sushi: [
        {
        key:205,
        name:"Sushi Tetsu",
        address:"12 Jerusalem Passage, London, EC1V 4JP",
        location:{lat: 51.523232, lng: -0.103985}
      },
      {
        key:206,
        name:"Rock Star Sushi Bar",
        address:"Unit 5, Merton Abbey Mills, The Long Shop, London SW19 2RD",
        location:{lat: 51.413090, lng: -0.183197}
      },
      {
        key:207,
        name:"Zaibatsu",
        address:"96 Trafalgar Road, Greenwich, London SE10 9UW",
        location:{lat: 51.484000, lng: 0.001453}
      },
      {
        key:208,
        name:"Oka",
        address:"Kingly Street, First Floor of Kingly Court, London W1B 5PW",
        location:{lat: 51.512666, lng: -0.139002 }
      },
      {
        key:209,
        name:"Pop Art Sushi",
        address:"Unit 7 St George Wharf, 8 Wandsworth Road, London SW8 2JW",
        location:{lat: 51.485534, lng: -0.126373}
      },
      {
        key:210,
        name:"Ichi-Riki",
        address:"17 Strutton Ground, London SW1P 2HY",
        location:{lat: 51.497308, lng: -0.133714}
      },
      {
        key: 211,
        name: "Kulu Kulu Sushi",
        address:"76 Brewer Street, London W1F 9TU",
        location:{lat: 51.511007, lng: -0.136743}
      }
      ]
    }

/*
componentDidMount() {
    this.setState({sushi: []})
  }
  */

/*
createContact(contact) {
  ContactsAPI.create(contact).then(contact => {
    this.setState(state => ({
      contacts: state.contacts.concat([ contact ])
    }))
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

            />

          <MapContainer
            sushi={this.state.sushi}

            />

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
