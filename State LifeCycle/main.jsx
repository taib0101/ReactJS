import ReactDOM from "react-dom/client";
import ClassComponent from "./Component/clock.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

// Functional React Component
const FunctionalComponent = () => {
  return (
    <div className="row">
      <ClassComponent />
    </div>
  );
};

root.render(<FunctionalComponent />);
