import React from "react";

export class Number extends React.Component {
  state = {
    number: 3,
  };

  handleChange = (event) => {
    /*
        "<input type="number"/>" this tag's type is "number"
    */
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <>
        <label>
          Number: &nbsp;&nbsp;
          <input
            type="number"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>

        <p>{`Number Value : ${this.state.number}`}</p>
      </>
    );
  }
}
