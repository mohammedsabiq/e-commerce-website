import React from "react";
import "./Navbar.css";
import navlogo from "../../assets/nav-logo.svg";
import navProfile from "../../assets/nav-profile.svg";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <div className="adminpanel">
          <p>FASHION FUSION</p>
          <div className="adminpanel-name">
            <p>Admin panel</p>
          </div>
        </div>
      </div>
      <img className="navProfile" src={navProfile} alt="" />
    </div>
  );
};

export default Navbar;
