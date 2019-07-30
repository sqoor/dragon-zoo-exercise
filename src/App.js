import React, { Component } from "react";
import Table from "./Components/Table";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <h1 className="text-center mb-4">Dragons Zoo</h1>
        <Table />
      </>
    );
  }
}

export default App;
