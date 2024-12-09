import React from "react";
import { TemperatureInput } from "./temperatureInput.jsx";
import { toCelsius, toFahrenheit, convert } from "./lib/converter.js";

export class CalculatorWithLiftingStateUP extends React.Component {
  state = { scale: "", temperature: "" }; // Initiate

  // process 04
  handleChange = (event, name) => {
    this.setState({
      scale: name,
      temperature: event.target.value,
    });
  };

  render() {

    // Initaite and process 05 
    // then scale = Celsius , celsius = temperature, fahrenheit = convert(to fahrenheit)
    // goto ./lib/converter.js to process 06-07
    const celsius =
      this.state.scale === "Fahrenheit"
        ? convert(this.state.temperature, toCelsius)
        : this.state.temperature;
    const fahrenheit =
      this.state.scale === "Celsius"
        ? convert(this.state.temperature, toFahrenheit)
        : this.state.temperature;
    console.log(this.state.scale, this.state.temperature, fahrenheit);

    return (
      <>
        {/* process 08 */}
        <TemperatureInput
          name={"Celsius"}
          onTemperatureChange={this.handleChange}
          temperature={celsius}
        /> {/* After Initiate process 01. goto temperatureInput.jsx process 02-03*/}
        <TemperatureInput
          name={"Fahrenheit"}
          onTemperatureChange={this.handleChange}
          temperature={fahrenheit}
        />
      </>
    );
  }
}
