/*
    if you want make list you have add key
    if you want div by looping , you have to add key
    for specific tag you have to add KEY 
*/

const Array = ["Taib", "Ifty", "Mehedi", "Abrar", "Anik"];
const variable = (
  <>
    {Array.map((value, index) => (
      <li key={index}>{value}</li>
    ))}
  </>
);

export const ListAndKeys = ({ array }) => {
  return (
    <>
      <ol>{variable}</ol>
      <ul>
        {array.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>

      <ul>
        {array.map((value, index) => (
          <div key={index}>{value}</div>
        ))}
      </ul>

      <ul>
        {array.map((value, index) => (
          <h1 key={index}>{value}</h1>
        ))}
      </ul>
    </>
  );
};
