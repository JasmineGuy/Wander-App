import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import Header2 from "../Header2/Header2";
import Footer from "../Footer/Footer";
import Property from "../Property/Property";
import Map from "../Map/Map";
import ClusterMap from "../ClusterMap/ClusterMap";
import "../Properties/Properties.css";

const categoryMapping = {
  campers: 5,
  domes: 8,
  treehouses: 13,
  cabins: 4,
};

const Properties = () => {
  let location = useLocation();
  const [properties, setProperties] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const [averageLat, setAverageLat] = useState();
  const [averageLng, setAverageLng] = useState();

  const calcCoordinates = useCallback((place) => {
    let arr = [];
    let latSum = 0;
    let lngSum = 0;
    for (let i = 0; i < place.length; i++) {
      arr.push({
        lat: parseFloat(place[i].lat),
        lng: parseFloat(place[i].lng),
      });
      latSum += parseFloat(place[i].lat);
      lngSum += parseFloat(place[i].lng);
      console.log("latSum:", latSum);
    }
    setCoordinates(arr);
    setAverageLat(latSum / parseInt(place.length));
    setAverageLng(lngSum / parseInt(place.length));
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("id");
    const searchParam = params.get("query");
    const id = categoryMapping[categoryParam];

    if (categoryParam) {
      axios.get(`/api/properties/${id}`).then((res) => {
        setProperties(res.data);
        calcCoordinates(res.data);
      });
    } else if (searchParam) {
      axios.post("/api/search", { searchParam }).then((res) => {
        setProperties(res.data);
        calcCoordinates(res.data);
      });
    } else {
      axios.get("/api/properties").then((res) => {
        setProperties(res.data);
        calcCoordinates(res.data);
      });
    }
  }, [location.pathname, location.search]);

  console.log({ coordinates });

  return (
    <div>
      <Header2 />
      <div className="properties-display">
        <div className="list">
          {properties && properties.length ? (
            properties.map((property, index) => {
              return (
                <Property
                  key={index}
                  id={property.property_id}
                  image={property.cover_pic}
                  name={property.name}
                  guests={property.max_guests}
                  beds={property.beds}
                  baths={property.baths}
                  amen1={property.amen_1}
                  amen2={property.amen_2}
                  amen3={property.amen_3}
                  price={property.price_per_night}
                  host={property.f_name}
                  property={property}
                />
              );
            })
          ) : (
            <div>
              <Skeleton count={10} duration={3} />
            </div>
          )}
        </div>
        <div className="map">
          <ClusterMap
            coordinates={coordinates}
            averageLat={averageLat}
            averageLng={averageLng}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Properties;
