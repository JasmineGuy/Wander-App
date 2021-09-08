import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Properties from "./components/Properties/Properties";
import "./App.css";

const App = () => {
  const location = useLocation();
  // console.log("location:", location);

  return (
    <div>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route path="/properties" component={Properties} />
      </Switch>
    </div>
  );
};

export default App;
