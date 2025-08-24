// Ex1: Use spread operator to copy an array and object of a given array and object
/// and console log it

const arrays = [1, 2, 3];
const objects = { name: "John", age: 30 };

const numArr = [...arrays]
const object = {...objects}

console.log(numArr)
console.log(object)

// Ex2: Use spread operator to merge two arrays and objects

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const object1 = { name: "John" };
const object2 = { age: 30 };

const numArray = [...array1, ...array2]
const objectArray = {...object1, ...object2}

console.log(numArray)
console.log(objectArray)

// Ex3: Use spread operator to add an element to the start of the array
// add an element to the end of an array
// add an element to the start and an element to the end of an array

const baseArray = [1, 2, 3];

const addStart = [0, ...baseArray]
const addEnd = [...baseArray, 4]
const addStartEnd = [0, ...baseArray, 4]

console.log(addStart)
console.log(addEnd)
console.log(addStartEnd)

// Ex4: Use spread operator to add a key to the start of an object
// add a key to the end of an object
// add a key to the start and a key to the end of an object

const baseObject = { name: "John" }

const addStartKey = {id : 690, ...baseObject}
const addEndKey = {...baseObject, age : 94}
const addStartEndK = {id : 690, ...baseObject, age : 94}

console.log(addStartKey)
console.log(addEndKey)
console.log(addStartEndK)

// Ex5: Use spread operator to merge two arrays
// and add an element to the start and also one at the end

const arrayA = [1, 2, 3]
const arrayB = [4, 5, 6]

const mergeArr = [0, ...arrayA, ...arrayB, 7]

console.log(mergeArr)

// Ex6: Use spread operator to merge two objects
// and add a key to the start and also one at the end

const description1 = {
    name : "Asta",
    age : 15,
    from :  "Hage Village"
}

const description2 = {
    magic : false,
    grimoire : "5-leafs clover",
    status : "Peasant"
}

const description = {Position : "Magic Knight", ...description1, ...description2, Friend : "Yuno"}

console.log(description)