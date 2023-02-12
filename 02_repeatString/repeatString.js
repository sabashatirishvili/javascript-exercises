const repeatString = function(str, times) {
	let returnValue = "";
	for (let i = 0; i < times; i++) {
		returnValue+=str;
	}
	return returnValue;
};

// Do not edit below this line
module.exports = repeatString;
