import { Component2 } from "./component2";
import React from "react";

export const MyContext = React.createContext();

export const Component1 = () => {
  const [value, setValue] = React.useState("Taib");
  return (
    <>
      <div className="box">
        <p>Component1</p>
        <p>Hi, {value}</p>
        <MyContext.Provider value={value}>
          <Component2 />
        </MyContext.Provider>
      </div>
    </>
  );
};
