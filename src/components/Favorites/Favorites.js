import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../../ducks/favoritesReducer";
import Header from "../Header/Header";

const Favorites = () => {
  const favorites = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log("favorites:", favorites.favoritesReducer.favorites);

  const add = () => {
    console.log("add");
    dispatch(addFavorite("billy"));
  };

  return (
    <div>
      <Header />
      <button onClick={add}></button>
    </div>
  );
};

export default Favorites;
