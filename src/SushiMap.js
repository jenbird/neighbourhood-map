import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import SushiMarker from "./SushiMarker";

/*
Used React-google-maps:
https://tomchentw.github.io/react-google-maps/#infowindow
*/


const SushiMap = withScriptjs(withGoogleMap((props) =>

  <GoogleMap
    defaultZoom={12}
    defaultCenter={ { lat: 51.5073509, lng: -0.1277583 } }
    >
      {props.filterResults.map((sushi) => {

        return (

          <SushiMarker
            key={sushi.id}
            name={sushi.name}
            address={sushi.address}
            position={sushi.location}
            setAnimation={props.setAnimation}
            onToggleOpen={this.onToggleOpen}
            setSelected={props.setSelected}
            setSelectedMarker={props.setSelectedMarker}
            selectedMarker={props.selectedMarker}
            />
        )
      })}
    </GoogleMap>
  ))

export default SushiMap;
