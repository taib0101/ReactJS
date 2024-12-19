/*
    useContext is a life cycle react hook method
    it allows to share values through multiple component,
    without passing props in component chain .

    Suppose you set value in Component1 and you want to set value in Component3
    which it has chain like Component1->Component2->Component3, without passing props
    So, Use COntext prevent props drill

    # Component1 as PROVIDER COMPONENT
    1. import { createContext } from "react";
    2. export const MyContext = createContext();
    3. const [value, setValue] = useState("Taib");
    4. <MyContext.Provider value={value} >
          <Child />
       </MyContext.Provider>
    5. goto component1.jsx

    # Component3 as CONSUMER COMPONENTS
    1. import React, { useContext } from "react"
    2. import { MyContext } from "./component1.jsx"
    3. const value = useContext(Mycontext)

*/



import { Component1 } from "./component1_createContext_providerContext.jsx";

export const UseContext = () => {
  return (
    <>
      <Component1 />
    </>
  );
};