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


module.exports = { findAllUsers};