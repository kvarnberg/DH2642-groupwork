import React from "react";
import "./App.css";
import Random from "./components/random/Random";
import Search from "./components/search/Search";
import Profile from "./components/about/Profile";
import Login from "./components/login/Login";
import JokeMaker from "./components/jokemaker/JokeMaker";
import About from "./components/about/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { db, auth } from "./config/Fire";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }

  login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {})
      .catch((error) => {
        alert(error);
      });
  };

  signup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        db.collection("users")
          .doc(u.user.uid)
          .set({ user: u.user.uid, name: u.user.email });
      })
      .catch((error) => {
        alert(error);
      });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="App">
        {!this.state.user ? (
          <Router>
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => (
                  <Login
                    {...props}
                    email={this.state.email}
                    password={this.state.password}
                    signup={this.signup}
                    login={this.login}
                    handleChange={this.handleChange}
                  />
                )}
              />
              <Route path="/about" component={About} />
            </Switch>
          </Router>
        ) : (
          <Router>
            <Switch>
              <Route path="/" exact component={Random} />
              <Route path="/search" component={Search} />
              <Route path="/profile" component={Profile} />
              <Route path="/jokes" component={JokeMaker} />
              {/* <Route 
                path="*"
                component={() => "404 NOT FOUND IN THIS APP-UNIVERSE"}
              /> */}
            </Switch>
          </Router>
        )}
      </div>
    );
  }
}
export default App;
