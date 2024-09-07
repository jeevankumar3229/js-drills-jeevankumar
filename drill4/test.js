const {each, map, reduce, find, filter, flatten, print,transform, convertToSingleValue, findsElement, findsElement1}= require('./arrays.js')
const items = [1, 2, 3, 4, 5, 5];
const nestedArray = [1, [2], [[3]], [[[4]]]]; 
each(items,print)
console.log(map(items, transform))
console.log(reduce(items, convertToSingleValue,20))
console.log(find(items, findsElement))
console.log(filter(items, findsElement1))
console.log(flatten(nestedArray))