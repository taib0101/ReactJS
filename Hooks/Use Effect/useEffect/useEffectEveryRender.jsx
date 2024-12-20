import React from "react";

export const EveryEffect = () => {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("");

  const handleClick = (event) => {
    setCount((previousState) => previousState + 1);
  };

  // it hit every time 
  // it works like componentDidUpdate in class component
  React.useEffect(() => {
    console.log("render hit the useEffect for every time when it change the events or inputs");
    // change document title of Tab in browser. it is accepted for all DOM properties
    document.title = count;
  })

  return (
    <>
      <button onClick={handleClick}>Click</button>
      <p>{count}</p>

      <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
      <p>{text}</p>
    </>
  );
};
