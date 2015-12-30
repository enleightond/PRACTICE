// closures a function that returns a function
function x(z){
	return function (y) {
		return z+y;
	};
}
console.log (x(1)(2));

// anon function returns a unnamed function
var p = function(p){
	return p;
};

// declaritive functon returns a named function
function a(z){
	return a;
}
console.log(a(1))
// a self invoking funciton that auto executes

(function(x){
	return x;
})('boya');

//callback

function q(a,b){
	return a + b;
}
function u(cb, num1, num2){
	return cb(num1, num2);
}
console.log(u(q,1,2));

