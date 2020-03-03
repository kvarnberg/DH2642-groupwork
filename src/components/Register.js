import React from "react";
import "../App.css";

const Register = () => (
  <div>
    <h1>Register</h1>
    <h3>
      Info is saved in our database, get in touch if you want to remove your
      user.
    </h3>
    <form>
      <input type="text" id="username" name="username" value="Username"></input>
      <input type="text" id="password" name="password" value="Password"></input>
      <input type="submit" value="Make user"></input>
    </form>
  </div>
);

export default Register;
