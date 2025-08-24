// Ex1: Add a new fruit to the end of the array using push
const fruits = ["apple", "banana"];
// Task: use push to add "orange" to the array and console.log it
fruits.push("Orange");
console.log(fruits);


// Ex2: Remove the last element of the array using pop
const numbers = [10, 20, 30, 40];
// Task: use pop to remove the last element, console.log the updated array and the removed element
numbers.pop();
console.log(numbers);


// Ex3: Add a new city to the start of the array using unshift
const cities = ["Paris", "London"];
// Task: use unshift to add "Tokyo" to the start and console.log the array
cities.unshift("Tokyo");
console.log(cities);


// Ex4: Remove the first element of the array using shift
const letters = ["a", "b", "c", "d"];
// Task: use shift to remove the first element, console.log the updated array and the removed element
letters.shift();
console.log(letters);


// Ex5: Combine multiple operations
const animals = ["cat", "dog", "rabbit"];
// Task: 
// 1. push "fish" to the end
animals.push("fish");
// 2. unshift "bird" to the start
animals.unshift("bird");
// 3. pop the last element and store it
const lastEle = animals.pop();
// 4. shift the first element and store it
const firstEle = animals.shift();
// 5. console.log the final array, removed first element, and removed last element
console.log(animals);
console.log(firstEle);
console.log(lastEle);
