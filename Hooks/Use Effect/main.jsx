import ReactDOM from "react-dom/client";
import { EveryEffect } from "./useEffect/useEffectEveryRender";
import { ConditionalRender } from "./useEffect/useEffectConditionalRender";
import { OnlyOnce } from "./useEffect/useEffectOnlyOnce";
import { CleanUP } from "./useEffect/useEffectCleanUP_saveMemory";

const Main = () => {
  return (
    <>
      <EveryEffect />
      <br /><br />
      <ConditionalRender />
      <br /> <br />
      <OnlyOnce />
      <br /><br />
      <CleanUP />
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Main />);
