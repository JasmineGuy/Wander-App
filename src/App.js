import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Properties from "./components/Properties/Properties";
import Listing from "./components/Listing/Listing";
import Favorites from "./components/Favorites/Favorites";
import { useDispatch } from "react-redux";

import "./App.css";
import { setReduxRoute } from "./ducks/reduxRouteReducer";

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  console.log("location app:", location);

  useEffect(() => {
    if (location.pathname) {
      dispatch(setReduxRoute(location.pathname));
    }
  }, [location.pathname]);

  return (
    <div>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route path="/properties" component={Properties} />
        <Route path="/properties/:id" component={Properties} />
        <Route path="/listing" component={Listing} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </div>
  );
};

export default App;
