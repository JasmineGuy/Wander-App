import React from "react";
import "../Map/Map.css";
import LocationPin from "../LocationPin/LocationPin";
import GoogleMapReact from "google-map-react";
import "./Map.css";

const Map = ({ location, zoomLevel }) => {
  return (
    <>
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "xyz" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.long}
            // text={location.address}
          />
        </GoogleMapReact>
      </div>
    </>
  );
};

export default Map;
