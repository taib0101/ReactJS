import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./globalStyledComponents.js";
import { Div } from "./styledComponents.js";
import { Div1, Div2 } from "./nestedWrapperStyledComponents.js";
import { Props } from "./sendingPropsInStyledComponents.js";
import { HOCTagByStyled } from "./styledComponentsWorkAsHOC.js";

const Tag = () => {
  return (
    <>
      <div className="tag">
        <p>bro</p>
      </div>
    </>
  );
};

export const Tag1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <p>bro</p>
      </div>
    </>
  );
};

const Main = () => {
  return (
    <>
      <GlobalStyles />
        <Div>
          <h1>Style Component</h1>
          <div className="parentOfp">
            <p>taib</p>
          </div>
        </Div>

        <Div1>
          <Div2>
            <p>okay taib</p>
          </Div2>

          <Tag />
        </Div1>

        <Props size="6px">
          <p>props</p>
        </Props>

        <HOCTagByStyled />
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Main />);
