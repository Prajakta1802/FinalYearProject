import React, { useState } from "react";
import { Navbar, Footer, SecondaryButton, Loader } from "../components";
import axios from "axios";
import TestVideo from "E:/__Degree/8th sem/Final Year Project/Final_Year_BE_Project_Final/part1_project_module/files/videoTest.mp4";

const OverSpeeding = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [column, setColumn] = useState();

  const GetOverSpeedingData = async () => {
    try {
      setLoading(true);
      const { data: result } = await axios.get(
        "http://127.0.0.1:5000/background_process_test"
      );
      setLoading(false);
      setData(convertData(result));
    } catch (error) {
      console.log(error);
    }
  };

  const isObjEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  const convertData = (result) => {
    const resultData = [];
    for (let index = 0; index < result?.id?.length; index++) {
      const id = result?.id[index];
      const speed = result?.speeds[index];
      const resultObj = {
        id,
        speed,
      };
      resultData.push(resultObj);
    }
    return resultData;
  };

  // const tdData = () => {
  //   return TableData.map((data) => {
  //     return (
  //       <tr>
  //         {column.map((v) => {
  //           return <td>{data[v]}</td>;
  //         })}
  //       </tr>
  //     );
  //   });
  // };

  const tdData = () => {
    return data.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.speed}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <Navbar />
      <div className="main">
        <h1>Overspeeding</h1>
        <div className="input__container">
          <input
            type="text"
            className="input__box"
            placeholder="Enter file name..."
          />
          <SecondaryButton onClick={GetOverSpeedingData}>
            Submit
          </SecondaryButton>
        </div>
        <hr />
        <h2>Results</h2>
        {loading ? (
          <Loader />
        ) : !isObjEmpty(data) ? (
          <div className="result__container">
            <div className="result-video">
              <video src={TestVideo} controls></video>
            </div>
            <div className="result-table">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Speed</th>
                  </tr>
                </thead>
                <tbody>{tdData()}</tbody>
              </table>
            </div>
          </div>
        ) : (
          <p>No Results</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default OverSpeeding;

//E:\__Degree\8th sem\Final Year Project\Final_Year_BE_Project_Final\part1_project_module\files\videoTest.mp4
