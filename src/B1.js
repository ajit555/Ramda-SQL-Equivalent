//B1.js
//Task: Get object a from list by property value
//SQL:  select  * from cities where name = 'Chiang Mai'

const R = require('ramda');
const cities = require('./cities.json');

let fnGetObjfromList =
    R.curry(
        (propName, propValue, objList) =>
            R.find(
                R.propEq(propName, propValue)
            )
                (objList)
    );

let city1 = fnGetObjfromList('name')('Bangkok')(cities);
let city2 = fnGetObjfromList('name', 'Chiang Mai')(cities);
let city3 = fnGetObjfromList('name', 'London', cities);
let cityList = [city1, city2, city3]; 
console.log(cityList);