import React, { Component } from "react";
import "./Table.css";

export default class Row extends Component {
  state = {
    section: undefined,
    room: undefined,
    sectionInput: undefined,
    roomInput: undefined
  };

  data = this.props.info;

  updateRoomValue = e => {
    this.setState({ room: e.target.value });
  };

  updateSectionValue = e => {
    this.setState({ section: e.target.value });
  };

  restState = () => {
    this.setState({ room: undefined, section: undefined });
    this.sectionInput.value = "";
    this.roomInput.value = "";
  };

  addError(field) {
      field.classList.add("is-invalid");

      setTimeout(() => {
        field.classList.remove("is-invalid")
      }, 4000);
  }

  removeError(field) {
    field.classList.remove("is-invalid")
  }

  isValid(field) {
    if (field.value > 0) {
      this.removeError(field);
      return true;
    }

    this.addError(field);
    return false;
  }

  changeLocation = () => {
    var id = this.props.info.id;
    var section = Math.trunc(this.state.section * 1);
    var room = Math.trunc(this.state.room * 1);

    if (this.isValid(this.sectionInput) & this.isValid(this.roomInput))
      this.props.changeLocation(id, section, room);

    this.restState();
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
                  ref={elem => (this.sectionInput = elem)}
                  value={this.setState.section}
                  onChange={this.updateSectionValue}
                />
                <input
                  className="form-control col-6"
                  type="text"
                  placeholder="Room"
                  ref={elem => (this.roomInput = elem)}
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
