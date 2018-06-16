//import R from 'ramda'
const R = require('ramda');
const cities = require('./data/cities.json');


//==================================================================
//Task: Filter a List Based on Multiple Predicates
//SQL:  select  * from cities where cost < 1050 and humidity > 40 

//to be implemented
let fnFilterListByMultiplePredicates = () => (cities)

let filterdCities = fnFilterListByMultiplePredicates(cities)
console.log(filterdCities);

