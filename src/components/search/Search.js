import React from "react";
import "../../App.css";

class Search extends React.Component {
  constructor(props) {
    super();
    this.state = {
      clicked: false
    };
  }

  doThis = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className="Search">
        <button onClick={this.doThis}>Dogs</button>
        <div>{this.state.clicked ? <h1>dogs clicked</h1> : null}</div>
      </div>
    );
  }
}

export default Search;
