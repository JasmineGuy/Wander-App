import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
// import Pin from "../Pin/Pin";
import "./Map.css";

const containerStyle = {
  width: "1000px",
  height: "500px",
};

const Map = ({ lat, lng }) => {
  const [map, setMap] = React.useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    // googleMapsApiKey: process.env.GOOGLE_API_KEY,
  });

  const center = {
    lat: parseFloat(lat),
    lng: parseFloat(lng),
    address: "320 Singleton Blvd Dallas TX, 75212",
  };

  const position = {
    lat: parseFloat(lat),
    lng: parseFloat(lng),
  };

  const onLoad = React.useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <>
      {isLoaded && lat && lng && center.lat && center.lng ? (
        <div className="container-div">
          <div className="map-wrapper">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={13}
              onUnmount={onUnmount}
            >
              <Marker position={position} />
            </GoogleMap>
          </div>
        </div>
      ) : (
        <>
          <div>Loading....</div>
        </>
      )}
    </>
  );
};

export default Map;
