//const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; // use this object to test your functions

// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.
// Check and use MDN as well
// PROJECT RESTRICTION: You can't use the built in Object methods.  Only use native JavaScript for loops. No other types of loops are allowed.
// PROJECT RESTRICTION: You can't use the underscore library or any other external library.

// Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
function keys(obj) {
  let arr=[];
  for(let properties in obj){
    arr.push(properties);
  }
  return arr;
}

// Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
function values(obj) {
  let arr=[];
  for(let properties in obj){
    arr.push(obj[properties]);
  }
  return arr;
}

 // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
  // http://underscorejs.org/#mapObject
function mapObject(obj, cb) {
  let obj1={}
  for(let properties in obj){
    obj1[properties]=transform(obj[properties],properties,obj);
  }
  return obj1;
}
function transform(item,key,object){
  return item+3;
}

// Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
function pairs(obj) {
  let arr=[]
  for(let properties in obj){
    let arr1=[]
    arr1.push(properties)
    arr1.push(obj[properties])
    arr.push(arr1)
  }
  return arr;
}

/* STRETCH PROBLEMS */
// Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
function invert(obj) {
  let ob1={}
  for(let properties in obj){
    ob1[obj[properties]]=properties
  }

  return ob1;
}

// Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
function defaults(obj, defaultProps) {
  let status = false;
 for(let properties1 in defaultProps){
  for(let properties2 in obj){
    if(properties1 === properties2){
      status=true;
      break;
    }
  }
  if(status=== false){
    obj[properties1]=defaultProps[properties1];
  }
  status = false;
 }
 return obj;
}

module.exports = {keys, values, mapObject, transform, pairs, invert, defaults}