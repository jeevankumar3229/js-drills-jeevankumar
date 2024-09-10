const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; 
const {keys, values, mapObject, transform, pairs,invert,defaults} = require('./objects.js')
console.log(keys(testObject))
console.log(values(testObject))
console.log(mapObject(testObject, transform))
console.log(pairs(testObject))
console.log(invert(testObject))
console.log(defaults(testObject,{address: "bangalore", height: 32}))
