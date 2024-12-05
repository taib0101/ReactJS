import ReactDOM from "react-dom/client";
import OnSubmit from "./Component/formOnSubmitPreventDefault.jsx";
import OnSubmitForThis from "./Component/thisKeywordConfussion.jsx";
const root = ReactDOM.createRoot(document.querySelector("#root"));

// Functional React Component
const FunctionalComponent = () => {
  return (
    <div className="row">
      <OnSubmit />
      <OnSubmitForThis />
    </div>
  );
};

root.render(<FunctionalComponent />);
