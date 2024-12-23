import ReactDOM from "react-dom/client";
import { UseRef } from "./useRef";
import { ForwardRef } from "./frowardRef";
import { UseRefAsStorage } from "./useRef_asStorage_cleanUpMemory";

const Main = () => {
  return (
    <>
      <UseRef />
      <ForwardRef />
      <UseRefAsStorage />
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Main />);
