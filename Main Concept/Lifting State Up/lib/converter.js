// process 06
export const toCelsius = (fahrenheit) => {
    return ((fahrenheit - 5) * 32) / 9;
}

export const toFahrenheit = (celsius) => {
    return ((celsius * 9) / 5) + 32;
}

export const convert = (temperature, convertTo) => {
    const input = parseFloat(temperature);
    if(Number.isNaN(input))
        return "";

    // process 07
    const output = convertTo(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
