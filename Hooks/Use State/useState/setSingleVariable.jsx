import React from "react";

export const SingleVariable = () => {
  // always use useState inside a function
  // for single variable , which we asiigned thoose in a class of state object
  /*
        in class
        class Demo extends React.Component {
            state = {
                todo: " ",
                warning: " "
            }
        }
    */

  // declaring single variable
  const [todo, setTodo] = React.useState(" ");
  const [warning, setWarning] = React.useState(" ");

  const handleChange = (event) => {
    // set in single variable
    if (event.target.name === "todo") setTodo(event.target.value);
    if (event.target.name === "warning") setWarning(event.target.value);
  };

  return (
    <>
      <p>Todo: {todo}</p>
      <input
        type="text"
        placeholder="write"
        name="todo"
        value={todo}
        onChange={handleChange}
      />

      <p>Warning: {warning}</p>
      <input
        type="text"
        placeholder="write"
        name="warning"
        value={warning}
        onChange={handleChange}
      />
    </>
  );
};
