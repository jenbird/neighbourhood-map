/*global google*/
import React, { Component } from 'react';
import { Marker, InfoWindow } from "react-google-maps";
import SushiIcon from "./sushi.png";


class SushiMarker extends Component {

      state = {
        isOpen: false,
        animation: 0,
        //windowOpen: true,
        //activeMarker: {},
      }


    onToggleOpen = (e) => {
    if (this.state.isOpen && (this.props.position === this.props.selectedMarker)) {
  		this.props.setSelected(false)
  		this.props.setSelectedMarker('')


  	} else if (!this.state.isOpen ) {
  		this.props.setSelected(true)
      this.props.setSelectedMarker(e, this.props.position)
//labeledLatLngs
  	}
    this.setState((prevState) =>
    ({ isOpen: !prevState.isOpen })
    //({ windowOpen: !prevState.windowOpen})
  )
  }

//    this.handleClick.bind(this, {key})


      render() {

        //let { id } = this.props;
        //let { marker } = this.state.activeMarker;
        let selectedMarker;
        console.log(selectedMarker);

        return (

            <Marker
            key={this.props.id}
            name={this.props.name}
            icon={SushiIcon}
            position={this.props.position}
            onClick={(e) => {
              this.onToggleOpen(e)
            }}

            animation={(this.props.position === this.props.selectedMarker) ? this.props.animation : 0}
            >

            {this.state.isOpen && this.props.position === this.props.selectedMarker &&

              <InfoWindow
                          key={this.props.id}
                          name={this.props.name}
                          position={this.props.location}
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
