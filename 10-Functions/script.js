"use strict";
// Coding Challenge #2
// This is more of a thinking challenge than a coding challenge 🤓
// Your tasks:
// 1. Take the IIFE below and at the end of the function, attach an event listener that
// changes the color of the selected h1 element ('header') to blue, each time
// the body element is clicked. Do not select the h1 element again!
// 2. And now explain to yourself (or someone around you) why this worked! Take all
// the time you need. Think about when exactly the callback function is executed,
// and what that means for the variables involved in this example.
// (function () {
// const header = document.querySelector('h1');
// header.style.color = 'red';
// })();
// GOOD LUCK 😀
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.body.addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
/*
// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?
// The Complete JavaScript Course 21
// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]
// Hints: Use many of the tools you learned about in this and the last section 😉
// GOOD LUCK 😀
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const answer = Number(
      prompt(`${this.question}\n${this.options.join("\n")}`)
    );
    if (answer !== NaN && answer >= 0 && answer < this.answers.length) {
      this.answers[answer]++;
      this.displayResults();
      this.displayResults("string");
    } else {
      console.log("Not a valid answer");
    }
  },
  displayResults: function (type = "array") {
    if (type === "string")
      console.log(`Poll results are ${this.answers.join(", ")}.`);
    else if (type === "array") {
      console.log(this.answers);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

// const data2 = [1, 5, 3, 9, 6, 1];
poll.displayResults.bind({ answers: [5, 2, 3] })("string");

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 1300 / numPassengers
) {
  const booking = { flightNum, numPassengers, price };
  bookings.push(booking);
  console.log(booking);
};

createBooking("LH123");
createBooking("FO34", undefined, 400);


const flight = "LH234";
const alex = {
  name: "Alex Constantin",
  passport: 2456088134134,
};

const checkIn = function (flightNum, passenger) {
  const passengerCopy = { ...passenger };
  flightNum = "LH999";
  passengerCopy.name = `Mr.` + passengerCopy.name;
  if (passengerCopy.passport === 2456088134134) console.log("Check in!");
  else console.log("Wrong passport!");
};

checkIn(flight, alex);
console.log(flight);
console.log(alex);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000000);
};
newPassport(alex);
console.log(alex);
checkIn(flight, alex);


const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(" ");
  return [first.toUpperCase(), ...other].join(" ");
};
//Higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer("Javascript is the best!", upperFirstWord);
transformer("Javascript is the best!", oneWord);

const high5 = () => console.log("🖐");

document.body.addEventListener("click", high5);



const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet("hey");
console.log(greeterHey);
greeterHey("Alex");

greet("hello")("Alex");
// !!!!!!
const greet2 = greeting => name => console.log(`${greeting} ${name}`);
greet2("hello")("Alex2");


const lufthansa = {
  airLine: "Lufthansa",
  iataCode: "LH",
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airLine} flight ${this.iataCode}${flightNum}.`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Alex Constantin");
lufthansa.book(634, "Alexandra Tugui");
console.log(lufthansa);

const euroWings = {
  airLine: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;
book.call(euroWings, 23, "Sarah wiliams");
book.call(lufthansa, 456, "Mary Cooper");

//Apply method
book.apply(lufthansa, [356, "George Cooper"]);

// Bind method
const bookEW = book.bind(euroWings);
console.log(bookEW);
bookEW(234, "Steven Williams");
book.bind(lufthansa)(234, "Steven Williams");

const book23 = book.bind(euroWings, 23);
book23("Flav");

// With Event listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes, this);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

//Partial application

const addTax = rate => value => value + value * rate;
const addTax2 = addTax(0.23);

// Immediately invoked function expressions
(function () {
  console.log("this will never run again");
  const isPrivate = 23;
})();

(() => console.log("this will ALSO never run again"))();

{
  const isPrivate = 23;
}


//Closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
const booker1 = secureBooking();
booker1();
console.dir(booker);

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
// Reassigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(300, 20);
*/
