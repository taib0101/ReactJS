/*
    suppose there have 10 custom method in class component, every method holds this.setState() for update
    10 sate value and re-render is call batch update, which performance is so good, it may occur deadlock

    SOLUTION: React may batch multiple setState() calls into a single update for performance.
*/

import React from "react";
import PropTypes from "prop-types";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  // when you use event Handle and make as function reference use arrow function for "this keyword"
  // for better understand see "Handling Event directory"
  incrementCounter = () => {
    // batch update 
    this.setState((state, props) => ({
      counter: state.counter + parseInt(props.increment),
    }));
  };

  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}

Counter.propTypes = {
  increment: PropTypes.string.isRequired,
};

export default Counter;