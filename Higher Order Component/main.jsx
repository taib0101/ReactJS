import ReactDOM from "react-dom/client";
// import { NewClickCounter, NewHoverCounter } from "./hoc";
import { NewClickCounter, NewHoverCounter } from "./higherOrderComponent_HOC";

// Functional React Component
const FunctionalComponent1 = () => {
  return (
    <>
      <NewClickCounter />
      <NewHoverCounter />
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<FunctionalComponent1 />);
