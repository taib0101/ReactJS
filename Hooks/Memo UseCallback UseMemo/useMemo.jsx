import React from "react";

const Tittle = () => {
  console.log("Rendering useCallback");
  return (
    <>
      <h1>{`React.useMemo(() => {}, []) . Speacially for Custom Function`}</h1>
    </>
  );
};

// ShowCount component will only re-render if their props change.
const ShowCount = React.memo((props) => {
  console.log(`Rendering counter ${props.position} ${props.counter}`);
  return (
    <>
      <p>{`Rendering counter ${props.position} ${props.counter}`}</p>
    </>
  );
});

const Button = React.memo((props) => {
  console.log(`Rendering ${props.children}`);
  return (
    <>
      <button name={props.name} onClick={props.handleClick}>
        {props.children}
      </button>
    </>
  );
});

export const UseMemo = () => {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  const HandleClick = React.useCallback((event) => {
    if (event.target.name === "button1")
      setCount1((prevState) => prevState + 1);
    if (event.target.name === "button2")
      setCount2((prevState) => prevState + 1);
  }, []);

  const isEvenOdd = React.useMemo(() => {
    let i = 0;
    while (i < 1000000000) i += 2; // costly operation

    return !parseInt(count1 % 2);
  }, [count1]);
  // it remember "Function return value" depend on [count1] 
  // and it will not effect for count2 which is in button2
  // beacuse said the dependencies

  return (
    <>
      {console.log("\n\n")}
      <Tittle />
      <ShowCount counter={count1} position="one" />
      <div>{isEvenOdd ? "Even" : "Odd"}</div>
      <Button name="button1" handleClick={HandleClick}>
        button1
      </Button>

      <hr />

      <ShowCount counter={count2} position="two" />
      <Button name="button2" handleClick={HandleClick}>
        button2
      </Button>
    </>
  );
};
