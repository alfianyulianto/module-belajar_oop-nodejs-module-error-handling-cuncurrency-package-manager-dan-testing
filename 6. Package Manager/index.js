// const _ = require('lodash'); // Muat build lengkap.

// const arr = [10,7, 5, 11, 9, 4, 12, 87];

// console.log(_.sum(arr));


// function square(n) {
// 	return n * 100
// }
// let resultMap = _.map(arr, square);
// console.log(resultMap);


function minMax(arrayOfNumbers) {
    let currentMin = arrayOfNumbers[0];
    let currentMax = arrayOfNumbers[0];
    for (value of arrayOfNumbers) {
        if (value < currentMin) {
            currentMin = value;
        } else if (value > currentMax) {
            currentMax = value;
        }
    }

    console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);