import React from "react";

class OnSubmit extends React.Component {
  // if you use "Reference Function" in "Handling Event" always use arrow function for better practice
  // and "this keyword"
  handleSubmit = (event) => {
    // Prevent Default of event
    event.preventDefault();
    console.log("what's up bro");
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default OnSubmit;
