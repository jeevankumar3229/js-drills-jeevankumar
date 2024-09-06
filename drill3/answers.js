const {inventory} = require('./cars.js');

// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
//("Car 33 is a *car year goes here* *car make goes here* *car model goes here*");

function getCarById(ID=33){
    if(typeof ID === 'number'){
    let status=0;
    for(let i=0;i<inventory.length;i++){
        if(inventory[i].hasOwnProperty('id')){
            if(inventory[i]["id"]=== ID){
                status=1;
                console.log("Car "+inventory[i]["id"]+" is a "+inventory[i]["car_year"]+" "+inventory[i]["car_make"]+" "+inventory[i]["car_model"]);
            }
        }
    }
    if(status===0){
        console.log("There is no car with ID "+ID);
    }
    }
    else{
        console.log("Enter a valid number for ID");
    }
}


// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
//("Last car is a *car make goes here* *car model goes here*");

function getLastCar(){
    let len=inventory.length;
    let obj=inventory[len-1];
    if(obj.hasOwnProperty("car_make") && obj.hasOwnProperty("car_model")){
        console.log("Last car is a "+obj["car_make"]+" "+obj["car_model"]);
    }
    else if(obj.hasOwnProperty("car_make")){
        console.log("Last car is made by "+obj["car_make"]);
    }
    else if(obj.hasOwnProperty("car_model")){
        console.log("Last car is of model "+obj["car_model"]);
    }
    else{
        console.log("Last car has no property called car_model and car_make");
    }
       
}

// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

function sortCarModel(){
    let a=[];
    for(let ob in inventory){
        let status=0;
        if(inventory[ob].hasOwnProperty("car_model")){
        for(let properties in inventory[ob]){
            if( properties === "car_model"){
                for(let i=0;i<a.length;i++){
                    if(a[i]=== inventory[ob][properties].toLowerCase()){
                        status=1;
                        break;
                    }
                   
                }
                if(status===0){
                    if(a.length === 0){
                        a.push(inventory[ob][properties].toLowerCase())
                    }
                    else{
                        for(let j=0;j<a.length;j++){
                            var status1=0;
                            if(inventory[ob][properties].toLowerCase() < a[j]){
                                status1=1;
                                a.splice(j,0,inventory[ob][properties].toLowerCase())
                                break;
                            }
                        }
                        if(status1===0){
                            a.push(inventory[ob][properties].toLowerCase())
                        }
                    }
                }
            }
        }

    }
 }
 if(a.length > 1){
    console.log("Car Models :");
    return a;

 }
 else{
    return "There are no cars with car_models listed in the inventory";
 }
}

// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

function getCarYears(){
    let a=[];
    for(let ob in inventory){
        let status=0;
        if(inventory[ob].hasOwnProperty("car_year")){
        for(let properties in inventory[ob]){
            if( properties === "car_year"){
                for(let i=0;i<a.length;i++){
                    if(a[i]=== inventory[ob][properties]){
                        status=1;
                        break;
                    }    
                }
                if(status===0){
                    a.push(inventory[ob][properties])
                }
            }
        }

    }
    }
    if(a.length > 1){
        console.log("Car Years: ");
        return a;
    }
    else{
        return "There are no cars with car_year listed in the inventory";
    }
}

module.exports ={getCarById, getLastCar, sortCarModel, getCarYears};