import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [urls, setUrls] = useState([]);
  useEffect(() => {
    axios.get("/api/properties").then((res) => {
      console.log("res:", res.data);
      // setUrls(res.data[0].urls);
    });
  }, []);

  return (
    <div>
      <h1>hello</h1>
      {/* {urls.length ? <img alt="cover" src={urls[2]} /> : null} */}
    </div>
  );
};

export default App;
