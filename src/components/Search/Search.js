import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Search/Search.css";
import * as Icon from "react-feather";

const Search = () => {
  const history = useHistory();
  const [userInput, setUserInput] = useState("");

  const handleChange = (string) => {
    setUserInput(string);
  };

  const handleClick = (e) => {
    e.preventDefault();

    history.push(`/properties?query=${userInput}`);
  };

  return (
    <form className="search-bar" onSubmit={(e) => handleClick(e)}>
      <input
        type="text"
        placeholder="Search by city or state"
        onChange={(e) => handleChange(e.target.value)}
        id="search-placeholder"
      />
      <button className="search-btn">
        <Icon.Search />
      </button>
    </form>
  );
};

export default Search;
