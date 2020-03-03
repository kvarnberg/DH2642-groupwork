import React from "react";
import fire from "../config/Fire";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  login = e => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  };

  signup = e => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        console.log(error);
      });
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <input
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
            name="email"
            placeholder="enter email"
          ></input>
          <input
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            name="password"
            placeholder="enter password"
          ></input>
          <button type="submit" onClick={this.login}>
            Login
          </button>
          <button onClick={this.signup}>Signup</button>
        </form>
      </div>
    );
  }
}

export default Login;
