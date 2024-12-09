export const TemperatureInput = ({
  name,
  onTemperatureChange,
  temperature,
}) => {
  return (
    <>
      <fieldset>
        <legend>{name}</legend>
        {/* After Initiate process 02*/}
        <input
          type="text"
          placeholder="write something"
          value={temperature}
          onChange={(event) => onTemperatureChange(event, name) /* process 03*/} 
        />
      </fieldset>
    </>
  );
};
