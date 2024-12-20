import React from "react";

export const ObjectVariable = () => {
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

  // declaring object variable
  const [object, setObject] = React.useState({
    todo: " ",
    warning: " "
  });

  const handleChange = (event) => {
    // set in object variable
    if (event.target.name === "todo")  setObject({
        ...object,// new technique when you set value in Hooks of react
        todo: event.target.value
    });
    if (event.target.name === "warning") setObject({
        ...object,// new technique when you set value in Hooks of react
        warning: event.target.value
    });
  };

  return (
    <>
      <p>Todo: {object.todo}</p>
      <input
        type="text"
        placeholder="write"
        name="todo"
        value={object.todo}
        onChange={handleChange}
      />

      <p>Warning: {object.warning}</p>
      <input
        type="text"
        placeholder="write"
        name="warning"
        value={object.warning}
        onChange={handleChange}
      />
    </>
  );
};
