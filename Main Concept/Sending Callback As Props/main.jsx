// goto click.jsx file see more details that how it's works
import ReactDOM from "react-dom/client";
import { Click } from "./click";

const FunctionalComponent1 = () => {
  return (
    <>
      <Click />
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<FunctionalComponent1 />);
