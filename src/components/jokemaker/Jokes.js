import React from "react";
import firebase from "firebase";
import trashIcon from "./trash.png";
import { ListGroup } from "react-bootstrap";
import "./addjoke.css";

const JokeInput = ({ joke }) => {
  const content = joke.content;
  const user = localStorage.user;

  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("users")
      .doc(user)
      .collection("savedjokes")
      .doc(joke.id)
      .delete();
  };

  return (
    <table>
      <tr>
        <td>
          {content + "    "}
          <img
            style={{ height: "18px" }}
            src={trashIcon}
            alt="delete button"
            // src="https://img.icons8.com/carbon-copy/30/000000/filled-trash.png"
            onClick={onDelete}
          />
        </td>
      </tr>
    </table>
  );
};

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
    const db = firebase.firestore();
    db.collection("users")
      .doc(user)
      .collection("savedjokes")
      .add({ content: newJokeContent + " " });
  };

  const myStyle = {
    flexDirection: "column",
  };

  return (
    <div className="content-container">
      <div className="form">
        <h3 className="header">Add a joke</h3>

        <input
          type="text"
          placeholder="   Enter your name"
          autoFocus
          className="text-input"
        />

        <input
          type="text"
          placeholder="   Category of joke"
          className="text-input"
        />

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

      <h3 className="header">Your added jokes</h3>
      <table>
        {jokes.map((joke) => (
          <tbody style={myStyle} key={joke.id}>
            <JokeInput joke={joke} />
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default Jokes;
