const reverseString = function(string) {
	let newArr= string.split("");
	let reversedArr = newArr.reverse();
	let returnValue = reversedArr.join("");
	return returnValue;
};
console.log(reverseString("Hello"));
// Do not edit below this line
module.exports = reverseString;
