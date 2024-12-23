import React from "react";

// Task: after loading window , it will focus on text input
// we will use it using useRef() and useEffect. beacuse it is DOM work

// const inputRef = React.useRef(null);
// <input ref={inputRef} />

export const UseRef = () => {
  // process 01
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    console.log("inputRef.current :", inputRef.current);

    // process 03
    inputRef.current.focus(); // inputRef.current works like document.querySelector("something")
  }, []);
  // [] means it works as componentDidMount()

  return (
    <>
      <h1>useRef works for DOM</h1>
      {/* process 02 */}
      <input ref={inputRef} type="text" placeholder="write something" />
    </>
  );
};
