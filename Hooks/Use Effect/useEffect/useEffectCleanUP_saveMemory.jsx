import React from "react";

const TimeFunction = () => {
  const [time, setTime] = React.useState(new Date());

  // it works like componentDidMount in class component
  // to better understand got Main Concept/State and LifeCycle/stateAndLifeCycle.jsx
  React.useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // this returned returned works like componentWillUnmount
    return () => {
      console.log("cleanup the time and saved the fucking memmory");
      clearInterval(timeInterval);
    };
  }, []);
  // this [] in useEffect is only once render and hit this useEffect function for once

  return <p>{`${time}`}</p>;
};

export const CleanUP = () => {
  const [count, setCount] = React.useState(true);
  const handleClick = (event) => {
    setCount(!count);
  };

  return (
    <>
      <button onClick={handleClick}>Click</button>
      <div>{count && <TimeFunction />}</div>
    </>
  );
};
