import React, { Component } from "react";
import Particles from "react-particles-js";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import Rank from "./components/rank/Rank";
import ImageForm from "./components/imageform/ImageForm";
import "./App.css";

const particleOption = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  onInput = (event) => {
    console.log(event.target.value);
  };
  onSubmit = (event) => {
    console.log("click");
  };

  render() {
    return (
      <div className="App tc">
        <Particles className="particles" params={particleOption} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageForm onInput={this.onInput} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default App;
