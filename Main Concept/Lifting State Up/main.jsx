import ReactDOM from "react-dom/client";
import { CalculatorWithLiftingStateUP } from "./calculator_with_liftingStateUp.jsx";

// Functional React Component
const FunctionalComponent1 = () => {
  return (
    <>
      <CalculatorWithLiftingStateUP />
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<FunctionalComponent1 />);
