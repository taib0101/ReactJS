import React from "react";

export const OnlyOnce = () => {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("");

  const handleClick = (event) => {
    setCount((previousState) => previousState + 1);
  };

  // it works like componentDidMount in class component
  React.useEffect(() => {
    console.log("Only Once render");
  }, []);
  // this [] in useEffect is only once render and hit this useEffect function for once

  return (
    <>
      <button onClick={handleClick}>Click</button>
      <p>{count}</p>
    </>
  );
};
