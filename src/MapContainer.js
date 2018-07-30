import React, { Component } from 'react';
import SushiMap from './SushiMap'


class MapContainer extends Component {

  state = {
      locations: []
    }


    render() {

      return (

        <div id="map" role="application" aria-label="Sushi restaurants markers on map">

        <SushiMap
  				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBq_ZPuFQWvhI2VFA8pLw3coL_3PvpCDwU&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
  				containerElement={<div id="map" role="application" aria-label="Sushi restaurants markers on map" style={{ height: `600px`, width: `800px` }} />}
  				mapElement={<div style={{ height: `100%` }} />}
          />

          </div>

      )
    }

  }

export default MapContainer;
