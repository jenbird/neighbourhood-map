import React, { Component } from 'react';
import { Marker } from "react-google-maps";
//import StethoscopeIcon from "../stethoscopeIcon.png";

//Method used on https://medium.com/@morgannegagne/google-maps-with-react-951c12b723ad

class SushiMarker extends Component {

  render(){

    return(

        <Marker
          position={this.props.location}
        >
        </Marker>
    );
  }
}


export default SushiMarker;
