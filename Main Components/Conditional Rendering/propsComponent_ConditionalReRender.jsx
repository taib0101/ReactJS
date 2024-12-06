import React from "react";

export const PropsConditionalReRender = ({ bool }) => {
  // using "useState" Hooks
  const [Show, setShow] = React.useState(new Boolean(bool));

  const clickFunction = (event) => {
    event.preventDefault();

    setShow(!Show);
  };

  return (
    <>
      <h1>props Component Conditional re-Render</h1>
      <button onClick={clickFunction}>
        {Show ? "not Show" : "Show"}
      </button>
    </>
  );
};
