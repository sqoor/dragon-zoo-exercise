import React, { Component } from "react";
import "./Table.css";

export default class Table extends Component {
  data = this.props.info;

  render() {
    return (
      <>
        <tr>
          <th scope="row">{this.data.id}</th>
          <td>{this.data.name}</td>
          <td>{this.data.color}</td>
          <td>{this.data.favFood}</td>
          <td>{this.data.location}</td>
          <td className="w-25 container">
            <form>
              <div className="form-group form-inline row mb-0">
                <input
                  className="form-control col-6"
                  type="text"
                  placeholder="Section"
                />
                <input
                  className="form-control col-6"
                  type="text"
                  placeholder="Room"
                />
              </div>
              <input
                className="btn btn-primary btn-block pl-0"
                type="button"
                value="Update Location" onClick={this.props.changeLocation()}
              />
            </form>
          </td>
        </tr>

        {/* {this.props.changeLocation(this.data.id, 9, 9)} */}
      </>
    );
  }
}
