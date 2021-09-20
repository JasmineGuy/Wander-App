import React from "react";
import { useLocation } from "react-router-dom";

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  MarkerClusterer,
} from "@react-google-maps/api";
import "./ClusterMap.css";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const ClusterMap = ({ coordinates, averageLat, averageLng }) => {
  const [map, setMap] = React.useState(null);
  let location = useLocation();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    // googleMapsApiKey: process.env.GOOGLE_API_KEY,
    googleMapsApiKey: "AIzaSyDWdnn-obpn7FH-vGbrm69phBUhDtVPtZg",
  });

  const center = { lat: averageLat, lng: averageLng };

  const locations = coordinates;

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handlePinClick = (e) => {
    console.log("pinLocation: ", e);
  };

  return (
    <div>
      <>
        {isLoaded ? (
          <div className="container-div">
            <div className="map-wrapper">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={(location.pathname = "/properties" ? 4 : 10)}
                onUnmount={onUnmount}
              >
                {locations.map((item, index) => (
                  <Marker
                    key={index}
                    position={item}
                    onClick={handlePinClick}
                  />
                ))}
              </GoogleMap>
            </div>
          </div>
        ) : (
          <>
            <div>Loading....</div>
          </>
        )}
      </>
    </div>
  );
};

export default ClusterMap;
