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

//   Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.
function displayNames(){
     for(let i=0;i<arrayOfObjects.length;i++){
        if(arrayOfObjects[i].hasOwnProperty("isStudent") && arrayOfObjects[i].hasOwnProperty("country")){
         if(arrayOfObjects[i].isStudent === true && arrayOfObjects[i].country === 'Australia'){
            if(arrayOfObjects[i].hasOwnProperty("name")){
             console.log("Names of the individuals who are students and live in Australia: "+arrayOfObjects[i].name);
            }
            else{
                console.log("Individual who is a student and lives in Australia with ID "+arrayOfObjects[i].id+" has no name property");
            }
         }
     }
}
}

//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

function logsName(index=3){
    for(let i=0;i<arrayOfObjects.length;i++){
        if(index === i){
           if(arrayOfObjects[i].hasOwnProperty("name") && arrayOfObjects[i].hasOwnProperty("city")){
            console.log("Name and City of Individual at specified index position: name: "+arrayOfObjects[i].name +" city: "+arrayOfObjects[i].city);
        }
        else{
           if(arrayOfObjects[i].hasOwnProperty("name")){
               console.log("Name of Individual at specified index position: name: "+arrayOfObjects[i].name);
           }
           else if(arrayOfObjects[i].hasOwnProperty("city")){
               console.log("City of Individual at specified index position: city: "+arrayOfObjects[i].city);
           }
           else{
           console.log("Individual at ID "+arrayOfObjects[i].id +" has no name and city property")
           }
        }
    }
    
}
}

//    Implement a loop to access and print the ages of all individuals in the dataset.
function printAges(){
    console.log("Ages of all individuals: ");
     for(let i=0;i<arrayOfObjects.length;i++){
        if(arrayOfObjects[i].hasOwnProperty("age")){
         console.log(arrayOfObjects[i].age);
        }
        else{
            console.log("Individual at ID "+arrayOfObjects[i].id+" has no age property");
        }
     }
    
}

//    Create a function to retrieve and display the first hobby of each individual in the dataset.
function displayFirstHobby(){
    console.log("First hobby of each individual: ");
     for(let i=0;i<arrayOfObjects.length;i++){
        if(arrayOfObjects[i].hasOwnProperty("hobbies") && arrayOfObjects[i]["hobbies"].length > 0){
         console.log(arrayOfObjects[i]["hobbies"][0]);
        }
        else{
            console.log("Individual at ID "+arrayOfObjects[i].id+" has no hobby property or hobbies list is empty");
        }
     }
}


//    Write a function that accesses and prints the names and email addresses of individuals aged 25.
function printNamesAndEmails(age=25){
    for(let i=0;i<arrayOfObjects.length;i++){
       if(arrayOfObjects[i].hasOwnProperty("age")){
        if(arrayOfObjects[i].age === age){
           if(arrayOfObjects[i].hasOwnProperty("name")&& arrayOfObjects[i].hasOwnProperty("email")){
            console.log("Name and Email of individual of specified age: name: "+arrayOfObjects[i].name +" email: "+arrayOfObjects[i].email);
        }
        else{
           if(arrayOfObjects[i].hasOwnProperty("name")){
               console.log("Name of Individual of age 25 having ID "+arrayOfObjects[i].id +" is " +arrayOfObjects[i].name);
           }
           else if(arrayOfObjects[i].hasOwnProperty("email")){
               console.log("Email of Individual of age 25 having ID "+arrayOfObjects[i].id +" is " +arrayOfObjects[i].email);
           }
           else{
               console.log("Individual at ID "+arrayOfObjects[i].id +" of age 25 has no name and city property")
           }
        }
        }
       }
    }
}

module.exports = {returnEmailaddress, printHobbies, displayNames, logsName, printAges,displayFirstHobby, printNamesAndEmails};