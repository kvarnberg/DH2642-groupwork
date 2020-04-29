import React from "react";
import "../../App.css";
import Nav from "../nav/Nav";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <h1>Home page</h1>
        <h3>You are now logged in</h3>
      </div>
    );
  }
}

export default Home;
