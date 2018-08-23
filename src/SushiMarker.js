/*global google*/
import React, { Component } from 'react';
import { Marker, InfoWindow } from "react-google-maps";
import SushiIcon from "./sushi.png";


class SushiMarker extends Component {

      state = {

      }


      render() {


        return (

            <Marker
            className={ "Marker" }
            key={this.props.id}
            name={this.props.name}
            icon={SushiIcon}
            position={this.props.position}
            onClick={(e) => {
              this.props.onToggleOpen(e)
              this.props.setSelected(true)
              this.props.setSelectedMarker(e, this.props.position)
            }}
            animation={(this.props.position === this.props.selectedMarker) ? this.props.animation : 0}
            windowOpen={this.state.windowOpen}
            >

            {this.props.windowOpen && this.props.position === this.props.selectedMarker &&
              <InfoWindow
                          key={this.props.id}
                          name={this.props.name}
                          position={this.props.location}
                          marker={this.state.selectedMarker}
                          onCloseClick={this.props.onToggleOpen}
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
