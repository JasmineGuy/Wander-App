import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Listing = () => {
  const location = useLocation();
  const [property, setProperty] = useState();
  console.log("made it to listing!");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    console.log("id:", id);

    axios.get(`/api/listing/${id}`).then((res) => {
      setProperty(res.data);
    });
  }, [location.pathname, location.search]);

  // console.log("location:", location);
  // console.log("location.search:", location.search);
  // console.log("prop:", property);

  return (
    <div>
      <Header />
      <h1>Listing!</h1>
      <Footer />
    </div>
  );
};

export default Listing;
