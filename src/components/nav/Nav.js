/*import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { auth } from "../../config/Fire";

function Nav() {

  function logout() {
    auth.signOut();
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

export default Nav;*/
import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import firebase from "firebase";
import profile from "./user.png";
import out from "./logout.png";

function Nav() {
  function logout() {
    firebase.auth().signOut();
  }

  return (
    <div className="header">
      <Link to="/">
        <h3>Joke App</h3>
      </Link>
      <div className="header-right">

        <Link to="/">home</Link>

        <Link to="/search">search</Link>

        <Link to="/jokes">jokes</Link>

        <Link to="/profile">
          <img src={profile} style={{ height: "20px" }} alt="profile" />
        </Link>

        <Link to="/" onClick={logout}>
          <img src={out} style={{ height: "18px" }} alt="logOut" />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
