//import React, { Component } from 'react';
import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import SushiIcon from "./sushi.png";



/*
onLoaded... (SushiMap, map, markers) => {
        // Set Marker animation
        markers.setAnimation(SushiMap.Animation.BOUNCE) }
        */


  const SushiMap = withScriptjs(withGoogleMap((props) => {

  const markers = props.sushi.map( sushi  =>

      <Marker
        key={sushi.id}
        name={sushi.name}
        address={sushi.address}
        icon={SushiIcon}
        position={sushi.location}
        onClick={props.onToggleOpen}
        closeWindow={props.closeInfo}
        infoWindow={props.infoWindow}

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
