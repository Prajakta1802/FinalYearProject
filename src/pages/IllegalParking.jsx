import React, { useState } from "react";
import { Navbar, Footer, SecondaryButton, Loader } from "../components";
import Traffic from "../assets/images/multiple1.jpg";

const IllegalParking = () => {
  const [data, setData] = useState([{ id: 1, speed: 1 }]);
  const [loading, setLoading] = useState(true);

  const isObjEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  const Get = async () => {
    try {
      const { data: result } = await axios.get("");
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="main">
        <h1>Illegal Parking</h1>
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
          <Loader />
        ) : !isObjEmpty(data) ? (
          <div className="result__container">
            <div className="result-video">
              <img src={Traffic} alt="" />
            </div>
            <div className="result-table">
              <table className="table">
                <thead>
                  <tr>
                    <th>Illegally Parked Vehicle Number Plate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>JH-10-F-2208</td>
                  </tr>
                  <tr>
                    <td>BR-01-CY-7404</td>
                  </tr>
                </tbody>
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

export default IllegalParking;
