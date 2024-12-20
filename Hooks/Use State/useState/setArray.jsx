import React from "react";

export const ArrayVariable = () => {
  // declaring array variable
  const [array, setObject] = React.useState([" ", " "]);

  const handleChange = (event) => {
    // set in array variable
    if (event.target.name === "todo")  setObject([
        event.target.value,
        array[1]// new technique when you set value in Hooks of react
    ]);
    if (event.target.name === "warning") setObject([
        array[0],// new technique when you set value in Hooks of react
        event.target.value

    ]);
  };

  return (
    <>
      <p>Todo: {array[0]}</p>
      <input
        type="text"
        placeholder="write"
        name="todo"
        value={array[0]}
        onChange={handleChange}
      />

      <p>Warning: {array[1]}</p>
      <input
        type="text"
        placeholder="write"
        name="warning"
        value={array[1]}
        onChange={handleChange}
      />
    </>
  );
};
