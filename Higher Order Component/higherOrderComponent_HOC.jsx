import React from "react";

// process 02
export const HOC = (OriginalComponent) => {
  class NewComponent extends React.Component {
    state = { count: 0 };

    handleChange = () => {
      this.setState((previousState) => ({
        count: previousState.count + 1,
      }));
    };

    render() {
      return (
        <>
          {/* process 03 */}
          <OriginalComponent
            count={this.state.count}
            handleChange={this.handleChange}
          />
        </>
      );
    }
  }

  return NewComponent;
};

// process 01
// process 04
const ClickCounter = (props) => {
  return (
    <div>
      <button onClick={props.handleChange}>{props.count}</button>
    </div>
  );
};

export const NewClickCounter = HOC(ClickCounter);

const HoverCounter = (props) => {
    return (
        <>
            <p onMouseOver={props.handleChange}>{`Hovered ${props.count}`}</p>
        </>
    );
}

export const NewHoverCounter = HOC(HoverCounter);