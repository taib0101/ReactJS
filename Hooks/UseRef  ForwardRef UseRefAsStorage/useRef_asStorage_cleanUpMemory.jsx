import React from "react";

export const UseRefAsStorage = () => {
  const buttonRef = React.useRef();

  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // useRef as Storage
    buttonRef.current = interval;

    console.log("buttonRef.current :", buttonRef.current);

    // see more details, go to "Hooks/Use Effect/useEffect/useEffectCleanUP_saveMemory.jsx"
    return () => {
      clearInterval(buttonRef.current);
    };
  }, []);

  return (
    <>
      <h1>useRef as storage</h1>
      <p>{`${time}`}</p>
      <button
        type="button"
        onClick={(event) => clearInterval(buttonRef.current)}
      >
        cleanUp
      </button>
    </>
  );
};
