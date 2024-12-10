import ReactDOM from "react-dom/client";
import {
  RenderProps1,
  RenderProps2,
  RenderPropsCounter,
  ClickCounter,
  HoverCounter,
} from "./RenderProps.jsx";

// Functional React Component
const FunctionalComponent1 = () => {
  return (
    <>
      {/* Render Props refer to render the props */}
      <RenderProps1 name={() => "name"} />

      <RenderProps2 name={(bro) => <h1>{`${bro}`}</h1>} />

      {/* process 01. goto RenderProps.jsx to see process 02 */}
      <RenderPropsCounter
        Render={(count, handleChange) => (
          // process 05 and goto RenderProps.jsx to see process 06
          <ClickCounter count={count} handleChange={handleChange} />
        )}
      />

      <RenderPropsCounter
        Render={(count, handleChange) => (
          // process 05 and goto RenderProps.jsx to see process 06
          <HoverCounter count={count} handleChange={handleChange} />
        )}
      />
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<FunctionalComponent1 />);
