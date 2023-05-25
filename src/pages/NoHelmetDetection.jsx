import React, { useRef, useState } from "react";
import { Navbar, Footer, SecondaryButton, Loader } from "../components";
import axios from "axios";
import TestVideo from "../assets/images/video_1.mp4";

const NoHelmetDetection = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const videoRef = useRef();
  const GetNoHelmetDetectionData = async () => {
    try {
      const { data: result } = await axios.get("");
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const setPlayBackSpeed = () => {
    videoRef.current.playbackRate = 0.75;
  };

  return (
    <>
      <Navbar />
      <div className="main">
        <h1>No Helmet Detection</h1>
        <div className="input__container">
          <input
            type="text"
            className="input__box"
            placeholder="Enter file name..."
          />
          <SecondaryButton>Submit</SecondaryButton>
        </div>
        <hr />
        <h2>Results</h2>
        {!loading ? (
          <div className="">
            <video
              ref={videoRef}
              onCanPlay={() => setPlayBackSpeed()}
              controls
              className="no-helmet-video"
            >
              <source src={TestVideo} type="video/mp4" />
            </video>
          </div>
        ) : (
          <div>Noo</div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default NoHelmetDetection;
