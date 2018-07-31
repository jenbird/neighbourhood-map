//import React, { Component } from 'react';
import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import SushiMarker from "./SushiMarker";





  const SushiMap = withScriptjs(withGoogleMap((props) => {


  const markers = props.sushi.map( sushi =>
      <SushiMarker
        key={sushi.key}
        name={sushi.name}
        address={sushi.address}
        location={sushi.location}
      />
      );



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
