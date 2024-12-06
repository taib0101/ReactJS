export const ConditionalInterpolation = () => {
  const method01 = true;
  const method02 = true;

  return (
    <>
      {
        <div>
          {method01 ? <h1>This is Method01 conditionalInterpolation</h1>: <h1> This is not Method01</h1>}
        </div>
      }

      <div>{method02 && <h1>This is Method02 conditionalInterpolation</h1>}</div>
    </>
  );
};
