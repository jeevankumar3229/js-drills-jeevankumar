const {users} = require('./users.js')

//Q1. Find all users who are interested in playing video games.
function findAllUsers(){
    let arr={};
    let status=1;
    for(let user in users){
        let a=users[user];
        if(a.hasOwnProperty("interests") | a.hasOwnProperty("interest")){
            let b="";
        if(a.hasOwnProperty("interests")){
            b ="interests";
        }
        else if(a.hasOwnProperty("interest")){
            b="interest";
        }
       for(let i=0; i<a[b].length;i++){
            if(a[b][i].toLowerCase().includes("video games")){
                arr[user]=users[user];
                status=2;
            }
       }
    }
    }
    if(status===2){
    return arr;
    }
    else{
        return "There are no users who are interested in playing video games";
    }
}

//Q2 Find all users staying in Germany.
function findAllUsersInGermany(){
    let arr={};
    let status=1;
    for (let user in users){
        let a=users[user];
        if(a.hasOwnProperty("nationality")){
        for(let properties in a){
            if(properties === 'nationality'){
                if(a[properties].toLowerCase() === 'germany'){
                    status=2;
                    arr[user]=users[user];

                }
            }
        }
        }
    }
    if(status === 2){
    return arr;
    }
    else{
        return "There are no users staying in Germany";
    }
}

//Q3 Find all users with masters Degree.
function findAllUsersWithMasterDegree(){
    let arr={};
    let status=1;
    for (let user in users){
        let a=users[user];
        if(a.hasOwnProperty("qualification")){
        for(let properties in a){
            if(properties === 'qualification'){
                if(a[properties].toLowerCase().includes('master')){
                    status=2;
                    arr[user]=users[user];

                }
            }
        }
        }
    }
    if(status === 2){
    return arr;
    }
    else{
        return "There are no users with Master's Degree";
    }
}



//Q4 Group users based on their Programming language mentioned in their designation.
function findUsersOnProgrammingLanguage(language="python"){
    if(typeof language === 'string'){
    let pl=language.toLowerCase();
    let arr={};
    let status=1;
    for (let user in users){
        let a=users[user];
        if(a.hasOwnProperty("desgination")){
        for(let properties in a){
            if(properties === 'desgination'){
                if(a[properties].toLowerCase().includes(pl) ){
                    status=2;
                    arr[user]=users[user];

                }
            }
        }
        }
    }
    if(status === 2){
    return arr;
    }
    else{
        return "There are no users with programming language "+language;
    }
}
else{
    console.log("Enter valid Programming language");
}
}

module.exports = { findAllUsers, findAllUsersInGermany, findAllUsersWithMasterDegree, findUsersOnProgrammingLanguage};