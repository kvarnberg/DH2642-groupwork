import React from "react";
import "../../App.css";
import "./random.css";

import Nav from "../nav/Nav";
import { db } from "../../config/Fire";
import firebase from "firebase";

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
  abortController = new AbortController();
  async componentDidMount() {
    try {
      const url = "https://icanhazdadjoke.com/";
      const response = await fetch(url, {
        signal: this.abortController.signal,
        headers: { accept: "application/json" },
      });
      const data = await response.json();
      this.setState({
        loading: false,
        joke: data.joke,
        id: data.id,
      });
    } catch (err) {
      if (err.name === "AbortError") {
      } else {
        throw err;
      }
    }
  }

  componentWillUnmount() {
    this.abortController.abort();
  }

  addToUser = () => {
    const user = localStorage.user;
    var docRef = db
      .collection("users")
      .doc(user)
      .collection("savedjokes")
      .doc(this.state.id);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          alert("Could not add. Joke already in your list.");
        } else {
          docRef
            .set({
              content: this.state.joke,
              apiId: this.state.id,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then(() => {
              alert("Joke has been added");
            })
            .catch((error) => {
              alert(error.message);
            });
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };

  render() {
    return (
      <div className="random">
        {this.state.loading ? (
          <div className="loading">
            loading...
            <br />
            <img
              alt="loading"
              src="https://stickershop.line-scdn.net/stickershop/v1/product/3068477/LINEStorePC/main.png;compress=true"
            />
          </div>
        ) : (
          <div>
            <h1 className="randomjoke">{this.state.joke}</h1>
            <button className="randomButton" onClick={refreshPage}>
              Get another random joke
            </button>
            <button className="saveRandomButton" onClick={this.addToUser}>
              Save this joke
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
