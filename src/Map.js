import React, { Component, createRef } from "react";
import mapStyles from "./mapStyles";

class Map extends Component {
  googleMapRef = createRef();

  state = {
    current: {
      lat: 40.7278722,
      lng: -73.9572483,
    },
  };

  componentDidMount() {
    const googleScript = document.createElement("script");
    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCeB3fijFTmeINUL-CSVErtAIIfxv5LNxc&libraries=places`;
    window.document.body.appendChild(googleScript);

    googleScript.addEventListener("load", () => {
      this.googleMap = this.createGoogleMap();
      this.marker = this.createMarker();
    });
  }

  createGoogleMap = () =>
    new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 14,
      center: this.state.current,
      disableDefaultUI: true,
      styles: mapStyles,
    });

  createMarker = () =>
    new window.google.maps.Marker({
      position: { lat: 40.7278722, lng: -73.9572483 },
      map: this.googleMap,
      icon: {
        path: window.google.maps.SymbolPath.CIRCLE,
        fillColor: "#EBC700",
        fillOpacity: 1,
        strokeColor: "#EBC700",
        strokeOpacity: 0.9,
        strokeWeight: 1,
        scale: 10,
      },
    });

  render() {
    return (
      <div
        id="google-map"
        ref={this.googleMapRef}
        style={{ width: "100%", height: "100%" }}
      />
    );
  }
}

export default Map;
