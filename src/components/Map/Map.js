import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import "./Map.css";

const containerStyle = {
  width: "800px",
  height: "500px",
};

const Map = ({ lat, lng }) => {
  console.log("lat:", lat);
  console.log("lng:", lng);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.GOOGLE_API_KEY,
  });

  const center = {
    lat: lat,
    lng: lng,
  };

  //   console.log("isloaded:", isLoaded);
  const [map, setMap] = React.useState(null);
  //   console.log("map:", map);
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    console.log("bounds:", bounds);
    setMap(map);
    console.log("map:", map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="container-div">
      <div className="map-title">
        <h2>Where you'll be staying</h2>
      </div>
      <div className="map-wrapper">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={11}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Map;
