//Write a function that returns each string in this array in all uppercase letters.
///////////////////////////////////////////////////////////////////////////////////

// var list = ['red', 'green', 'blue'];

// function upperCase(str){
// 	return str.toUpperCase();
// }

// console.log(list.map(upperCase));

//Write a function that returns the colors for every object in the array.
/////////////////////////////////////////////////////////////////////////

// var list = [
//   {width: 20, color: 'red'},
//   {width: 50, color: 'blue'},
//   {width: 10, color: 'purple'}
// ];

// function getColors(arr){
// 	for (var i = 0; i<arr.length; i++){
// 		console.log(list[i].color);
// 	}
// }

// console.log(getColors(list));

//Write a function that logs everything in an array.
////////////////////////////////////////////////////

// var list = ['milk', 'butter', 'cheese'];

// function dairy(str){
// 	for (var i = 0; i < str.length; i++){
// 	console.log(str[i]);		
// 	}
// }

// console.log(dairy(list));

//Write a function that logs the first and last item in an array.
//////////////////////////////////////////////////////////////////

// var list = ['milk', 'butter', 'cheese'];

// function firstLast(arr){
// 		console.log(arr[0]);
// 		console.log(arr.slice(-1)[0]);
// }
// console.log(firstLast(list));

//Write a function that returns each string in this array in all lowercase letters.
///////////////////////////////////////////////////////////////////////////////////

// var list = ['RED', 'GREEN', 'BLUE'];

// function toLower(str){
// 	for (var i = 0; i < str.length; i++) {
// 			console.log(str[i].toLowerCase());
// 		}
// }
// console.log(toLower(list));

//Write a function that logs the object with the greatest strength attribute.
//////////////////////////////////////////////////////////////////////////////

// var orcs = [ 
//     {name: 'Orgoth', strength: 9001},
//     {name: 'Blaroguhh', strength: 500},
//     {name: 'Mark', strength: 543}
// ];

// function getStrongest(orc){
// 	var strongest = 0;
// 	for (var i = 0; i < orc.length; i++){
// 		if (orcs[i].strength > strongest) {
// 			strongest = orcs[i];
// 		}
// 	}
// 		return strongest;
// }

// console.log(getStrongest(orcs));

//Write a function that logs the object with the lowest strength attrubute.
///////////////////////////////////////////////////////////////////////////

// function getWeakest(orc){
// 	var weakest = orcs[0].strength;
// 	for (var i = 0; i < orc.length; i++){
// 		if (orcs[i].strength < weakest ){
// 			weakest = orcs[i];
// 		}
// 	}
// 	return weakest;
// }

// console.log(getWeakest(orcs));

//Write a function that lists the weapons for the Strongest Orc.
////////////////////////////////////////////////////////////////

var orcs = [
    {
        name: 'Orgoth',
        strength: 9001,
        weapons: ['Bone ax', 'Mace of Strength']
    },
    {
        name: 'Blaroguhh',
        strength: 500,
        weapons: ['Cheeseburger', 'Spear of the Hut']
    },
    {
        name: 'Mark',
        strength: 543,
        weapons: ['Ax of Defense', 'Dagger', 'Sword' ]
    }
];

// function getStrongestWeapons(orc){
// 	var strongest = 0;
// 	for (var i = 0; i< orc.length; i++){
// 		if (orcs[i].strength > strongest){
// 			strongest = orcs[i];
// 		}
// 	}
// 	return strongest;
// }
// console.log(getStrongestWeapons(orcs).weapons);

//Write a function that lists the Orc that has the most the weapons.
////////////////////////////////////////////////////////////////////

function getMostWeapons(orc){
	var most = 0;
	var result = {};
	for (var i = 0; i < orc.length; i++){
		for (var j = 0; j < orcs[i].weapons.length; j++)
			if (orcs[i].weapons.length > most){
				result = orcs[i];
		}
	}
	return result;
}
console.log(getMostWeapons(orcs));











