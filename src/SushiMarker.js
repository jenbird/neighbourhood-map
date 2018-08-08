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
      this.setState((prevState) =>
      ({ isOpen: !prevState.isOpen })
    )
    }


      render() {

        return (

            <Marker
            key={this.props.id}
            name={this.props.name}
            icon={SushiIcon}
            position={this.props.position}
            onClick={this.onToggleOpen}
            animation={(this.props.isSelected === true) ? this.props.animation : 0}
            tabIndex={0}
            >
            {this.state.isOpen &&
              <InfoWindow
                          key={this.props.id}
                          name={this.props.name}
                          position={this.props.position}
                          onClick={this.onToggleOpen}
                          onCloseClick={this.onToggleOpen}
                          options={{pixelOffset: new google.maps.Size(0, -10)}}
                          position={this.props.position}
                          tabIndex={0}
                        >
                        <span className="Info-window">
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
