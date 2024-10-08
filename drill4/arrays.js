//const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.
/*
    Complete the following functions.
    These functions only need to work with arrays.
    A few of these functions mimic the behavior of the `Built` in JavaScript Array Methods.
    The idea here is to recreate the functions from scratch BUT if you'd like,
    feel free to Re-use any of your functions you build within your other functions.
    **DONT** Use for example. .forEach() to recreate each, and .map() to recreate map etc.
    You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating

*/
// Do NOT use forEach to complete this function.
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // You should also pass the index into `cb` as the second argument
  // based off http://underscorejs.org/#each
function each(elements, cb) {
  if(Array.isArray(elements)){
    for(let i=0;i<elements.length;i++){
      cb(elements[i],i,elements);
    }
  }
  else{
    console.log("Pass an array object");
  }
}
function print(value, index, array){
  console.log("Element at index "+index+" is "+value)
}



// Do NOT use .map, to complete this function.
  // How map works: Map calls a provided callback function once for each element in an array, in order, and functionructs a new array from the res .
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
function map(elements, cb) {
  if(Array.isArray(elements)){
  let newarr=[]
  for(let i=0;i<elements.length;i++){
    newarr.push(cb(elements[i],i,elements))
  }
  return newarr;
}
else{
  return "Pass an valid array object";
}
}
function transform(item,index,array){
  return item*3;
}




// Do NOT use .reduce to complete this function.
  // How reduce works: A reduce function combines all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb` along with the `startingValue`.
  // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
function reduce(elements, cb, startingValue) {
  if(!Array.isArray(elements)){
    return "Pass an valid array object";
  }
  if(startingValue === undefined){
    startingValue =elements[0];
    for(let i=1;i<elements.length;i++){
      startingValue=cb(startingValue,elements[i],i,elements)
    }
  }
  else{
  for(let i=0;i<elements.length;i++){
    startingValue=cb(startingValue,elements[i],i,elements)
  }
}
return startingValue;
}

function convertToSingleValue(starting_value,arrayelement,index, array){
  return starting_value + arrayelement;
}




// Do NOT use .includes, to complete this function.
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
function find(elements, cb) {
  if(!Array.isArray(elements)){
    return "Pass an valid array object";
  }
  let status;
  for(let i=0;i<elements.length;i++){
    status=cb(elements[i],i,elements)
    if(status=== true){
      return elements[i];
    }
  }
  if(status === false){
    return undefined
  }
}
function findsElement(arrayvalue, index,array){
  if(arrayvalue > 2){
    return true;
  }
  else{
    return false;
  }
}



 // Do NOT use .filter, to complete this function.
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
function filter(elements, cb) {
  if(!Array.isArray(elements)){
    return "Pass an valid array object";
  }
  let a=[]
  let status;
  for(let i=0;i<elements.length;i++){
    status=cb(elements[i],i.elements)
    if(status===true){
      a.push(elements[i])
    }
    
  }
  return a;
}
function findsElement1(arrayvalue,index, array){
  if(arrayvalue > 2){
    return true;
  }
  else{
    return false;
  }
  
}

// Flattens a nested array (the nesting can be to any depth).
  // Hint: You can solve this using recursion.
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
//const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'
function flatten(elements) {
  let a=[]
  for(let i=0;i<elements.length;i++){
    if(Array.isArray(elements[i])){
      a=a.concat(flatten(elements[i]))
    }
    else{
      a.push(elements[i])
    }
  }
  return a;
}

module.exports={each, map, reduce, find, filter,flatten, print, transform, convertToSingleValue, findsElement, findsElement1};


