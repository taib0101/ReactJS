import ReactDOM from "react-dom/client";
import { Memo } from "./memo";
import { UseCallback } from "./UseCallback";
import { UseMemo } from "./useMemo";

const Main = () => {
  return (
    <>
      <Memo />
      <br />
      <br />
      <UseCallback />
      <br />
      <br />
      <UseMemo />
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Main />);
