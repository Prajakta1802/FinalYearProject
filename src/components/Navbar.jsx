import React from "react";
import Logo_1 from "../assets/images/logo5.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__image">
        <Link to="/">
          <img src={Logo_1} alt="Government" />
        </Link>
      </div>
      <div className="navbar__title">
        <h2 className="navbar__heading">Digital Traffic</h2>
        <span className="navbar__subheading">
          Transportation Enforcement Maharashtra
        </span>
      </div>
    </div>
  );
};

export default Navbar;
