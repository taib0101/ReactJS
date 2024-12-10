import React from "react";

export const RenderProps1 = (props) => {
  return props.name();
};

export const RenderProps2 = (props) => {
  return props.name("taib");
};

// process 02
export class RenderPropsCounter extends React.Component {
  state = { count: 0 };

  handleChange = () => {
    this.setState((previousState) => ({
      count: previousState.count + 1,
    }));
  };

  render() {
    // process 03 and goto main.jsx to see process 05
    return this.props.Render(this.state.count, this.handleChange);
  }
}

// process 06
export const ClickCounter = ({ count, handleChange }) => {
  return (
    <>
      <button onClick={handleChange}>{`${count}`}</button>
    </>
  );
};

export const HoverCounter = (props) => {
  return (
    <>
      <h1 onMouseOver={props.handleChange}> {`Hovered ${props.count}`} </h1>
    </>
  );
};
