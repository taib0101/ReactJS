import React from "react";

// it take React.forwardRef((props, reference) => {})
const ForwardRefInput = React.forwardRef((props, inputRef) => {
  return (
    <>
      {/* process 05. taking reference from parent . this is child */}
      <input ref={inputRef} type={props.type} placeholder={props.placeholder} />
    </>
  );
});

export const ForwardRef = () => {
  // process 01
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    console.log("inputRef.current :", inputRef.current);

    // process 03
    inputRef.current.focus(); // inputRef.current works like document.querySelector("something").focus()
  }, []);
  // [] means it works as componentDidMount()

  return (
    <>
      <h1>forwardRef refers send reference from parent to child</h1>
      {/* process 02 and process 04 */}
      {/* sending refernce from parent */}
      <ForwardRefInput
        ref={inputRef}
        type="text"
        placeholder="write something"
      />
    </>
  );
};
