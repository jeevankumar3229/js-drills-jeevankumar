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
  let object ={}
  let n=1,b=1;c=1;i=1;
  return function(){
    while(true){
      let status1;
      if(i===5){
        n=1
        b=1
        c=1
      }
      if(i>1){
      for(let j=1;j<i;j++){
        if(object["n"+j]===n && object["b"+j]===b && object["c"+j]===c ){
          status1=1;
        }
      }
      if(status1===1){
          return object;
        }
      }
      add(n,b,c)
      object["n"+i]=n;
      object["b"+i]=b;
      object["c"+i]=c;
      n++;
      b++;
      c++;
      i++;
      }
      
    }
  }

function add(n1,b1,c1){
  console.log("sum is ")
  console.log(n1+b1+c1)
}

module.exports = {counterFactory, limitFunctionCallCount, print, cacheFunction,add}
