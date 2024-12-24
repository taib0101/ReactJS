import React from "react";

export const UseReducerMultipleTimes = () => {
  const initialState = 0;
  const initialState2 = 5;

  const reducer = (state, action) => {
    if (action === "increment") return state + 1;
    else if (action === "decrement") return state - 1;
    else return state;
  };

  const [count, dispatch] = React.useReducer(reducer, initialState);
  const [count2, dispatch2] = React.useReducer(reducer, initialState2);

  // dispatch hit the action

  return (
    <>
      <h1>useReducer multiple time</h1>
      <p>{`${count}`}</p>

      <button type="button" onClick={(event) => dispatch("increment")}>
        increment1
      </button>

      <button type="button" onClick={(event) => dispatch("decrement")}>
        decrement1
      </button>

      <p>{`${count2}`}</p>

      <button type="button" onClick={(event) => dispatch2("increment")}>
        increment2
      </button>

      <button type="button" onClick={(event) => dispatch2("decrement")}>
        decrement2
      </button>
    </>
  );
};
