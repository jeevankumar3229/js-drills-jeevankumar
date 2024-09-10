const {counterFactory}=require('./closures.js')
console.log(counterFactory())
console.log(counterFactory().increment())
console.log(counterFactory().decrement(2))