// receving callback
export const Button = ({ change }) => {
  return <button onClick={(event) => change(event, 10)}>okay</button>;
};
