import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import Header2 from "../Header2/Header2";
import Footer from "../Footer/Footer";
import Property from "../Property/Property";
import ClusterMap from "../ClusterMap/ClusterMap";

import "./Favorites.css";

const Favorites = () => {
  const favorites = useSelector((state) => state);
  // const dispatch = useDispatch();
  const [list, setList] = useState([]);
  // const location = useLocation();
  const [coordinates, setCoordinates] = useState([]);
  const [averageLat, setAverageLat] = useState();
  const [averageLng, setAverageLng] = useState();

  useEffect(() => {
    setList(favorites.favoritesReducer.favorites);
    calcCoordinates(favorites.favoritesReducer.favorites);
  }, [favorites.favoritesReducer.favorites]);

  const calcCoordinates = useCallback((list) => {
    let arr = [];
    let latSum = 0;
    let lngSum = 0;
    for (let i = 0; i < list.length; i++) {
      arr.push({
        lat: parseFloat(list[i].lat),
        lng: parseFloat(list[i].lng),
        id: list[i].property_id,
      });
      latSum += parseFloat(list[i].lat);
      lngSum += parseFloat(list[i].lng);
    }
    setCoordinates(arr);
    setAverageLat(latSum / parseInt(list.length));
    setAverageLng(lngSum / parseInt(list.length));
  }, []);

  console.log("list:", list);
  console.log("avgLat:", averageLat);
  console.log("coordinates:", coordinates);

  return (
    <div>
      <Header2 />
      <div className="properties-display">
        <div className="list">
          {favorites.favoritesReducer.favorites &&
          favorites.favoritesReducer.favorites.length ? (
            favorites.favoritesReducer.favorites.map((item, index) => {
              return (
                <Property
                  key={index}
                  id={item.property_id}
                  image={item.cover_pic}
                  name={item.name}
                  guests={item.max_guests}
                  beds={item.beds}
                  baths={item.baths}
                  amen1={item.amen_1}
                  amen2={item.amen_2}
                  amen3={item.amen_3}
                  price={item.price_per_night}
                  host={item.f_name}
                  property={item}
                />
              );
            })
          ) : (
            <div className="no-faves-message">
              You have not yet added any rentals to your favorites
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

export default Favorites;
