const root = ReactDOM.createRoot(document.querySelector("#root"));

// method 01:
const element1 = <h1 className="one"> First Line</h1>;

root.render(element1);

// method 02:
const element2 = <h1 id="two"> Second Line </h1>;
const element3 = <h1 className="one"> Third Line</h1>;

root.render([element2, element3]);

// method 03:
// to see more about React Component goto React Component Properties/functionaleCompnentAndProps
const Element4 = () => {
  // use <> </> when multiple element exists
  return (
    <>
      <h1> Forth Line </h1>
      <h1>okay</h1>
    </>
  );
};

root.render(<Element4 />);
// or
root.render(<Element4></Element4>);
