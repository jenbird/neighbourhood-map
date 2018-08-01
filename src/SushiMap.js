//import React, { Component } from 'react';
import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import SushiMarker from "./SushiMarker";


/*
onLoaded... (SushiMap, map, markers) => {
        // Set Marker animation
        markers.setAnimation(SushiMap.Animation.BOUNCE) }
        */



  const SushiMap = withScriptjs(withGoogleMap((props) => {

  const markers = props.sushi.map( sushi  =>
      <SushiMarker
        key={sushi.id}
        name={sushi.name}
        address={sushi.address}
        location={sushi.location}
      />
      );
/*
    animateMarker = (markers) => {
            markers.setAnimation(google.maps.Animation.DROP);
            }
*/
  return (

    <GoogleMap
      defaultZoom={12}
      defaultCenter={ { lat: 51.5073509, lng: -0.1277583 } }
    >
    {markers}

    </GoogleMap>


  )

}))


export default SushiMap;
