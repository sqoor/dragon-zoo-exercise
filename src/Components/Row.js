import React, { Component } from "react";
import "./Table.css";

export default class Row extends Component {
  state = {
    section: undefined,
    room: undefined
  };

  data = this.props.info;

  updateRoomValue = e => {
    this.setState({ room: e.target.value });
  };

  updateSectionValue = e => {
    this.setState({ section: e.target.value });
  };

  changeLocation = () => {
    var id = this.props.info.id
    var section = this.state.section
    var room = this.state.room;
    
    if(section && room) 
      this.props.changeLocation(id, section, room);
  };

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
                  value={this.setState.section}
                  onChange={this.updateSectionValue}
                />
                <input
                  className="form-control col-6"
                  type="text"
                  placeholder="Room"
                  value={this.setState.room}
                  onChange={this.updateRoomValue}
                />
              </div>
              <input
                className="btn btn-primary btn-block pl-0"
                type="button"
                value="Update Location"
                onClick={this.changeLocation}
              />
            </form>
          </td>
        </tr>
      </>
    );
  }
}
