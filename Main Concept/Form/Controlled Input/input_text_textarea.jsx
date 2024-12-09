import React from "react";

export class TextAndTexArea extends React.Component {
  state = { title: "", textarea: "Please write something" };

  handleChange = (event) => {
    /*
        for '<input type="text" />' , event.target.type is "text" .
        for '<textarea />' , event.target.type is "textarea" .
    */
    // method 01:
    // event.target.type === "text"
    //   ? this.setState({ title: event.target.value })
    //   : this.setState({ textarea: event.target.value });

    // method 02: this method is done by event.target.name
    // and it is more easy code then method 01. Apply this code
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <>
        {/* text */}
        <label>
          Name: &nbsp; &nbsp;
          <input
            type="text"
            name="title"
            placeholder="First Name"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>
        <p> {`text : ${this.state.title}`}</p>


        {/* text area */}
        <label>
          Text Area : &nbsp; &nbsp;
          <textarea
            name="textarea"
            value={this.state.textarea}
            onChange={this.handleChange}
          />
        </label>
        <p> {`textarea : ${this.state.textarea}`}</p>

        <br />
      </>
    );
  }
}
