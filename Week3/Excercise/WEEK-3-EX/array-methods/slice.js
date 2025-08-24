// Ex1: Get the first 3 elements of an array
const numbers = [10, 20, 30, 40, 50];
let numArr = numbers.slice(0,3);
console.log(numArr);

// Ex2: Get the last 2 elements of an array
const letters = ["a", "b", "c", "d", "e"];
let lettersArr = letters.slice(-2);
console.log(lettersArr);

// Ex3: Get a middle portion of an array (no "red" and "purple")
const colors = ["red", "green", "blue", "yellow", "purple"];
let colorsArr = colors.slice(1, 4);
console.log(colorsArr);

// Ex4: Get the third element to the third last element
const names = [
	"Alice",
	"Bob",
	"Charlie",
	"David",
	"Emma",
	"Frank",
	"Grace",
	"Hannah",
	"Isaac",
	"Jack",
	"Katie",
	"Liam",
	"Mia",
	"Noah",
	"Olivia",
	"Paul",
	"Quinn",
	"Rachel",
	"Sam",
	"Tina",
	"Uma"
];
let namesArr = names.slice(2, -2);
console.log(namesArr);

