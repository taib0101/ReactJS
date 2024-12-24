import ReactDOM from "react-dom/client";
import { UseReducerAsPremitiveValue } from "./useReducer_setUpdate_PremitiveValue";
import { UseReducerAsObjectValue } from "./useReducer_setUpdate_objectValue";
import { UseReducerMultipleTimes } from "./useReducer_multiple";

const Main = () => {
  return (
    <>
      <UseReducerAsPremitiveValue />
      <UseReducerAsObjectValue />
      <UseReducerMultipleTimes />
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Main />);
