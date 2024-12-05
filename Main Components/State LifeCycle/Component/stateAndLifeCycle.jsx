// goto stateAndLifeCycleWithExplaination.jsx for better understand State and LifeCycle

import React from "react";
import PropTypes from "prop-types";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  pick() {
    this.setState({
      date: new Date(), // not for date + 10 , see batch update
    });
  }

  componentDidMount() {
    this.var = setInterval(() => this.pick(), 1000);
  }

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

ClassComponent.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default ClassComponent;
