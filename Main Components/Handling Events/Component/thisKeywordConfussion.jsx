import React from "react";

class OnSubmitForThis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: "bn-BD",
      date: new Date(),
    };
  }

  // if you use "Reference Function" in "Handling Event" always use arrow function for better practice
  // and "this keyword"

  // "this keyword"
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      locale: "en-BD",
    });
  };

  componentDidMount() {
    this.clearInterval = setInterval(() => {
      // "this keyword"
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clearInterval);
  }

  render() {
    const { locale } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.date.toLocaleTimeString(locale)}</h1>
        <button type="submit">Submit for time change</button>
      </form>
    );
  }
}

export default OnSubmitForThis;
