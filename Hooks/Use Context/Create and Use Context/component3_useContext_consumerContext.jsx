import React from "react";
import { MyContext } from "./component1_createContext_providerContext";

export const Component3 = () => {
  const value = React.useContext(MyContext);
  return (
    <>
      <div className="box">
        <p>Component3</p>
        <p>Bye, {value}</p>
      </div>
    </>
  );
};
