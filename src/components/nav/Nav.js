import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import firebase from "firebase";

function Nav() {
  const navStyle = {
    color: "black",
    textDecoration: "none"
  };

  function logout() {
    firebase.auth().signOut();
  }

  return (
    <nav>
      <Link style={navStyle} to="/">
        <h3>logo</h3>
      </Link>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/random">random</Link>
        </li>
        <li>
          <Link to="/search">search</Link>
        </li>
        <li>
          <Link to="/jokes">jokes</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link onClick={logout}>logout</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
