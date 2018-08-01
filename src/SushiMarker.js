import React, { Component } from 'react';
import { Marker, InfoWindow } from "react-google-maps";
import SushiIcon from "./sushi.png";

//Method used on https://medium.com/@morgannegagne/google-maps-with-react-951c12b723ad

//delayedShowMarker from https://tomchentw.github.io/react-google-maps/#introduction

//animation: google.maps.Animation.DROP


class SushiMarker extends Component {

state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }


  render(){

    return(

        <Marker
        position={this.props.location}
        icon={SushiIcon}
        isMarkerShown={this.state.isMarkerShown}
        onClick={this.props.onToggleOpen}
        closeWindow={this.props.closeInfo}
        infoWindow={this.props.infoWindow}
        >
        </Marker>


    );
  }
}


export default SushiMarker;
