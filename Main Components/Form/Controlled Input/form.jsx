import React from "react";
import { TextAndTexArea } from "./input_text_textarea.jsx";
import { SelectOptionTag } from "./selectOptionTag.jsx";
import { MultipleCheckbox } from "./multipleCheckbox.jsx";
import { Number } from "./number.jsx";

export class Form extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <>
        <h1>Controlled Input Behaviour</h1>
        <form onSubmit={this.handleSubmit}>
          <TextAndTexArea />
          <SelectOptionTag />
          <MultipleCheckbox />
          <Number />
          <button type="submit">Submit</button>
        </form>
        <br /> <br />
        <h1>Uncontrolled input means DOM Operation . Uncontrolled input means file input</h1>
      </>
    );
  }
}
