import React from "react";
import "./App.css";
import Home from "./components/Home";
import Random from "./components/Random";
import Search from "./components/Search";
import About from "./components/About";
import Nav from "./components/Nav";
import Register from "./components/Register";
import fire from "./config/Fire";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      // console.log(user);
      if (user) {
        this.setState({ user });
        // localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        // localStorage.removeItem("user");
      }
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? (
          <Router>
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
          </Router>
        ) : (
          <Login />
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
