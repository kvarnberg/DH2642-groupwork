import React from "react";
import "../App.css";
import fire from "../config/Fire";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div>
        <h1>Home page</h1>
        <h3>You are now logged in</h3>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default Home;
