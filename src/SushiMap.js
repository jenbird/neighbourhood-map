import React, { Component } from 'react';
//import React from "react";
import { compose, withProps, withHandlers, withStateHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import SushiIcon from "./sushi.png";


            /*
                animateMarker = (markers) => {
                        markers.setAnimation(google.maps.Animation.DROP);
                        }
            */


const SushiMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBq_ZPuFQWvhI2VFA8pLw3coL_3PvpCDwU&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div id="map" role="application" aria-label="Sushi restaurants markers on map" style={{ height: `600px`, width: `800px` }} />,
    mapElement: <div style={{ height: `100%`, width: `100%` }} />,
  }),
  withStateHandlers(() => ({
    isOpen: false,
 }), {
   onToggleOpen: ({ isOpen }) => () => ({
     isOpen: !isOpen,
   })
 }),

  withScriptjs,
  withGoogleMap
)((props) =>

    <GoogleMap
      defaultZoom={12}
      defaultCenter={ { lat: 51.5073509, lng: -0.1277583 } }
      >

        {props.sushi.map(sushi => (

          <Marker
            key={sushi.id}
            name={sushi.name}
            address={sushi.address}
            icon={SushiIcon}
            position={sushi.location}
            visible={sushi.visible}
            onClick={props.onMarkerClick}
          >

          {props.isOpen &&
            <InfoWindow
                        key={props.sushi.id}
                        onCloseClick={props.onToggleOpen}
                        onKeyPress={props.onToggleOpen}
                      >
                        <div className="Info-window">
                          <h4 className="Info-title">{props.sushi.name}</h4>
                          <p>
                            {props.sushi.formattedAddress}



                          </p>
                        </div>
            </InfoWindow>
          }

          </Marker>
        ))}

    </GoogleMap>
  );

  class Map extends Component {

    state = {

        isMarkerShown: false,
        markers: []

}

componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <SushiMap
        markers={this.state.markers}
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

export default SushiMap;
