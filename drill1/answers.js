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

//    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.
function printHobbies(age=30){
    if(typeof age == 'number'){
        let status=1;
     for(let i=0;i<arrayOfObjects.length;i++){
        if(arrayOfObjects[i].hasOwnProperty("age")){
            
         if(arrayOfObjects[i].age === age){
            status=0;
            if(arrayOfObjects[i].hasOwnProperty("hobbies")){
             console.log("Hobbies of individual of age "+age+" is "+arrayOfObjects[i].hobbies);
            }
            else{
                console.log("Individual of age 30 with ID "+arrayOfObjects[i].id+" has no hobbies property");
            }
         }
        }
     }
     if(status==1){
        console.log("There are no individuals of "+age);
     }
    }
    else{
        console.log("Enter a valid a age");
    }
}


module.exports = {returnEmailaddress, printHobbies};