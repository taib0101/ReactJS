import React from "react";

class StateFullConditionalReRender extends React.Component {
  // Initial state.bool for helping render component
  state = { bool: false };

  change = (event) => {
    event.preventDefault();

    // It helps for conditioned re-render
    (this.state.bool)
      ? this.setState({ bool: false })
      : this.setState({ bool: true });
  };

  render() {
    const { bool } = this.state;
    return (
      <>
        {/* conditional rendering */}
        {/* Method 01 */}
        {bool ? <h1>Yes StateFull</h1> : <h1>No</h1>}

        {/* Method 02 */}
        {/* {bool && <h1>Yes</h1>} */}
        <button onClick={this.change}>Click</button>
      </>
    );
  }
}

export default StateFullConditionalReRender;
