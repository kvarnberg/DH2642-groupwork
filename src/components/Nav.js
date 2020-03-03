import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "black",
    textDecoration: "none"
  };

  return (
    <nav>
      <Link style={navStyle} to="/">
        {" "}
        <h3>Logo</h3>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>home</li>
        </Link>
        <Link style={navStyle} to="/random">
          <li>random</li>
        </Link>
        <Link style={navStyle} to="/search">
          <li>search</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li>about</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
