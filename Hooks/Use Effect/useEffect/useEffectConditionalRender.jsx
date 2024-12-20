import React from "react";

export const ConditionalRender = () => {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("");

  const handleClick = (event) => {
    setCount((previousState) => previousState + 1);
  };

  React.useEffect(() => {
    console.log("conditional render");
    document.title = count;
  }, [count]);
  // this [count] in useEffect is conditioned when click event occur and hit this useEffect function

  return (
    <>
      <button onClick={handleClick}>Click</button>
      <p>{count}</p>

      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <p>{text}</p>
    </>
  );
};
