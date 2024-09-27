/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
       and rejects after 2 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Print out "Program complete" if the promise fulfills
    6. Print out "Program failure" if the promise rejects

    HINT: Use setTimeout for the delay
*/



function exercise(status){
    console.log("Program started")
    const promise=new Promise(function (resolve, reject) {
        if(status===true){
            setTimeout(() => {
                resolve("Program Complete")
            }, 3000)
        }
        else{
            setTimeout(() => {
                reject("Program failure")
            }, 2000)
        }
    })
    console.log(promise,"Program in progress")
    return promise
}

exercise(false).then((data)=>{
    console.log(data)
}).catch(error=>{
    console.log(error)
})

exercise(true).then((data)=>{
    console.log(data)
}).catch(error=>{
    console.log(error)
})
