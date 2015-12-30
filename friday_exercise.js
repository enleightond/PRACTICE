function real(x,y,booya){
	var z = booya(250);
	return x(y-z*z,z+z); 
}

console.log( 
real(function(num1,num2){
	return num1 + num2;
	}, 
	(function(wtf){
		return wtf
	})(252), 
	function(what){
		console.log(what)
		return what
	}))

function real(x,y,booya) {
	var z = booya(250);
	return x(y-z*z,z+z);
}

console.log (
	real(function(num1, num2) {
		return num1 + num2;
	},
	(function(wtf) {
		return (wtf);
	})(250),
	function(what) {
		console.log(what)
		return what;
	}))

