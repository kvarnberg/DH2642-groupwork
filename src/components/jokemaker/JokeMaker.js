import React from "react";
import "./addjoke.css";
import Nav from "../nav/Nav";
import Jokes from "./Jokes";

export class JokeMaker extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Joke Maker</h1>
          </div>
        </div>
        <div className="content-container">
          <Jokes />
        </div>
      </div>
    );
  }
}
export default JokeMaker;
