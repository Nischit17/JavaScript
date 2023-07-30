// Remeber, we're gonna use strict mode in all scripts now!
// 'use strict';

// Installed Prettier

// const x = 23;
// if (x === 23) console.log(23);

// const calcAge = birthYear => 2037 - birthYear;

// PROBLEM:

// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem

/*
- what is temperature amplitude?
ANSWER : The temperature amplitude in JavaScript is the difference between the maximum and minimum temperatures in a given period of time. 
It is calculated by subtracting the minimum temperature from the maximum temperature.

For example, 
  if the maximum temperature in a day is 80 degrees Fahrenheit and the minimum temperature is 60 degrees Fahrenheit, 
  then the temperature amplitude is 20 degrees Fahrenheit.

-  what's a sensor error? and what to do?


// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (Amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp[i] > max) max = curTemp[i];
    if (curTemp[i] < min) min = curTemp[i];
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - with 2 arrays, should we implement functionality twice? NO! just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp[i] > max) max = curTemp[i];
    if (curTemp[i] < min) min = curTemp[i];
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);


const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    value: Number(prompt('Degrees celsius:')),
  };

  // B) FIND BUG
  console.table(measurement);
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY BUG
console.log(measureKelvin());
*/
