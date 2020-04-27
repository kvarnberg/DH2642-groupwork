//IMPORT
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useRef } from "react";
import { Form, ListGroup } from "react-bootstrap";
import Nav from "../nav/Nav";
import { db } from "../../config/Fire";

//EXPORT
export default function Search() {
  //STATE
  const [jokes, setJokes] = useState([]);
  const [query, setQuery] = useState("");
  const user = localStorage.user;

  //REF STORES A REFERENCE TO A DOM NODE
  const FocusOnSearch = useRef(null);
  //ACCESS TO A CHILD'D DOM NODE FROM A PARENT COMPONENT
  useEffect(() => {
    FocusOnSearch.current.focus();
  }, []);

  //GETTING THE API
  const getJokes = async query => {
    var url = `https://icanhazdadjoke.com/search?term=${query}`;
    const results = await fetch(url, {
      headers: { accept: "application/json" }
    });
    const jokes = await results.json();
    return jokes.results;
  };

  //EFFECT PERFORMS SIDE EFFECTS IN FUNCTION COMPONENTS
  useEffect(() => {
    let currentQuery = true;

    //---
    const loadJokes = async () => {
      //IF QUERY != NONE RETURN THE EXISTING JOKES WITH THAT WORD
      if (!query) return setJokes([]);
      //ALWAYS FIND A JOKE WITH THE WORD THAT THE USER HAS ENTERED
      if (currentQuery) {
        const jokes = await getJokes(query);
        setJokes(jokes);
      }
    };
    //---

    //RUN ABOVE
    loadJokes();

    //ENTER AN INPUT FOR THE QUERY
  }, [query]);

  //SHOW LIST OF JOKES(EVERY JOKE IN A BOX) WHEN ENTERING A WORD
  let jokeComponents = jokes.map(AllResultsFromTheApi => {
    return (
      <ListGroup.Item>
        {AllResultsFromTheApi.joke}
        <button onClick={() => onAdd(AllResultsFromTheApi)}>Save</button>
      </ListGroup.Item>
    );
  });

  const onAdd = joke => {
    db.collection("users")
      .doc(user)
      .collection("savedjokes")
      .add({ content: joke.joke, apiId: joke.id })
      .then(() => {
        alert("Joke has been added");
      })
      .catch(error => {
        alert(error.message);
      });
  };

  //STYLING THE RESULT
  const mystyle = {
    color: "black",
    backgroundColor: "white",
    padding: "10px",
    fontFamily: "Times"
  };

  //SHOW THE RESULT
  return (
    <div>
      <Nav />
      <div className="search">
        <h4 style={mystyle}>Search For A Joke</h4>
        <Form.Control
          style={mystyle}
          placeholder="Search for a Joke..."
          ref={FocusOnSearch}
          onChange={e => setQuery(e.target.value)}
          value={query}
        />
        <div style={mystyle}>{jokeComponents}</div>
      </div>

    </div>
  );
}
