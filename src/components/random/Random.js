import React from "react";
import "../../App.css";
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
      <div>
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
