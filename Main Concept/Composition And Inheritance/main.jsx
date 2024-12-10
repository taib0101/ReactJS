import ReactDOM from "react-dom/client";
import { Composition } from "./composition.jsx";
import { Text } from "./text.jsx";
import { NestedComposition } from "./nested.jsx";

// Functional React Component
const FunctionalComponent1 = () => {
  return (
    <>
      <p>
        This is basic of composition, which Component return a anonymous
        function from render()
      </p>

      {/* goto composition.jsx, you will see it return a function as parameter by using this.props.children() */}
      <Composition>
        {/* Basic 01 */}
        {/* {(compositionFunction) => compositionFunction("Taib", "Bro")} */}

        {/* Basic 02 */}
        {/* {(compositionFunction) => <Text propsFunction={compositionFunction} />} */}

        {/* Basic 03 */}
        {/* you can apply nested composition. think about how it works */}

        {(compositionFunction) => (
          <NestedComposition>
            {(nestedCompositionFunction) => (
              <Text
                propsFunction={compositionFunction}
                propsFunction1={nestedCompositionFunction}
              />
            )}
          </NestedComposition>
        )}
      </Composition>
      {/* NOTE: you can't call multiple time composition */}
      <Text />
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<FunctionalComponent1 />);
