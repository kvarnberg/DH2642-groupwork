import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function PublicNav() {
  return (
    <div className="header">
      <Link to="/about">
        <h3>Joke App</h3>
      </Link>
      <div className="header-right">
        <Link to="/about">about</Link>

        <Link to="/">login/signup</Link>
      </div>
    </div>
  );
}

export default PublicNav;
