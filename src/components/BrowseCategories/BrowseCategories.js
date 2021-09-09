import React from "react";
import "../BrowseCategories/BrowseCategories.css";
import { useHistory } from "react-router-dom";

const categoryMapping = {
  campers: 5,
  domes: 8,
  treehouses: 13,
  cabins: 4,
};

const BrowseCategories = () => {
  let history = useHistory();

  const handleClick = (category) => {
    // console.log("test: ", categoryMapping[category]);
    history.push(`/properties?id=${category}`);
  };

  return (
    <div className="title-holder">
      <h2>Where will you wander to next?</h2>

      <div className="cat-container">
        <div className="cat-holder">
          <button
            className="category-btn"
            id="campers"
            onClick={() => handleClick("campers")}
          ></button>
          <h3>Campers</h3>
        </div>

        <div className="cat-holder">
          <button
            className="category-btn"
            id="domes"
            onClick={() => handleClick("domes")}
          ></button>
          <h3>Domes</h3>
        </div>

        <div className="cat-holder">
          <button
            className="category-btn"
            id="treehouses"
            onClick={() => handleClick("treehouses")}
          ></button>
          <h3>Treehouses</h3>
        </div>

        <div className="cat-holder">
          <button
            className="category-btn"
            id="cabins"
            onClick={() => handleClick("cabins")}
          ></button>
          <h3>Cabins</h3>
        </div>
      </div>
    </div>
  );
};

export default BrowseCategories;
