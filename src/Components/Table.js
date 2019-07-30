import React, { Component } from "react";
import Row from "./Row";
import "./Table.css";

export default class Table extends Component {
  state = {
    tableData: [
      {
        id: 1,
        name: "jo",
        color: "red",
        favFood: "potato",
        location: "S:2-R:2"
      },
      {
        id: 2,
        name: "x",
        color: "white",
        favFood: "pizza",
        location: "S:3-R:4"
      },
      {
        id: 3,
        name: "zee",
        color: "blue",
        favFood: "fried chicken",
        location: "S:5-R:6"
      },
      {
        id: 4,
        name: "tre",
        color: "green",
        favFood: "nice",
        location: "S:1-R:4"
      }
    ]
  };

  render() {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Color</th>
              <th scope="col">Fav Food</th>
              <th scope="col">Location</th>
              <th scope="col">Update location</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tableData.map(element => 
                (<Row key={element.id} info={element}/>)
            )}

            {/* <Row key={this.state.id} info={this.state.tableData} /> */}
          </tbody>
        </table>
      </>
    );
  }
}
