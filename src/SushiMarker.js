/*global google*/
import React, { Component } from 'react';
import { Marker, InfoWindow } from "react-google-maps";
import SushiIcon from "./sushi.png";


class SushiMarker extends Component {

      state = {
        isOpen: false,
        animation: 0,
      }


    onToggleOpen = () => {
    if (this.state.isOpen) {
  		this.props.setSelected(false)
  		this.props.setSelectedMarker('')

  	} else if (!this.state.isOpen) {
  		this.props.setSelected(true)
      this.props.setSelectedMarker(this.props.key)
      //NEED ID???
  	}
    this.setState((prevState) =>
    ({ isOpen: !prevState.isOpen })
  )
  }


//    this.handleClick.bind(this, {key})


      render() {

        return (

            <Marker
            key={this.props.id}
            name={this.props.name}
            icon={SushiIcon}
            position={this.props.position}
            onClick={this.onToggleOpen}
            animation={(this.props.id === this.props.selectedMarker) ? this.props.animation : 0}
            >
            {this.state.isOpen &&
              <InfoWindow
                          key={this.props.id}
                          name={this.props.name}
                          position={this.props.position}
                          onClick={this.onToggleOpen}
                          onCloseClick={this.onToggleOpen}
                          options={{pixelOffset: new google.maps.Size(0, -10)}}
                        >
                        <span className="Info-window" tabIndex={0}>
                          <h4 className="Info-title">{this.props.name}</h4>
                          <p className="Info-content"></p>
                          <p>{this.props.position.address}</p>
                          <p>{this.props.position.city}</p>
                          <p>{this.props.position.postalCode}</p>
                        </span>
              </InfoWindow>
            }

            </Marker>
          )
        }
      }

  export default SushiMarker;