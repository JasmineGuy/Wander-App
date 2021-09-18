import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addFavorite, removeFavorite } from "../../ducks/favoritesReducer";
import Header2 from "../Header2/Header2";
import Footer from "../Footer/Footer";
import Property from "../Property/Property";
import "./Favorites.css";

const Favorites = () => {
  const favorites = useSelector((state) => state);
  const dispatch = useDispatch();
  const [list, setList] = useState([]);

  console.log("favorites:", favorites.favoritesReducer.favorites);

  useEffect(() => {
    setList(favorites.favoritesReducer.favorites);
  }, [favorites.favoritesReducer.favorites]);

  return (
    <div>
      <Header2 />
      <div className="properties-display">
        <div className="list">
          {list && list.length
            ? list.map((item, index) => {
                console.log("list:", list);
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
                  />
                );
              })
            : "You have not added any rentals to your favorites"}
        </div>
        <div className="map">{/* <Map /> */}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Favorites;
