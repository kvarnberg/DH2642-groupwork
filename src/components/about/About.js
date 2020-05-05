import React from "react";
import "../../App.css";
import PublicNav from "../nav/PublicNav";

class About extends React.Component {
  render() {
    return (
      <div>
        <PublicNav />
        <div
          style={{
            backgroundColor: "white",
            margin: "4% 20% 0% 20%",
            padding: "20px",
            borderRadius: "40px",
          }}
        >
          <h3 className="aboutHeader">About this app</h3>
          <p className="textContent"></p>
          <p> Jasmine, Josephine, Julia and Sara</p>
          This is a project built in the course DH2642 by Jasmine Mohamed,
          Josephine Kvarnberg, Julia Huang and Sara Nazeriha. This project is a
          joke app. In order to use the app the user needs to log in. If they
          don’t have an account they can create a new one. When logged in, the
          user can access all functionalities that the joke app offers. In this
          app the user can search for jokes in the API, get random jokes from
          the API and make their own jokes. It is also possible to save jokes
          and then view, edit or delete them in the user profile.
        </div>
      </div>
    );
  }
}

export default About;
