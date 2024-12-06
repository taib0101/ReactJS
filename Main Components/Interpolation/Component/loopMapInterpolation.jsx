// It work like loop
const arr = [1, 2, 3, 4, 5];
export const LoopMapInterpolation = () => {
  return (
    <>
      {arr.map((value, index) => ( <h1 key={index}> List {value} </h1> ))}
    </>
  );
};
