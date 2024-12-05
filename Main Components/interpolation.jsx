let name = ["this is interpolation", "{name}"];

const element1 = <h1> {name} </h1>;

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(element1);
