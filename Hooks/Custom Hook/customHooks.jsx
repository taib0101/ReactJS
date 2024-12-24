import React from "react";

// this better practice by passing argument
export const useWindowResize1 = (screenSize) => {
  const [onScreen, setOnScreen] = React.useState(false);

  /*
    Method 01:
    const checkScreenSize = React.useCallback(() => {
        setOnScreen(window.innerWidth < screenSize);
    }, [screenSize]);

    React.useEffect(() => {

    }, [checkScreenSize]);

  */
  React.useEffect(() => {
    const checkScreenSize = (event) => {
      //   console.log(event);
      setOnScreen(window.innerWidth < screenSize);
    };

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [screenSize]);

  return onScreen;
};

export const UseWindowResize2 = () => {
  const [onScreen, setOnScreen] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = (event) => {
      //   console.log(event);
      setOnScreen(window.innerWidth < 600);
    };

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <>
      <p>This is {onScreen ? "small" : "large"} device</p>
    </>
  );
};
