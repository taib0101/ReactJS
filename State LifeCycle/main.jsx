import ReactDOM from "react-dom/client";
import ClassComponent from "./Component/stateAndLifeCycle.jsx";
import Counter from "./Component/stateBatchUpdate.jsx";
import Blog from "./Component/stateMultiple_Update_Merged.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

// Functional React Component
const FunctionalComponent = () => {
  return (
    <div className="row">
      <h1>State and LifeCycle Method</h1>
      <ClassComponent locale="en-BD" />

      <h1>Batch Update of State</h1>
      <Counter increment="1" />

      <Blog />
    </div>
  );
};

root.render(<FunctionalComponent />);
