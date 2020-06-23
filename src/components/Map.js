import React, { Component, createRef } from "react";
import mapStyles from "../Theme/mapStyles";
import axios from "axios";

class Map extends Component {
  googleMapRef = createRef();

  componentDidMount() {
    axios
      .get("http://localhost:5000/incidents")
      .then((resp) => this.props.setIncidents(resp.data))
      .then(() => {
        const googleScript = document.createElement("script");
        googleScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCeB3fijFTmeINUL-CSVErtAIIfxv5LNxc&libraries=places`;
        window.document.body.appendChild(googleScript);

        googleScript.addEventListener("load", () => {
          this.googleMap = this.createGoogleMap();
        });
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.mapCenter !== prevProps.mapCenter) {
      const googleScript = document.createElement("script");
      googleScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCeB3fijFTmeINUL-CSVErtAIIfxv5LNxc&libraries=places`;
      window.document.body.appendChild(googleScript);

      googleScript.addEventListener("load", () => {
        this.googleMap = this.createGoogleMap();
      });
    }

    if (this.props.incidents !== prevProps.incidents) {
      const googleScript = document.createElement("script");
      googleScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCeB3fijFTmeINUL-CSVErtAIIfxv5LNxc&libraries=places`;
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

  //  Possibly replacing button on the map with a

  // CenterControl = (controlDiv, map, center) => {
  //   // Set CSS for the control border.
  //   var controlUI = document.createElement("div");
  //   controlUI.style.backgroundColor = "#fff";
  //   controlUI.style.border = "2px solid #fff";
  //   controlUI.style.borderRadius = "3px";
  //   controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  //   controlUI.style.cursor = "pointer";
  //   controlUI.style.marginBottom = "22px";
  //   controlUI.style.textAlign = "center";
  //   controlUI.title = "Click to recenter the map";
  //   controlDiv.appendChild(controlUI);

  //   // Set CSS for the control interior.
  //   var controlText = document.createElement("div");
  //   controlText.style.color = "rgb(25,25,25)";
  //   controlText.style.fontFamily = "Roboto,Arial,sans-serif";
  //   controlText.style.fontSize = "16px";
  //   controlText.style.lineHeight = "38px";
  //   controlText.style.paddingLeft = "5px";
  //   controlText.style.paddingRight = "5px";
  //   controlText.textContent = "Center Map";
  //   controlUI.appendChild(controlText);

  //   // Setup the click event listeners: simply set the map to Chicago.
  //   controlUI.addEventListener("click", function () {
  //     map.setCenter(center);
  //   });
  // };

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

    // const centerControlDiv = document.createElement("div");
    // const centerControl = this.CenterControl(
    //   centerControlDiv,
    //   map,
    //   this.state.current
    // );

    // centerControlDiv.index = 1;
    // map.controls[window.google.maps.ControlPosition.TOP_RIGHT].push(
    //   centerControlDiv
    // );

    this.createMarker(map);
  };

  createMarker = (map) => {
    let incidents = this.props.incidents.length;
    for (let i = 0; i < incidents; i++) {
      let incident = this.props.incidents[i];
      // console.log(incident);
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

      //currently have an onClick on marker displaying its own data
      //how are we going to switch between recent incidents view and
      //specific incident view, a toggle in state?
      marker.addListener("click", () => {
        this.props.setCurrentIncident(marker.data);
      });
    }
  };

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
