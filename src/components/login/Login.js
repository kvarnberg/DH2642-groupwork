import React from "react";
import PublicNav from "../nav/PublicNav";


class Login extends React.Component {


  render() {
    return (
      <div>
        <PublicNav />
        <div style={{ margin: "70px" }}>
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
            <button type="submit" onClick={this.props.login} style={{ marginTop: '2%', borderRadius: '10px', padding: '5px 20px 5px 20px',backgroundColor: ' rgb(240, 203, 84)', borderStyle: 'none' }}>
              Login
          </button>
            <br></br>
            <button onClick={this.props.signup} style={{ marginTop: '1%', borderRadius: '10px', padding: '5px 20px 5px 20px', backgroundColor: ' rgb(240, 203, 84)', borderStyle: 'none' }}>
              Signup
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
