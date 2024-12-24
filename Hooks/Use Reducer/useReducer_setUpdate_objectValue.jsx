import React from "react";

export const UseReducerAsObjectValue = () => {
  const initialState = {
    counter1: 0,
    counter2: 0,
  };
  const reducer = (state, action) => {
    if (action.type === "increment1")
      return { ...state, counter1: state.counter1 + 1 };
    else if (action.type === "decrement1")
      return { ...state, counter1: state.counter1 - 1 };
    else if (action.type === "increment2")
      return { ...state, counter2: state.counter2 + 1 };
    else if (action.type === "decrement2")
      return { ...state, counter2: state.counter2 - 1 };
  };

  const [count, dispatch] = React.useReducer(reducer, initialState);

  // dispatch hit the action

  return (
    <>
      <hr />
      <h1>useReducer as Object Value</h1>
      <p>Counter1: {`${count.counter1}`}</p>

      <button
        type="button"
        onClick={(event) => dispatch({ type: "increment1" })}
      >
        increment1
      </button>

      <button
        type="button"
        onClick={(event) => dispatch({ type: "decrement1" })}
      >
        decrement1
      </button>

      <p>Counter2: {`${count.counter2}`}</p>

      <button
        type="button"
        onClick={(event) => dispatch({ type: "increment2" })}
      >
        increment2
      </button>

      <button
        type="button"
        onClick={(event) => dispatch({ type: "decrement2" })}
      >
        decrement2
      </button>
    </>
  );
};
