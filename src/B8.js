// Get object a from list by property value
// SQL:  select  * from cities where name = 'Chiang Mai'

const R = require('ramda');
const cities = require('./data/cities.json');

let fnB1 =
    R.curry(
        (propName, propValue, objList) =>
            R.find(
                R.propEq(propName, propValue)
            )
                (objList)
    );

let city1 = fnB1('name')('Bangkok')(cities);
let city2 = fnB1('name', 'Chiang Mai')(cities);
let city3 = fnB1('name', 'London', cities);
let resultB3 = [city1, city2, city3]; 

console.log(resultB3);