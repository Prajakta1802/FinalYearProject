import React from "react";
import { Navbar, Footer, PrimaryButton } from "../components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <h1>Our Services</h1>
        <div className="btn__container">
          <Link to="/overspeeding">
            <PrimaryButton>Overspeeding</PrimaryButton>
          </Link>
          <Link to="/illegalparking">
            <PrimaryButton>Illegal Parking</PrimaryButton>
          </Link>
          <Link to="/nohelmetdetection">
            <PrimaryButton>No Helment Detection</PrimaryButton>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
