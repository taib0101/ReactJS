const variable = "Interpolation";
const element = <h1> we can apply {variable} every where</h1>;

export const NestedInterpolation = () => {
  return (
    <>
      {element}
      {<h1>you can do like this</h1>}
      {<h1>also it is valid {variable} </h1>}
      <h1>also you can do this {variable}</h1>
    </>
  );
};
