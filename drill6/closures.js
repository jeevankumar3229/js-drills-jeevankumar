// Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

function counterFactory() {
  let counter =2;
  return {
    increment:function(){
      return counter + 1; 
    },
    decrement: function(counter){
      return counter +1;
      }
    }
  }


// Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  // Returning null is acceptable if cb can't be returned
function limitFunctionCallCount(cb, n) {
  let i=1;
  return function(a){
    if(i<=n){
      i++;
      return cb(a)

    }
    return null;
  }
}
function print(a){
  return a*5;
}

// Should return a function that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
function cacheFunction(cb) {
  let cache={};
  return function(a){
    for(let i in cache){
      if(i==a){
        return cache;
      }
    }
    let b=print1(a)
    cache[a]=b;

  }
}

function print1(input){
  return input*3;
}

module.exports = {counterFactory, limitFunctionCallCount, print, cacheFunction,print1}
