// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// we need just numbers from the Array.
//amplitute is the diference between highest temperature and the lowest temperature of the day(array)

// 1. select just numbers
const findAmplitude = function (arr) {
  let highestTemp = arr[0];
  let lowestTemp = arr[0];
  // 2. find the highest and lowest  temperature
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") continue;
    if (arr[i] > highestTemp) highestTemp = arr[i];
    if (arr[i] < lowestTemp) lowestTemp = arr[i];
  }
  // 3. h temp - l temp
  console.log(highestTemp, lowestTemp);
  const amplitude = highestTemp - lowestTemp;
  return amplitude;
};
console.log(findAmplitude([1, 4, 7, 9, -10]));
console.log(findAmplitude(temperatures));

//PROBLEM 2
// function should now receive two arrays of temperature
// Merge 2 array

const findAmplitude2 = function (t1, t2) {
  const temps = t1.concat(t2);
  let highestTemp = temps[0];
  let lowestTemp = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] > highestTemp) highestTemp = temps[i];
    if (temps[i] < lowestTemp) lowestTemp = temps[i];
  }
  console.log(highestTemp, lowestTemp);
  const amplitude = highestTemp - lowestTemp;
  return amplitude;
};
console.log(findAmplitude2(temperatures, [1, 4, 7, 9, -10]));


const toKelvin = function () {
  const measurement = {
    type: "temperature",
    unit: "celsius",
    value: 10,
    // Number(prompt("Degrees celsius")),
  };
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(toKelvin());

// Using a debugger

const findAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  let highestTemp = 0;
  let lowestTemp = 0;
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] > highestTemp) highestTemp = temps[i];
    if (temps[i] < lowestTemp) lowestTemp = temps[i];
  }
  console.log(highestTemp, lowestTemp);
  const amplitude = highestTemp - lowestTemp;
  return amplitude;
};
const amplitudeBug = findAmplitudeBug([3, 6, 8], [1, 4, 7, 9, 10]);
console.log(amplitudeBug);
*/
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let forecast = `...`;
  for (let i = 0; i < arr.length; i++) {
    forecast += `${arr[i]}ºC in ${i + 1} days...`;
  }
  return forecast;
};
console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
