const convertToCelsius = function(temp) {
	let celsius = (temp - 32) * (5/9);
	let rounded = Math.round(celsius * 10) / 10;
	return rounded;
};

const convertToFahrenheit = function() {
	let fahrenheit = temp * (5/9) + 32;
	let rounded = Math.round(fahrenheit * 10) / 10;
	return rounded;
};
console.log(convertToCelsius(211));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
