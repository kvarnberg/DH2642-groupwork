import React from "react";
import firebase from "firebase";
import "./addjoke.css";

function Jokes() {
  const [newJokeContent, setNewJokeContent] = React.useState("");
  const user = localStorage.user;

  const onCreate = () => {
    alert("Joke has been added");
    const db = firebase.firestore();
    db.collection("users")
      .doc(user)
      .collection("savedjokes")
      .add({
        content: newJokeContent + " ",
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
  };

  return (
    <div className="content-container">
      <div className="form">
        <h3 className="header">Add a joke</h3>

        <textarea
          placeholder="Enter your joke here"
          className="textarea"
          value={newJokeContent}
          onChange={(e) => setNewJokeContent(e.target.value)}
        />
        <div>
          <button className="button" onClick={onCreate}>
            Add Joke!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Jokes;
