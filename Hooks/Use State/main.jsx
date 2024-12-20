import ReactDOM from "react-dom/client";
import { SingleVariable } from "./useState/setSingleVariable";
import { ObjectVariable } from "./useState/setObjectVariable";
import { ArrayVariable } from "./useState/setArray";
import { SetPreviousSate } from "./useState/setPreviousState";

const Main = () => {
  return (
    <>
      <SingleVariable />
      <br /> <br />
      <ObjectVariable />
      <br /><br />
      <ArrayVariable />
      <br /><br />
      <SetPreviousSate />
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Main />);
