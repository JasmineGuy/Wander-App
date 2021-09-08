import React from "react";
import "../BrowseCategories/BrowseCategories.css";

const BrowseCategories = () => {
  return (
    <div className="title-holder">
      <h2>Where will you wander to next?</h2>

      <div className="cat-container">
        <div className="cat-holder">
          <button className="category-btn" id="campers"></button>
          <h3>Campers</h3>
        </div>

        <div className="cat-holder">
          <button className="category-btn" id="domes"></button>
          <h3>Domes</h3>
        </div>

        <div className="cat-holder">
          <button className="category-btn" id="treehouses"></button>
          <h3>Treehouses</h3>
        </div>

        <div className="cat-holder">
          <button className="category-btn" id="cabins"></button>
          <h3>Cabins</h3>
        </div>
      </div>
    </div>
  );
};

export default BrowseCategories;
