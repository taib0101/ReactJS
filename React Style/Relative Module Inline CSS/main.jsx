import ReactDOM from "react-dom/client";
import "./css/global.css" // relative import
import style from "./css/local.module.css"

const Main = () => {
  return (
    <>
      {/* relative css */}
      <div className="color-box">
        <h1>relative import used for global</h1>
      </div>

      {/* module css */}

      {/* method 01 */}
      <div className={style.colorBox1}>
        <h1>module css used for specific </h1>
      </div>

      {/* method 02 */}
      <div className={`${style.colorBox1} h1`}>
        <h1>bro</h1>
      </div>

      {/* inline css */}
      <div style={{ border: "2px solid", fontSize: "20px"}}>
        <h1>bro</h1>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Main />);
