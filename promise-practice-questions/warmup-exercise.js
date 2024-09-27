/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well
    5. Print out "Program complete" when the promise completes after 3 seconds

    HINT: Use setTimeout for the delay
*/


function warmup() {
    console.log("Program started")
    const promise=new Promise(function (resolve, reject) {
        try {
            setTimeout(() => {
                resolve("Program Complete")
            }, 3000)
        }
        catch (error) {
            reject(error)
        }
    })
    console.log(promise,"Program in progress")
    return promise
}
warmup().then((data)=>{
    console.log("Program Complete")
})
