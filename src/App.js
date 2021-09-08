// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Splash from "./components/Splash/Splash";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Properties from "./components/Properties/Properties";
import "./App.css";

const App = () => {
  const location = useLocation();
  console.log("location:", location);
  // const [urls, setUrls] = useState([]);
  // useEffect(() => {
  //   axios.get("/api/properties").then((res) => {
  //     console.log("res:", res.data[0].urls);
  //     setUrls(res.data[0].urls);
  //   });
  // }, []);

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
