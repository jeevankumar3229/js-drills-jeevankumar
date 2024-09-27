/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Print out "Step 1 complete" when the first promise fulfills
    6. Have the first promise return another new Promise that will
       fulfill after 3 seconds with the message: "Step 2 Complete"

    7. Print out the message from the second promise after it
       fulfills ("Step 2 Complete")

    HINT: Use setTimeout for the delay
*/

function exercise2() {
   console.log("Program started")
   const promise = new Promise(function (resolve, reject) {
      try {
         setTimeout(() => {
            resolve("Step 1 complete")

         }, 3000)
}
       catch (error) {
   reject(error)
}
   })
console.log(promise, "Program in progress")
return promise
}
exercise2().then((data) => {
   console.log("Step 1 complete")
   return new Promise(function (resolve, reject) {
      setTimeout(() => {
         resolve("Step 2 Complete")
      }, 3000)
   })
}).then((data)=>{
   console.log(data)
}).catch(error => {
   console.log(error)
})
