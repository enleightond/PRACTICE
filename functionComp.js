function reverseString(inputString) {
	var outputString = "";
	for(var i = inputString.length - 1; i >= 0; i--) {

		var currentChar = inputString[i];
		outputString += currentChar;
	}
}
	return outputString;
console.log(reverseString("hello"));

function isThisAPalindrome(inputString) {
	var reversed = reverseString(inputString);
	return inputString === reversed;
}

console.log(isThisAPalindome("bob"));
console.log(isThisAPalindome("boB"));
console.log(isThisAPalindome("racecar"));

function returnsNothing() {
	var x = 50;
	x;
}

var x = returnsNothing();
console.log(x);

var yFunction = returnsNothing;
console.log(yFunction);
console.log(yFunction());


function addN(n){
	return function(x) {
		return x + n;
	}
}

var addSeven = addN(7);
var addNine = addN(9);

console.log(addSeven);
console.log(addNine);
console.log(addSeven(8));
console.log(addNine(1));

function callThisCallback(callbackFunction) {
	return callbackFunction();
}

function callbackWithParam(callbackFunction, inputToCallback){
	return callbackFunction(inputToCallback);
}

console.log(callThisCallback(addSeven));
console.log(addSeven());

console.log(callbackWithParam(addSeven, 7));
console.log(addSeven(7));


(function(parameter, two) {
  console.log(parameter)
  console.log(two)
})("one");
