import React from "react";
import { Link } from "react-router-dom";

import "./../style/header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={require("./../images/logo.png")} />
      </Link>
      <div className="buttons">
        <Link to="/Register">
          {" "}
          <button className="registerBtn btn">Register</button>
        </Link>
        <Link to="/Login">
          {" "}
          <button className="loginBtn btn">login</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
