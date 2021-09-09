import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Properties from "./components/Properties/Properties";
import Listing from "./components/Listing/Listing";

import "./App.css";

const App = () => {
  const location = useLocation();
  // console.log("location:", location);

  return (
    <div>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route path="/properties" component={Properties} />
        <Route path="/properties/:id" component={Properties} />
        <Route path="/listing" component={Listing} />
      </Switch>
    </div>
  );
};

export default App;
