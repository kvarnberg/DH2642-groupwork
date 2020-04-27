import React from "react";
import "../../App.css";
import Nav from "../nav/Nav";
import "./profile.css";
import { db } from "../../config/Fire";
import { ListGroup } from "react-bootstrap";
import trash from "./bin.png";
import "./profile.css";

const JokeInput = ({ joke }) => {
  const content = joke.content;
  const user = localStorage.user;

  const onDelete = () => {
    db.collection("users")
      .doc(user)
      .collection("savedjokes")
      .doc(joke.id)
      .delete();
  };

  return (
    <ListGroup.Item action hover="true">
      {content}
      <img
        className="trashButton"
        alt="delete button"
        style={{ height: "15px" }}
        src={trash}
        onClick={onDelete}
      />
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
        console.log("nope");
      }
    });

  React.useEffect(() => {
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

  return (
    <div>
      <Nav />
      <div className="user">
        Name : {user} <br />
        Email : {localStorage.email}
        <br />
        My saved jokes
        <br></br>
      </div>
      <div className="jokes">
        {jokes.map((joke) => (
          <div key={joke.id}>
            <JokeInput joke={joke} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
