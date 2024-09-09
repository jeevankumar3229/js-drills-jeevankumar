const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; 
const {keys, values} = require('./objects.js')
console.log(keys(testObject))
console.log(values(testObject))