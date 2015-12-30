function clsr(pubID){
	return function (prvtID){
		var prvtID = " ClosureMan!!!";
		return pubID + prvtID;
	};
}
console.log(clsr('SuperCaptain')());

function makeBadGuys(x) {
  return function(y) {
    return x + y;
  };
}

var posse = makeBadGuys(5);
var gang = makeBadGuys(10);

console.log(posse(1));  // 6
console.log(gang(3)); // 13
console.log(makeBadGuys(20)(20));


function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function    
  }
  displayName();    
}
init();
