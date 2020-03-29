import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div>
        <form id="signForm">
          <input
            value={this.props.email}
            onChange={this.props.handleChange}
            type="email"
            name="email"
            placeholder="enter email"
          ></input>
          <br></br>
          <input
            value={this.props.password}
            onChange={this.props.handleChange}
            type="password"
            name="password"
            placeholder="enter password"
          ></input>
          <br></br>
          <button type="submit" onClick={this.props.login}>
            Login
          </button>
          <br></br>
          <button onClick={this.props.signup}>Signup</button>
        </form>
      </div>
    );
  }
}

export default Login;
