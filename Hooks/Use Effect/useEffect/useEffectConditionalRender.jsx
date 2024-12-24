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
  // The [count] dependency in useEffect triggers the function whenever 'count' changes, such as on a click event or a prop change.
  // it dependes on variable dependices like [count]
  // see also React.memo(), React.useMemo(), React.useCallback()
  // see also Custom Hook

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
