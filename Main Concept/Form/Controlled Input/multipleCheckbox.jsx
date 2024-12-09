import React from "react";

export class MultipleCheckbox extends React.Component {
  array = [];
  state = {
    checkboxFruit: false,
    checkboxFlower: false,
  };

  handleChange = (event) => {

    /*
        "<input type="checkbox"/>" this tag's type is "checkbox"
        and "event.target.checked" for assigning boolean value
    */

    this.setState({
      [event.target.name]: event.target.checked,
    });

    event.target.checked
      ? this.array.push(event.target.name)
      : this.array = this.array.filter((item) => item !== event.target.name);
  };

  render() {
    const Arrayy = this.array;
    return (
      <>
        <label>
          Fruit: &nbsp;&nbsp;
          <input
            type="checkbox"
            name="checkboxFruit"
            value={this.state.checkboxFruit}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Fruit: &nbsp;&nbsp;
          <input
            type="checkbox"
            name="checkboxFlower"
            value={this.state.checkboxFlower}
            onChange={this.handleChange}
          />
        </label>

        <p>{`checbox: ${Arrayy}`}</p>
        <br /> 
      </>
    );
  }
}
