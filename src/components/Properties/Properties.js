import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import Header2 from "../Header2/Header2";
import Footer from "../Footer/Footer";
import Property from "../Property/Property";
import Map from "../Map/Map";
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

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("id");
    const searchParam = params.get("query");
    const id = categoryMapping[categoryParam];

    if (categoryParam) {
      axios.get(`/api/properties/${id}`).then((res) => {
        setProperties(res.data);
      });
    } else if (searchParam) {
      axios
        .post("/api/search", { searchParam })
        .then((res) => setProperties(res.data));
    } else {
      axios.get("/api/properties").then((res) => {
        setProperties(res.data);
      });
    }
  }, [location.pathname, location.search]);

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
        <div className="map">{/* <Map /> */}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Properties;
