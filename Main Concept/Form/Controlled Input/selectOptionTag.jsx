import React from "react";

export class SelectOptionTag extends React.Component {
  state = {
    selectOptions: "coconut",
  };

  handleChange = (event) => {
    /*
        "<select name="selectOptions" value={this.state.value} onChange={this.handleChange}></select>'
        this "select" tag "event.target.type" is "select-one"

    */

    // method 01:
    // this.setState({
    //   selectOptions: event.target.value,
    // });

    // method 02:
    this.setState({
        [event.target.name]: event.target.value
    })
  };
  render() {
    console.log(this.state.selectOptions);
    return (
      <>
        <label>
          Pick your favorite flavor: &nbsp;&nbsp;
          <select name="selectOptions" value={this.state.selectOptions} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>

        <p>{`select : ${this.state.selectOptions}`}</p>
        <br />
      </>
    );
  }
}
