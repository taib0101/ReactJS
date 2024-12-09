import ReactDOM from "react-dom/client";
import { ListAndKeys } from "./listAndKeysUsingMapLikeLoop.jsx";

// Functional React Component
const FunctionalComponent1 = () => {
  return (
    <>
      <ListAndKeys array={[1, 2, 3, 4, 5]}/>
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<FunctionalComponent1 />);
