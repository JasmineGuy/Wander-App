// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Splash from "./components/Splash/Splash";
import Home from "./components/Home/Home";
import "./App.css";

const App = () => {
  // const [urls, setUrls] = useState([]);
  // useEffect(() => {
  //   axios.get("/api/properties").then((res) => {
  //     console.log("res:", res.data[0].urls);
  //     setUrls(res.data[0].urls);
  //   });
  // }, []);

  return (
    <div>
      <Home />
      {/* {urls.length ? <img alt="cover" src={urls[2]} /> : null} */}
    </div>
  );
};

export default App;
