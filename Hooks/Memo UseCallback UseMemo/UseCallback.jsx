import React from "react";

const Tittle = () => {
  console.log("Rendering useCallback");
  return (
    <>
      <h1>{`React.useCallbac(() => {}, []) . Speacially for Event handler`}</h1>
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

export const UseCallback = () => {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  // HINTS: when you can't prevent unNecesary re-render for "event handler" by using Raect.memo()
  // use React.useCallback()

  // method 01:
  // const HandleClick = React.useCallback((event) => {
  //   if (event.target.name === "button1")
  //     setCount1((prevState) => prevState + 1);
  //   if (event.target.name === "button2")
  //     setCount2((prevState) => prevState + 1);
  // }, []);
  // The HandleClick function is remember and will not be
  // re-created on every render because its dependency array ([]) is empty.

  // method 02:
  const HandleClick1 = React.useCallback((event) => {
      setCount1(count1 + 1);
    }, [count1]);

  const HandleClick2 = React.useCallback((event) => {
      setCount2(count2 + 1);
    }, [count2]);
  // The HandleClick1 and HandleClick2 function is remembered and will only be
  // re-created if count1 and count2 respectively changes, 
  // as it is included in the dependency array [count1].

  return (
    <>
      {console.log("\n\n")}
      <Tittle />

      <ShowCount counter={count1} position="one" />
      <Button name="button1" handleClick={HandleClick1}>
        button1
      </Button>

      <hr />

      <ShowCount counter={count2} position="two" />
      <Button name="button2" handleClick={HandleClick2}>
        button2
      </Button>
    </>
  );
};
