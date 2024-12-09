import React from "react";
class ClassInterpolation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Interpolation" };
  }

  render() {
    return (
      <>
        <h1>
          This is {this.props.value} {this.state.value}
        </h1>
      </>
    );
  }
}

export default ClassInterpolation;
