/*
    Class Component are called React Component
    class Method's are called React Property or Props
    1. We can re-use React Component
    2. Component receive property from outside
    3. Babel will transpile this to valid JavaScript
    4. After extends React.Component with specific class
    5. React automatically call render after extended React.Component
    6. React Component will re-render whenever properties will change inside render() built-in method. SO DON't use it
    7. PROPERTIES CHANGE ALWAYS FROM OUTSIDE NOT INSIDE OF CLASS of render() method.
 */

const root = ReactDOM.createRoot(document.querySelector("#root"));

// Method 01:
class component1 {
  print(name) {
    return (
      <>
        <div>
          <h1> Hi, </h1>
          <h1> {name} </h1>
        </div>
      </>
    );
  }
}
const object1 = new component1();
root.render(object1.print("murtaza"));

// Method 02: This is latest method, try to apply this
class Component2 extends React.Component {
  render() {
    return (
      <>
        <div>
          <h1> Hi, </h1>
          <h1> Children: {this.props.children}</h1>
          <h1> Props: {this.props.name} </h1>
        </div>
      </>
    );
  }
}

// <Component2 name="taib"/> this is JSX
// and it assigned property as this.props.name
root.render(<Component2 name="Murtaza Taib">Bro</Component2>);
