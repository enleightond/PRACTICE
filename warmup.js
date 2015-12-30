var request = require('request');

// var promise1 = new Promise(promiseExec);

// function promiseExec(resolve, reject){
// 	setTimeout(function(){
// 		resolve("This is some data.");
// 	}, 1000);
// 	reject("Booo rejected!");
// }

// promise1.then(resolved, rejected);
// promise1.catch(function(data) {
// 	console.log("CATCH!");
// 	console.log(data);
// });

// function resolved(data){
// 	console.log('resolved: ', data);
// }

// function rejected(data){
// 	console.log('rejected: ', data);
// }

var promise2 = promisifyGet('http://www.etsy.com');

var promise3 = promise2.then(function(data){
	console.log(data.body);
});
promise3.catch(function(error) {
	console.log(error);
	console.log("BAD");
});

function promisifyGet(url) {
	return new Promise(function(resolve, reject) {

		request(url, function(error, response, body) {
			if(error) {
				reject(error);
			}
			else if (response.statusCode !== 200) {
				reject(response);
			}
			else {
				resolve(response);
			}	
		}); //end of the callback for request
	}); //end of the promise constructor
}







