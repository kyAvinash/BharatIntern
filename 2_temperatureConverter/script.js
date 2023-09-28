function convertTemperature(input) {
    const value = parseFloat(input.value);

    if (isNaN(value)) {
        return;
    }

    const celsiusEl = document.getElementById("Celsius");
    const fahrenheitEl = document.getElementById("Fahrenheit");
    const kelvinEl = document.getElementById("Kelvin");

    switch (input.name) {
        case "Celsius":
            fahrenheitEl.value = (value * 9 / 5) + 32;
            kelvinEl.value = value + 273.15;
            break;

        case "Fahrenheit":
            celsiusEl.value = (value - 32) * 5 / 9;
            kelvinEl.value = (value - 32) * 5 / 9 + 273.15;
            break;

        case "Kelvin":
            celsiusEl.value = value - 273.15;
            fahrenheitEl.value = (value - 273.15) * 9 / 5 + 32;
            break;

        default:
            break;
    }
}
