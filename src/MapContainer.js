
import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import { compose, withProps, withHandlers, withStateHandlers } from "recompose";
import SushiMap from './SushiMap'
import SushiIcon from "./sushi.png";




class MapContainer extends Component {


//  state = {
  //    sushi: []
    //}

    render() {

      return (

        <div id="map" role="application" aria-label="Sushi restaurants markers on map">

        <SushiMap
          sushi={this.props.sushi}
  				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBq_ZPuFQWvhI2VFA8pLw3coL_3PvpCDwU&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
  				containerElement={<div id="map" role="application" aria-label="Sushi restaurants markers on map" style={{ height: `600px`, width: `800px` }} />}
  				mapElement={<div style={{ height: `100%` }} />}
          defaultZoom={12}
          defaultCenter={ { lat: 51.5073509, lng: -0.1277583 } }
          />
          </div>

      )
    }

  }

export default MapContainer;
