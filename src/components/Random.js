import React from "react";
import loading from "../loading.svg";
import "../App.css";

function Random() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={loading} className="App-loading" alt="loading" />
        <button className="btn" onClick={refreshPage}>
          Get random joke
        </button>
        <h1>show random joke here via FetchRandom</h1>
      </header>
    </div>
  );
}

/*class FetchRandom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      setup: "",
      punchline: "",
      onClick: false
    };
    this.displayPunch = this.displayPunch.bind(this);
  }

  async componentDidMount() {
    const url =
      "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      loading: false,
      setup: data.setup,
      punchline: data.punchline
    });
    console.log(data);
  }

  displayPunch() {
    this.setState({
      onClick: !this.state.onClick
    });
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div>loading...</div>
        ) : (
          <div>
            <div>{this.state.setup}</div>
            <button className="smolbtn" onClick={this.displayPunch}>
              {this.state.onClick ? "Hide answer" : "Show answer"}
            </button>
            {this.state.onClick ? <div>{this.state.punchline}</div> : <></>}
          </div>
        )}
      </div>
    );
  }
}*/

function refreshPage() {
  window.location.reload();
}

export default Random;
