import ReactDOM from "react-dom/client";
import { Form } from "./form.jsx";

// Functional React Component
const FunctionalComponent1 = () => {
  return (
    <>
      <Form />
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<FunctionalComponent1 />);
