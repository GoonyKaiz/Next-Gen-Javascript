const playersNames = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Helen"];

// Ex1: Use includes to check if "Charlie" exist in this array
console.log(playersNames.includes("Charlie"));

// Ex2: Use includes to check if "Ivy" exist in this array
console.log(playersNames.includes("Ivy"));


// Ex3: use indexOf to find index of "Eve"
console.log(playersNames.indexOf("Eve"));

// Ex4: use indexOf to find index of "Zoe" (should return -1)
console.log(playersNames.indexOf("Zoe"));


// Ex5: Use find to get the first player whose name starts with "D"
console.log(playersNames.find(value => value[0] === "D"));

// Ex6: Use find to get the first player whose name length is 5
console.log(playersNames.find(value => value.length === 5));