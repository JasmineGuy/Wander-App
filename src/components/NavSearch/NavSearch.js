import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../NavSearch/NavSearch.css";
import * as Icon from "react-feather";

const NavSearch = () => {
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
    <form className="nav-search-bar" onSubmit={(e) => handleClick(e)}>
      <input
        type="text"
        placeholder="Start your search"
        onChange={(e) => handleChange(e.target.value)}
      />
      <button className="nav-search-btn">
        <Icon.Search className="search-icon" />
      </button>
    </form>
  );
};

export default NavSearch;
