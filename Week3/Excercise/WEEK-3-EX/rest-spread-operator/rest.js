// Ex1: Make a function using rest operator to get all the arguments passed in 
// and console log it

const copyAll = (...rest) => {
    console.log(rest);
}
copyAll(11, 12, 13, 14, 15);


// Ex2: Make a function to get the first and second arguments 
// and use rest operator to get the rest 
// and console log first, second, and the rest

const copyFirstSec = (first, second, ...rest) => {
    console.log(`First : ${first}`);
    console.log(`Second : ${second}`);
    console.log(`Rest : ${rest}`);
}
copyFirstSec(61, 62, 63, 64, 65);

// Ex3: Use rest operator to get the first 3 elements and the rest
// and console log it

const arrays = [1,2,3,4,5]
const [first, second, third, ...rest] = arrays
console.log(first)
console.log(second)
console.log(third)
console.log(rest)

// Ex4: Use rest operator to get the name, age, married, music, and the rest
// and console log it

const objects = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA",
    occupation: "Engineer",
    hobby: "Photography",
    favoriteColor: "Blue",
    pet: "Dog",
    married: false,
    language: "English",
    sport: "Football",
    music: "Kpop"
};

const {name, age, married, music, ...others} = objects;
console.log(`Name : ${name}`)
console.log(`Age : ${age}`)
console.log(`Married : ${married}`)
console.log(`Music : ${music}`)
console.log(others)