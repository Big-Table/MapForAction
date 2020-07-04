import React, { Component, createRef } from "react";
import mapStyles from "../../Theme/mapStyles";

class Map extends Component {
  googleMapRef = createRef();
  googleKey =
    process.env.NODE_ENV === "production"
      ? "AIzaSyA1Cq6ox4TlZp5HUfSzWoZDuHN9rhrgK6Q"
      : "AIzaSyCeB3fijFTmeINUL-CSVErtAIIfxv5LNxc";

  componentDidMount() {
    const googleScript = document.createElement("script");
    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${this.googleKey}&libraries=places`;
    window.document.body.appendChild(googleScript);

    googleScript.addEventListener("load", () => {
      this.googleMap = this.createGoogleMap();
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.mapCenter !== prevProps.mapCenter) {
      const googleScript = document.createElement("script");
      googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${this.googleKey}&libraries=places`;
      window.document.body.appendChild(googleScript);

      googleScript.addEventListener("load", () => {
        this.googleMap = this.createGoogleMap();
      });
    }

    if (this.props.incidents !== prevProps.incidents) {
      const googleScript = document.createElement("script");
      googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${this.googleKey}&libraries=places`;
      window.document.body.appendChild(googleScript);

      googleScript.addEventListener("load", () => {
        this.googleMap = this.createGoogleMap();
      });

      // const lastIncident = this.props.incidents[
      //   this.props.incidents.length - 1
      // ];
      // this.props.setMapCenter({
      //   lat: parseFloat(lastIncident.lat),
      //   lng: parseFloat(lastIncident.lng),
      // });
    }
  }

  createGoogleMap = () => {
    let map = new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 11,
      center: this.props.mapCenter,
      disableDefaultUI: true,
      styles: mapStyles,
      zoomControl: true,
      scaleControl: true,
      streetViewControl: true,
      mapTypeControl: true,
    });

    map.addListener("click", () => {
      this.props.deleteCurrentIncident();
    });

    this.createMarker(map);
  };

  createMarker = (map) => {
    let incidents = this.props.incidents.length;
    for (let i = 0; i < incidents; i++) {
      let incident = this.props.incidents[i];
      let marker = new window.google.maps.Marker({
        position: {
          lat: parseFloat(incident.lat),
          lng: parseFloat(incident.lng),
        },
        map: map,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          fillColor: "#EBC700",
          fillOpacity: 1,
          strokeColor: "#EBC700",
          strokeOpacity: 0.9,
          strokeWeight: 1,
          scale: 10,
        },
        data: this.props.incidents[i],
      });

      marker.addListener("click", () => {
        this.props.setCurrentIncident(marker.data);
      });
    }
  };

  // getBounds = (map) => {
  //   let bounds = map.getBounds();
  //   let ne = bounds.getNorthEast();
  //   let sw = bounds.getSouthWest();

  //   return {ne, switch (key) {
  //     case value:

  //       break;

  //     default:
  //       break;
  //   }}
  // };

  render() {
    return (
      <div
        key={this.props.mapCenter}
        id="google-map"
        ref={this.googleMapRef}
        style={{ width: "100%", height: "100%" }}
      />
    );
  }
}

export default Map;
