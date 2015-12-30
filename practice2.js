var second = [1,2,3].map(function(item) {
	return item + 1;
}); 

console.log(second);

var input = [
		{1: 'a'},
		{2: 'b'},
		{3: 'c'},
		{4: 'd'}


];
input.map(function(swap){
	var newObj = {};
	for (var prop in input) {
		if (swap.hasOwnProperty(swap)){
			newObj[input[prop]] = prop;
		}
	}
	return newObj;
});
console.log(newObj);



