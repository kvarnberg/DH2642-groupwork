import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import Random from "./components/random/Random";
import Search from "./components/search/Search";
import About from "./components/about/About";
import Register from "./components/Register";
import Login from "./components/login/Login";
import Jokes from "./components/jokes/Jokes";
import firebase from "firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import fire from "./config/Fire";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      email: "",
      password: "",
      name: ""
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged(user => {
      // console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
        console.log("not logged in");
      }
    });
  }

  login = e => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        console.log(u.user.uid);
      })
      .catch(error => {
        alert(error);
      });
  };

  signup = e => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        const db = firebase.firestore();
        db.collection("users")
          .doc(u.user.uid)
          .set({ user: u.user.email, name: this.state.name });
      })
      .catch(error => {
        alert(error);
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="App">
        {!this.state.user ? (
          <Login
            email={this.state.email}
            password={this.state.password}
            name={this.state.name}
            signup={this.signup}
            login={this.login}
            handleChange={this.handleChange}
          />
        ) : (
          <Router>
            <div className="App">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/random" component={Random} />
                <Route path="/search" component={Search} />
                <Route path="/about" component={About} />
                <Route path="/register" component={Register} />
                <Route
                  path="/jokes"
                  render={props => <Jokes {...props} user={this.state.user} />}
                />
                <Route
                  path="*"
                  component={() => "404 NOT FOUND IN THIS APP-UNIVERSE"}
                />
              </Switch>
            </div>
          </Router>
        )}
      </div>
    );
  }
}

/*make a home component in different file*/

/* <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/random" component={Random} />
            <Route path="/search" component={Search} />
            <Route path="/about" component={About} />
            <Route path="/register" component={Register} />
            <Route
              path="*"
              component={() => "404 NOT FOUND IN THIS APP-UNIVERSE"}
            />
          </Switch>
        </div>
      </Router>*/
export default App;
