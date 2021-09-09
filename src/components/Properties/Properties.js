import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "../Header/Header";
import Property from "../Property/Property";
import Map from "../Map/Map";
import "../Properties/Properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    axios.get("/api/properties").then((res) => {
      // console.log("res:", res.data);
      setProperties(res.data);
      // setProperties([
      //   res.data[0],
      //   res.data[1],
      //   res.data[2],
      //   res.data[3],
      //   res.data[4],
      // ]);
    });
  }, []);

  console.log("properties:", properties);

  return (
    <div>
      <Header />
      <div className="properties-display">
        <div className="list">
          {properties.map((property) => {
            return (
              <Property
                image={property.cover_pic}
                name={property.name}
                guests={property.max_guests}
                beds={property.beds}
                baths={property.baths}
                amen1={property.amen_1}
                amen2={property.amen_2}
                amen3={property.amen_3}
                price={property.price_per_night}
              />
            );
          })}
        </div>
        <div className="map">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Properties;
