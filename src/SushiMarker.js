/*global google*/
import React, { Component } from 'react';
import { Marker, InfoWindow } from "react-google-maps";
import SushiIcon from "./sushi.png";


//From https://davidwalsh.name/nodelist-array
//var markers = [].slice.call(document.querySelectorAll("Markers"));
//console.log(markers);


class SushiMarker extends Component {

      state = {
          
      }


    onToggleOpen = (e) => {
    if (this.state.windowOpen && (this.props.position === this.props.selectedMarker)) {
  		this.props.setSelected(false)
  		this.props.setSelectedMarker('')


  	} else if (!this.state.windowOpen ) {
  		this.props.setSelected(true)
      this.props.setSelectedMarker(e, this.props.position)
//labeledLatLngs
  	}
    this.setState((prevState) =>
    ({
     windowOpen: !prevState.windowOpen
   })
  )
  }



      render() {

        //let { id } = this.props;
        //let { marker } = this.state.activeMarker;



        return (

            <Marker
            className={ "Marker" }
            key={this.props.id}
            name={this.props.name}
            icon={SushiIcon}
            position={this.props.position}
            onClick={(e) => {
              this.onToggleOpen(e)
            }}
            animation={(this.props.position === this.props.selectedMarker) ? this.props.animation : 0}
            windowOpen={this.state.windowOpen}
            handleClick={this.props.handleClick}
            >

            {this.state.windowOpen && this.props.position === this.props.selectedMarker &&

              <InfoWindow
                          key={this.props.id}
                          name={this.props.name}
                          position={this.props.location}
                          marker={this.state.selectedMarker}
                          windowOpen={this.state.windowOpen}
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
