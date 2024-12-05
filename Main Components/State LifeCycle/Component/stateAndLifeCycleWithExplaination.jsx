/*
    State: It is used for set value after rendered, it set value inside Class Component
           We can set value multiple time after render. this.state
    Props: It is used fot set value during render, it set value outside Class Component
           We can set value once during render. this.props
           
    componentDidMount(): this is a Life Cycle Method included in React.Component Class,
                         it happens when mount(put rendered element to real DOM) happens
    
    setState({}): it change the value of state and help to re-render, means render() method will call again

    componentWillUnmount(): it is also LifeCycle Method, when unmount(remove rendered element from real dom) happens

    pick(): this is made by me
    this.var: it is made by me
*/

import React from "react";
import PropTypes from "prop-types";

// Class React Component
class ClassComponent extends React.Component {
  // state initiate value for First Time
  // then call render() method
  // Method 01: declaring state without constructor
  // state = { date: new Date() };

  // Method 02: declaring state with constructor
  constructor(props) {
    // super used for inherit from base or parent class properties
    super(props);
    this.state = { date: new Date() };
  }

  // custom method
  pick() {
    // when setState() method call it will re-render and react will re-react
    this.setState({
      date: new Date(),
    });
  }

  componentDidMount() {
    // custom variable
    this.var = setInterval(() => this.pick(), 1000); // this is resource hungry, and take memory when route changes
  }

  // when route change and unmount this.var will off setInterval
  componentWillUnmount() {
    clearInterval(this.var);
  }

  render() {
    return (
      <>
        <div className="column">
          <h1> {this.state.date.toLocaleTimeString(this.props.locale)} </h1>
        </div>
      </>
    );
  }
}

// NOTE:
// Define PropTypes for the class component
// If you don't define locale props here, it will show error in render() method
ClassComponent.propTypes = {
  // Specify that 'locale' is a required string
  locale: PropTypes.string.isRequired,
};

export default ClassComponent;
