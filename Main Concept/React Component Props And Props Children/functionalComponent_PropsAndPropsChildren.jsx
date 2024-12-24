import ReactDOM from "react-dom/client";
/*
    Functional Component are called React Component
    Functional Property are called React Property or Props
    1. We can re-use React Component
    2. Component receive property from outside
    3. Babel will transpile this to valid JavaScript
*/

const root = ReactDOM.createRoot(document.querySelector("#root"));

// Method 01:
const component_with_variableProps = (name) => {
  return (
    <>
      <div>
        <h1> Hi, </h1>
        <h1> {name} </h1>
      </div>
    </>
  );
};
root.render(component_with_variableProps("taib"));

// Method 02: This is latest method, try to apply this
const Component_with_objectProps = (props) => {
  console.log(props);
  return (
    <>
      <div>
        <h1> Hi, </h1>
        <h1> {`${props.name}`} </h1>
        <h1>{props.children}</h1>
      </div>
    </>
  );
};

// <Component_with_objectProps name="taib"/> this is JSX
// and it send object as argument
// root.render(<Component_with_objectProps name="Taib" />);

// with children
root.render(<Component_with_objectProps name="Taib">Bro</Component_with_objectProps>);
