import React from "react";
import "../../App.css";
import Nav from "../nav/Nav";
import "./profile.css";
import { db } from "../../config/Fire";
import { ListGroup } from "react-bootstrap";
import trash from "./bin.png";
import editIcon from "./edit.png";
import firebase from "firebase";

const JokeInput = ({ joke }) => {
  const content = joke.content;
  const user = localStorage.user;
  const [jokeView, setJokeView] = React.useState(true);
  const [newJokeContent, setNewJokeContent] = React.useState("");

  const onDelete = () => {
    var alert = window.confirm("Are you sure you want to delete?");
    if (alert) {
      db.collection("users")
        .doc(user)
        .collection("savedjokes")
        .doc(joke.id)
        .delete();
    }
  };
  // göra nytt joke och ta bort den gamla
  const updateJoke = () => {
    db.collection("users")
      .doc(user)
      .collection("savedjokes")
      .add({
        content: newJokeContent + " ",
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

    db.collection("users")
      .doc(user)
      .collection("savedjokes")
      .doc(joke.id)
      .delete();
  };

  return (
    <ListGroup.Item action hover="true">
      {content}
      <div className="Allt">
        {jokeView && (
          <div style={{ float: "right" }}>
            <img
              className="alternativeButton"
              alt="delete button"
              style={{ height: "20px" }}
              src={trash}
              onClick={onDelete}
            />
            <img
              style={{ height: "20px" }}
              className="alernativeButton"
              alt="edit button"
              src={editIcon}
              onClick={() => {
                setJokeView((jokeView) => !jokeView);
                console.log(jokeView);
              }}
            />
          </div>
        )}

        {!jokeView && (
          <div className="editView">
            <input
              type="text"
              defaultValue={content}
              className="input"
              onChange={(e) => setNewJokeContent(e.target.value)}
            ></input>
            <div style={{ float: "right" }}>
              <button
                onClick={() => {
                  updateJoke();
                }}
              >
                {" "}
                Save
              </button>

              <button
                onClick={() => {
                  setJokeView((jokeView) => !jokeView);
                }}
              >
                {" "}
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </ListGroup.Item>
  );
};

function Profile() {
  const [jokes, setJokes] = React.useState([]);
  const user = localStorage.user;

  // hämta namn och email
  db.collection("users")
    .doc(user)
    .get()
    .then(function (doc) {
      if (doc.exists) {
        localStorage.setItem("email", doc.data().name);
      } else {
        console.log("ignore");
      }
    });

  //console.log(email.data)

  React.useEffect(() => {
    return db
      .collection("users")
      .doc(user)
      .collection("savedjokes")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const jokesData = [];
        snapshot.forEach((doc) =>
          jokesData.push({ ...doc.data(), id: doc.id })
        );
        setJokes(jokesData);
      });
  }, [user]);

  return (
    <div>
      <Nav />
      <div className="savedJokes">
        <div className="savedHeader">SAVED JOKES</div>
        <br />
        <div>My email : {localStorage.email}</div>

        <div className="jokes">
          {jokes.map((joke) => (
            <div key={joke.id}>
              <JokeInput joke={joke} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
