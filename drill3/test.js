const {getCarById, getLastCar, sortCarModel, getCarYears, getOlderCars, getBMWAndAudiCars} = require('./answers.js');

getCarById();
getLastCar();
console.log(sortCarModel());
console.log("Car Years: "+ getCarYears())
console.log(getOlderCars())
console.log(JSON.stringify(getBMWAndAudiCars()))