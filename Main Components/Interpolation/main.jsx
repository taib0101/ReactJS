import ReactDOM from "react-dom/client";
import { Basic } from "./Component/basic.jsx";
import { NestedInterpolation } from "./Component/nestedInterpolation.jsx";
import { FunctionInterpolation } from "./Component/functionInterpolation.jsx";
import ClassInterpolation from "./Component/classInterpolation.jsx";
import { ConditionalInterpolation } from "./Component/conditionalInterpolation.jsx";
import { LoopMapInterpolation } from "./Component/loopMapInterpolation.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

// Interpolation sign is "{}". use it inside HTML or JSX elements
/* you can apply all method like 
  <Basic/> 
  or 
  <Basic></Basic>
  or
  <>{<Basic/>} </>
  or
  <>{<Basic></Basic>}</>
  All thing are valid
*/

const Main = () => {
  return (
    <>
      <div className="row">
        <Basic />
        {<NestedInterpolation />}
        <FunctionInterpolation></FunctionInterpolation>
        {<ClassInterpolation value="Class"></ClassInterpolation>}
        <ConditionalInterpolation />
        <LoopMapInterpolation />
      </div>
    </>
  );
};

root.render(<Main />);
