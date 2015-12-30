// Warm ups
// create a self-invoking anonymous function with one argument and pass in a string.  
//It should log out that string
(function (x){
	console.log (x);
})('yolo');

// Define a function that takes in two arguments and adds them, invoke it and pass in two things.
function add(a,b){
	return a + b;
}
console.log(add(1,2));

//Define a function that takes in one argument, it assumes
//the argument is a function and calls it passing in two things.
function another(func){
	return func + 1;
}
console.log(another(10));

// Define a closure, a function that returns a 
//function, and correctly invoke it to add 10 + 10
function clsr(a){
	return function(b){
		var b = 5;
		return a+b;
	};
}
console.log(clsr(5)());

// Define a callback function that takes in 3 
//arguments, the first is a function, the other 
//two are values. It returns the invoked cb with val1 and val2 as arguments
function sum(a,b){
	return a+b;
}
function total(cb, v1, v2){
	return cb(v1,v2);
}
console.log(total(sum,4,5));



// implement forEach
var arr = ['this', 'that', 42];
function forEach(cb, arr){
	for (var i = 0; i < arr.length; i++) {
		cb(arr[i]);
	};
}
function (el){
	console.log(el);
}, arr);




// function reverse(str){
// 	var word = "";
// 	for (i=str.length -1; i>=0; i--){
// 		word = word + str[i];

// 	}
// 	return word;
// }
// reverse("RedCurrent");
