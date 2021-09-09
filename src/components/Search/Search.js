import React, { useState } from "react";
import "../Search/Search.css";
import * as Icon from "react-feather";
import axios from "axios";

const Search = () => {
  const [userInput, setUserInput] = useState("");
  const [properties, setProperties] = useState([]);

  const handleChange = (string) => {
    // console.log("user input:", string);
    setUserInput(string);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked", userInput);
    axios
      .post("/api/search", { userInput })
      .then((res) => setProperties(res.data));
  };

  console.log("properties:", properties);

  return (
    <form className="search-bar" onSubmit={(e) => handleClick(e)}>
      <input
        type="text"
        placeholder="Search by city or state"
        onChange={(e) => handleChange(e.target.value)}
      />
      <button className="search-btn">
        <Icon.Search />
      </button>
    </form>
  );
};

export default Search;
