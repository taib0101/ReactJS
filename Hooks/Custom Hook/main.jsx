import ReactDOM from "react-dom/client";
import { useWindowResize1, UseWindowResize2 } from "./customHooks";

const Main = () => {
  const variable = useWindowResize1(600);
  // console.log(variable);
  return (
    <>
      <h1>Custom Hook</h1>
      <h3>useWindowResize1 by passing argument</h3>
      <p>This is {variable ? "small" : "large"} device</p>
      <hr />

      <h3>useWindowResize1 by passing without argument</h3>
      <UseWindowResize2 />
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Main />);
