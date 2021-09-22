import React from "react";
import { useLocation, useHistory } from "react-router-dom";

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  // MarkerClusterer,
} from "@react-google-maps/api";
import "./ClusterMap.css";

const containerStyle = {
  width: "100%",
  // height: "100vh",
  height: "100%",
};

const ClusterMap = ({ coordinates, averageLat, averageLng }) => {
  const [map, setMap] = React.useState(null);
  let location = useLocation();
  let history = useHistory();

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

  const handlePinClick = (id) => {
    history.push(`/listing?id=${id}`);
  };

  return (
    <div>
      <>
        {isLoaded ? (
          <div className="container-div">
            <div className="map-wrapper">
              <GoogleMap
                mapContainerStyle={containerStyle}
                // className="mapContainer"
                center={center}
                zoom={(location.pathname = "/properties" ? 4 : 10)}
                onUnmount={onUnmount}
              >
                {locations.map((item, index) => (
                  <Marker
                    key={index}
                    position={item}
                    onClick={() => handlePinClick(item.id)}
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
