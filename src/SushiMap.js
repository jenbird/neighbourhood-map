//import React, { Component } from 'react';
import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import SushiMarker from "./SushiMarker";

const google = window.google

/*
onLoaded: (SushiMap, map, markers) => {
        // Set Marker animation
        markers.setAnimation(SushiMap.Animation.BOUNCE) }
        */

//animation={google.maps.Animation.DROP}



  const SushiMap = withScriptjs(withGoogleMap((props) => {


  const markers = props.sushi.map( sushi  =>
      <SushiMarker
        key={sushi.key}
        name={sushi.name}
        address={sushi.address}
        location={sushi.location}
        onGoogleApiLoaded={(SushiMap, markers) => {
                // Set Marker animation
                markers.setAnimation(google.maps.Animation.DROP) }}
      />
      );



  return (

    <GoogleMap
      defaultZoom={11}
      defaultCenter={ { lat: 51.5073509, lng: -0.1277583 } }
    >
    {markers}\

    </GoogleMap>

  )

}))


export default SushiMap;
