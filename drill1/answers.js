const { arrayOfObjects } = require("./persons.js");

//Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.
function returnEmailaddress(){
    console.log("Emails of all Individuals:");
    let arr1=[];
    for(let i=0;i<arrayOfObjects.length;i++){
        if(arrayOfObjects[i].hasOwnProperty("email")){
        arr1.push(arrayOfObjects[i].email);
        }
        else{
            console.log("Individual at ID "+arrayOfObjects[i].id+" has no email property");
        }
    }
    return arr1;
}


module.exports = {returnEmailaddress};