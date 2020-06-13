import React from "react";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const libraries = ["places"];

const Map = (props) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default GoogleMap;
