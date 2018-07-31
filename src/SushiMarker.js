import React, { Component } from 'react';
import { Marker } from "react-google-maps";
import SushiIcon from "./sushi.png";

//Method used on https://medium.com/@morgannegagne/google-maps-with-react-951c12b723ad

//animation: google.maps.Animation.DROP

class SushiMarker extends Component {

  render(){

    return(

        <Marker
        position={this.props.sushi}
        icon={SushiIcon}
        >
        </Marker>
    );
  }
}


export default SushiMarker;
