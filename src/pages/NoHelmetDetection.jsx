import React from "react";
import { Navbar, Footer } from "../components";

const NoHelmetDetection = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <h1>No Helmet Detection</h1>
      </div>
      <Footer />
    </>
  );
};

export default NoHelmetDetection;
