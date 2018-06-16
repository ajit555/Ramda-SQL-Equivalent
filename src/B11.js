//==================================================================
// Filter a List Based on Multiple Predicates
// SQL: select  * from cities where cost < 1050 and humidity > 40 

const R = require('ramda');
const cities = require('./data/cities.json');

// Status To be implemented
let fnB3 = () => (cities)

let resultB3 = fnB3(cities)

console.log(resultB3);



// Hint
// carList = array of car objects each with a name, the number of doors, and the miles per gallon
// R.filter(carList)
// const goodMileage = R.propSatisfies(predicate = LTE, objCar.milePerGallon)
// R.filter(carList,goodMileage ) // filters out SUV
// const fourDoors = R.propEquals('door',4)
// R.filter(carList,fourDoors ) //We've lost the compact car, but the SUV is back
// const perfectCarsFilter = R.allPass([ goodMileage, fourDoors])
// R.filter(carList,perfectCarsFilter ) // filters array to only include the four-door sedan with 30 miles per gallon and the hybrid with four doors with 37 miles per gallon.