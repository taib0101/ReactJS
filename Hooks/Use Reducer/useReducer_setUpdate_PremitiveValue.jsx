import React from "react";

export const UseReducerAsPremitiveValue = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    if (action === "increment") return state + 1;
    else if (action === "decrement") return state - 1;
    else return state;
  };

  const [count, dispatch] = React.useReducer(reducer, initialState);

  // dispatch hit the action

  return (
    <>
      <h1>useReducer as Premitive Value</h1>
      <p>{`${count}`}</p>

      <button type="button" onClick={(event) => dispatch("increment")}>
        increment
      </button>

      <button type="button" onClick={(event) => dispatch("decrement")}>
        decrement
      </button>
    </>
  );
};
