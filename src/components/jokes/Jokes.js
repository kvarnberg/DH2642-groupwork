import React from "react";
import Nav from "../nav/Nav";
import { ListGroup } from "react-bootstrap";
import { db } from "../../config/Fire";
import "./User.css";

const JokeInput = ({ joke }) => {
  const content = joke.content;
  const user = localStorage.user;

  const onDelete = () => {
    db.collection("users")
      .doc(user)
      .collection("savedjokes")
      .doc(joke.id)
      .delete()
      .then(() => {
        alert("Joke has been deleted");
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <ListGroup.Item>
      {content}
      <img
        alt="delete button"
        src="https://img.icons8.com/carbon-copy/30/000000/filled-trash.png"
        onClick={onDelete}
      />
    </ListGroup.Item>
  );
};

function Jokes() {
  const [jokes, setJokes] = React.useState([]);
  const [newJokeContent, setNewJokeContent] = React.useState("");
  const user = localStorage.user;

  React.useEffect(() => {
    return db
      .collection("users")
      .doc(user)
      .collection("savedjokes")
      .onSnapshot(snapshot => {
        const jokesData = [];
        snapshot.forEach(doc => jokesData.push({ ...doc.data(), id: doc.id }));
        setJokes(jokesData);
      });
  }, [user]);

  const onCreate = () => {
    db.collection("users")
      .doc(user)
      .collection("savedjokes")
      .add({ content: newJokeContent })
      .then(() => {
        alert("Joke has been added");
        window.location = "/";
      })
      .catch(error => {
        alert(error.message);
      });
  };

  const myStyle = {
    flexDirection: "column"
  };

  return (
    <div>
      <Nav />
      <input
        value={newJokeContent}
        onChange={e => setNewJokeContent(e.target.value)}
      />
      <button onClick={onCreate}>Add</button>
      <ul>
        {jokes.map(joke => (
          <li style={myStyle} key={joke.id}>
            <JokeInput joke={joke} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Jokes;

// merge this code

/* import React from "react";
import "./User.css";
import trashIcon from "./bin.png"

class User extends React.Component {
  constructor() {
    super();
    // get data from firebase
    this.state = {
      rows: ['row 1', 'row 2', 'row 3'],
    };
  }

  deleteRow = (index) => {
    // make new rows. note: react state is immutable.
    const newRows = this.state.rows.slice(0, index).concat(this.state.rows.slice(index + 1));
    this.setState({
      rows: newRows,
    });
  };

  render() {
    const rows = this.state.rows.map((row, index) => (
      <tr key={row}>
        <td class="row">{row}</td>
        <td><img style={{height:"18px"}}src={trashIcon} onClick={() => { this.deleteRow(index);}}/></td>
      </tr>
    ));
    return (
      <div>
        <div class="user">
          <h2>username's saved jokes</h2>
        </div>
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}*/
