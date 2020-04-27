import React from "react";
import "../../App.css";
import PublicNav from "../nav/PublicNav";

class About extends React.Component {
  render() {
    return (
      <div>
        <PublicNav />
        <div>
          <h3 className="title">About this app</h3>
          <p className="textContent"></p>
        </div>
      </div>
    );
  }
}

export default About;
