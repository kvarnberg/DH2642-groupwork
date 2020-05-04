import React from "react";
import "../../App.css";
import "./random.css";

import Nav from "../nav/Nav";
import { db } from "../../config/Fire";

function Random() {
  return (

    <div className="Random">
      <Nav />
      <header className="App-header">
        <FetchRandom />
      </header>
    </div>
  );
}

class FetchRandom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      joke: "",
      id: "",
    };
  }

  async componentDidMount() {
    const url = "https://icanhazdadjoke.com/";
    const response = await fetch(url, {
      headers: { accept: "application/json" },
    });
    const data = await response.json();
    this.setState({
      loading: false,
      joke: data.joke,
      id: data.id,
    });
  }

  addToUser = () => {
    const user = localStorage.user;
    db.collection("users")
      .doc(user)
      .collection("savedjokes")
      .doc(this.state.id)
      .set({ content: this.state.joke, apiId: this.state.id })
      .then(() => {
        alert("Joke has been added");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  render() {
    return (
      <div className="random">
        {this.state.loading ? (

          <div className="loading">
            loading...
            <br />
            <img src="https://stickershop.line-scdn.net/stickershop/v1/product/3068477/LINEStorePC/main.png;compress=true" />

          </div>
        ) : (
            <div>
              <h1 className="randomjoke">{this.state.joke}</h1>
              <button className="randomButton" onClick={refreshPage}>
                <a> Get another random joke</a>
              </button>
              <button className="saveRandomButton" onClick={this.addToUser}>
                <a> Save this joke</a>
              </button>
            </div>
          )}
      </div>
    );
  }
}

function refreshPage() {
  window.location.reload();
}

export default Random;
