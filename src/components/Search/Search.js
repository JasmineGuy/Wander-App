import React from "react";
import "../Search/Search.css";
import * as Icon from "react-feather";

const Search = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search by city" />
      <button className="search-btn">
        <Icon.Search />
      </button>
    </div>
  );
};

export default Search;
