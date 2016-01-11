var arr = [6,3,5,4,3,4,4,5];
function grades(){
	var results = [];
	for (var i = 0; i < arr.length; i++) {
		results.push(arr[i])
		if (arr[i] > arr[i+1]) {
			console.log("up")
		} else if (arr[i] < arr[i+1]) {
			console.log("down");
		} else {
			console.log("equal");
		}
	}
}
console.log(grades())