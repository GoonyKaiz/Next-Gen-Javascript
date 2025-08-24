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