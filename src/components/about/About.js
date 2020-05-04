import React from "react";
import "../../App.css";
import PublicNav from "../nav/PublicNav";

class About extends React.Component {
  render() {
    return (
      <div>
        <PublicNav />
        <div style={{backgroundColor:"white", margin:"4% 20% 0% 20%", padding:"20px", borderRadius:"40px"}}>
          <h3 className="aboutHeader">About this app</h3>
          <p className="textContent"></p>
          <p> Jasmine, Josefin, Julia and Sara</p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
          officia deserunt mollit anim id est laborum.

        </div>
      </div>
    );
  }
}

export default About;
