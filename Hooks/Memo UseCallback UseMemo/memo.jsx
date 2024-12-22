import React from "react";

const Tittle = React.memo(() => {
  console.log("Rendering Memo");
  return (
    <>
      <h1>{`React.memo(() => {}). prevent component reRendering, when props changed`}</h1>
    </>
  );
});

// ShowCount component will only re-render if their props change.
const ShowCount = React.memo((props) => {
  console.log(`Rendering counter ${props.position} ${props.counter}`);
  return (
    <>
      <p>{`Rendering counter ${props.position} ${props.counter}`}</p>
    </>
  );
});

// Button component will only re-render if their props change.
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

export const Memo = () => {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  const HandleClick = (event) => {
    if (event.target.name === "button1")
      setCount1((prevState) => prevState + 1);
    if (event.target.name === "button2")
      setCount2((prevState) => prevState + 1);
  };

  return (
    <>
      {console.log("\n\n")}
      <Tittle />
      {/* ShowCount component will only re-render if their props change. */}

      <ShowCount counter={count1} position="one" />
      {/* this is also acceptable for changing:  <ShowCount>Memo's Count Method01 : {count1}</ShowCount>*/}
      
      {/* Button component will only re-render if their props change. */}
      <Button name="button1" handleClick={HandleClick}>
        button1
      </Button>

      <hr />

      {/* ShowCount component will only re-render if their props change. */}
      <ShowCount counter={count2} position="two" />

      {/* Button component will only re-render if their props change. */}
      <Button name="button2" handleClick={HandleClick}>
        button2
      </Button>
    </>
  );
};
