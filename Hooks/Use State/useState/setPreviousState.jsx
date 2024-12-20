import React from "react";

export const SetPreviousSate = () => {
  // declaring array variable
  const [count, setCount] = React.useState(0);

  const handleClick = (event) => {
    setCount((previousState) => previousState + 1);
  };

  return (
    <>
      <p>{count}</p>
      <button type="text" onClick={handleClick}>
        Click
      </button>

    {/* or */}

      <button
        type="text"
        onClick={() => setCount((previousState) => previousState + 1)}
      >
        Click1
      </button>
    </>
  );
};
