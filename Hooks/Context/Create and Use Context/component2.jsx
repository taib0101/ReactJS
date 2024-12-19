import { Component3 } from "./component3_useContext_consumerContext";

export const Component2 = () => {
  return (
    <>
      <div className="box">
        <p>Component2</p>
        <Component3 />
      </div>
    </>
  );
};
