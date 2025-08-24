// Ex1: Use foreach to console log a an area value of a circle
const radius = [1, 2, 3, 4, 5];
radius.forEach((num) => {
    const circleArea = Math.PI * num * num;
    console.log(`The Area of the circle with a ${num}-unit radius is ${parseFloat(circleArea.toFixed(3))}.`);
});


// Ex2: Use foreach to console log a welcome message to these people
const people = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank"];
people.forEach((p) => console.log (`Welcome!! ${p}`))

// Ex3: Use foreach to display te price of an item after tax
const products=[
    { name: "Laptop", price: 1000, tax: 0.1 },
    { name: "Phone", price: 500, tax: 0.2 },
    { name: "Tablet", price: 300, tax: 0.15 },
    { name: "Monitor", price: 200, tax: 0.18 },
    { name: "Keyboard", price: 50, tax: 0.12 }
]
products.forEach ((at) => {
    const afterTax = at.price + (at.price * at.tax);
    console.log(`The Total price (after Tax) of ${at.name} is ${afterTax}.`);
});