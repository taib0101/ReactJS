import ReactDOM from "react-dom/client";
import React from "react";
import StateFullConditionalReRender from "./stateFullComponent_ConditionalReRender.jsx";
import { PropsConditionalReRender } from "./propsComponent_ConditionalReRender.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

// Functional React Component
const FunctionalComponent1 = () => {
  // goto Hooks/useState directory to see more details, use "useState" in a function
  // it helps for conditional render also
  const [showComponent, setShowComponent] = React.useState(true);

  const clickFunction = () => {
    setShowComponent(!showComponent);
  };

  return (
    <>
      <h1>State full Component Conditional re-Render</h1>
      {/* conditional rendering */}
      {showComponent && <StateFullConditionalReRender />}

      {/* it helps for conditional render */}
      <button onClick={clickFunction}>
        {showComponent ? "Hide it" : "Show it"}
      </button>

      <PropsConditionalReRender bool="true"/>
    </>
  );
};

root.render(<FunctionalComponent1 />);
