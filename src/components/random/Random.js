import React from "react";
import "../../App.css";
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
      <div>
        <h1>Home page</h1>
        <h3>You are now logged in!</h3>
        <pre></pre>
        <pre></pre>
        <pre></pre>
        <pre></pre>
        <pre></pre>
        <pre></pre>
        <pre></pre>
        <pre></pre>
        <h2 className="color">Joke Of The Day</h2>
        <pre></pre>
        <pre></pre>
        <pre></pre>

        {this.state.loading ? (
          <div>loading...</div>
        ) : (
          <h1 className="randomjoke">{this.state.joke}</h1>
        )}
        <button className="smolbtn" onClick={refreshPage}>
          Get another random joke
        </button>
        <button className="smolbtn" onClick={this.addToUser}>
          Save this joke
        </button>
      </div>
    );
  }
}

function refreshPage() {
  window.location.reload();
}

export default Random;
