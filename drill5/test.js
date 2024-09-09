const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; 
const {keys, values, mapObject, transform} = require('./objects.js')
console.log(keys(testObject))
console.log(values(testObject))
console.log(mapObject(testObject, transform))