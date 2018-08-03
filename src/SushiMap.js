/*global google*/
import React, { Component } from 'react';
//import React from "react";
import { compose, withProps, withHandlers, withStateHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import SushiIcon from "./sushi.png";

/* Solution for multiple InfoWindows opening using React-google-maps:
https://github.com/tomchentw/react-google-maps/issues/753 &
https://stackoverflow.com/questions/44248405/react-google-maps-redux-infowindow-on-marker-click*/


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
  }),
  showInfo: ({ showInfo,isOpen }) => (a) => ({
    isOpen: !isOpen,
    showInfoIndex: a
})
}),
  withScriptjs,
  withGoogleMap
)((props) =>

    <GoogleMap
      defaultZoom={12.5}
      defaultCenter={ { lat: 51.5073509, lng: -0.1277583 } }

      >

        {props.sushi.map((sushi, index) => (

          <Marker
            key={index}
            name={sushi.name}
            address={sushi.address}
            icon={SushiIcon}
            position={sushi.location}
            onClick={()=>{ props.showInfo(index)} }
            visible={props.sushi.visible}

          >

          {(props.isOpen && props.showInfoIndex === index ) &&
            <InfoWindow
                        key={sushi.id}
                        name={sushi.name}
                        city={sushi.location}
                        onClick={props.onToggleOpen}
                        onCloseClick={props.onToggleOpen}
                        options={{pixelOffset: new google.maps.Size(0, -10)}}
                        position={sushi.location}
                      >

                      <span className="Info-window">
                        <h4 className="Info-title">{sushi.name}</h4>
                        <p className="Info-content"></p>
                        <p>{sushi.location.address}</p>
                        <p>{sushi.location.city}</p>
                        <p>{sushi.location.postalCode}</p>
</span>



            </InfoWindow>
          }

          </Marker>
        ))}

    </GoogleMap>
  );

  class Map extends React.PureComponent {

    constructor(props) {
       super(props);

    this.state = {
        //isMarkerShown: false,
        markers: [],
        isOpen: false,

      }
    }

/*
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

*/

/*
    animateMarker = (markers) => {
            markers.setAnimation(google.maps.Animation.DROP);
            }
*/



  render() {
    return (
      <SushiMap
        sushi={this.state.sushi}
        markers={this.state.markers}
        isMarkerShown={this.state.isMarkerShown}
        isOpen={this.state.isOpen}
        showInfo={this.state.showInfo}
      />
    )
  }
}

export default SushiMap;
