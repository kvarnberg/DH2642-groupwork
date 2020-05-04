import React from "react";
import firebase from "firebase";
import trashIcon from "./trash.png";
import { ListGroup } from "react-bootstrap";
import "./addjoke.css";

function Jokes() {
  const [jokes, setJokes] = React.useState([]);
  const [newJokeContent, setNewJokeContent] = React.useState("");
  const user = localStorage.user;

  React.useEffect(() => {
    const db = firebase.firestore();
    return db
      .collection("users")
      .doc(user)
      .collection("savedjokes")
      .onSnapshot((snapshot) => {
        const jokesData = [];
        snapshot.forEach((doc) =>
          jokesData.push({ ...doc.data(), id: doc.id })
        );
        setJokes(jokesData);
      });
  }, [user]);

  const onCreate = () => {
    alert("Joke added");
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
