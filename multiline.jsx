// use first parenthesis for multiline element

const element1 = (
  <div>
    <h1>First Line</h1>
    <h1>Second Line</h1>
  </div>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(element1);