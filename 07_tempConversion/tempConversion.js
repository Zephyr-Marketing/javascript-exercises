const convertToCelsius = function(fahrenheit) {
    return parseFloat(((fahrenheit - 32) * 5/9).toFixed(1));
};

const convertToFahrenheit = function(celcius) {
    return parseFloat(((celcius * 9/5) + 32).toFixed(1));
};

console.log(convertToCelsius());
console.log(convertToFahrenheit(-10));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
