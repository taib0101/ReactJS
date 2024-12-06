const Function = ({ value }) => {
  return (
    <>
      <h1>This is {value} Interpolation</h1>
    </>
  );
};

// export const FunctionInterpolation = <> {<Function value="Function" />} </>; this type of export doesn't work in React System always use function

export const FunctionInterpolation = () => {
  return <> {<Function value="Function" />} </>;
};
