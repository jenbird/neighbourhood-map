import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import SushiMarker from "./SushiMarker";



  const SushiMap = withScriptjs(withGoogleMap((props) => {

  /*const markers = props.sushi.map( sushi => <SushiMarker
                    key={sushi.uid}
                    sushi={sushi}
                    location={{lat: 51.5073509, lng: -0.1277583}}
/>);
*/

  return (

    <GoogleMap
      defaultZoom={14}
      defaultCenter={ { lat: 51.5073509, lng: -0.1277583 } }
    />

  )

}))


export default SushiMap;
