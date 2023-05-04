"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

//Actual app
let currentAccount;
//CREATE USERNAMES

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map(name => name[0])
      .join("");
  });
};
createUsernames(accounts);

//DISPLAY MOVEMENTS

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";
  // Sorting
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `<div class="movements__row">
  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
  <div class="movements__value">${mov}€</div>
</div>;`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

//BALANCE

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((sum, mov) => sum + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

//SUMMARY

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
  const outcomes = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
//updateUI
const updateUI = function (acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

//LOGIN

const login = function (e) {
  //Prevent form from submiting
  e.preventDefault();
  currentAccount = accounts.find(
    acc =>
      (acc.username === inputLoginUsername.value &&
        acc.pin === Number(inputLoginPin.value)) ||
      undefined
  );
  if (currentAccount) {
    //Display UI and message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    //Clear input field
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    //Update UI
    updateUI(currentAccount);
  } else {
    containerApp.style.opacity = 0;
    labelWelcome.textContent = `Wrong user or pin`;
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
  }
};
btnLogin.addEventListener("click", login);

// TRANSFER MONEY

const transferMoney = function (e) {
  e.preventDefault();
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  const amount = Number(inputTransferAmount.value);
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
  inputTransferTo.value = inputTransferAmount.value = "";
  inputTransferAmount.blur();
};

btnTransfer.addEventListener("click", transferMoney);

// DELETE ACCOUNT
const deleteAccount = function (e) {
  e.preventDefault();
  const username = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);
  if (username === currentAccount.username && pin === currentAccount.pin) {
    accounts.splice(accounts.indexOf(currentAccount), 1);
    containerApp.style.opacity = 0;
    labelWelcome.textContent = `Account has been deleted`;
  }
  //Clear input field
  inputCloseUsername.value = inputClosePin.value = "";
  inputClosePin.blur();
};

btnClose.addEventListener("click", deleteAccount);

// REQUEST LOAN
const requestLoan = function (e) {
  e.preventDefault();
  const request = Number(inputLoanAmount.value);
  if (
    request > 0 &&
    currentAccount.movements.some(mov => mov >= request * 0.1)
  ) {
    currentAccount.movements.push(request);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
  inputLoanAmount.blur();
};
btnLoan.addEventListener("click", requestLoan);

//SORT MOVEMENTS ASCENDING
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
//Slice
let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(2));
console.log(arr.slice(-2));
console.log(arr.slice());
//Splice
console.log(arr.splice(0, 2));
console.log(arr);
//Reverse
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());

//Concat
const letters = arr.concat(arr2);
console.log(letters);

//Join
console.log(letters.join("-"));

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.forEach(function (movement) {
  if (movement > 0) console.log(`You deposited ${movement}`);
  else console.log(`You withdrew ${Math.abs(movement)}`);
});
console.log("----------------------------");
// movements.forEach(movement => {
//   if (movement > 0) console.log(`You deposited ${movement}`);
//   else console.log(`You withdrew ${Math.abs(movement)}`);
// });
movements.forEach(function (value, index, array) {
  if (value > 0) console.log(`Movement ${index + 1}: You deposited ${value}`);
  else console.log(`Movement ${index + 1}: You withdrew ${Math.abs(value)}`);
  console.log(array.at(index + 1));
});
//Map
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);
currencies.forEach(function (value, key, map) {
  console.log(`${key} means ${value}`);
});
//Set
const currenciesUnique = new Set(["USD", "EUR", "GBP"]);
currenciesUnique.forEach(function (value, key, map) {
  console.log(value, key, map);
});

// Coding Challenge #1
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// 🐶
// ")
// 4. Run the function for both test datasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far 😉
// GOOD LUCK 😀

const juliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];
const checkDogs = function (dogsJulia, dogsKate) {
  const justDogsJulia = dogsJulia.slice(1, -2);
  const allDogs = justDogsJulia.concat(kateData);
  console.log(allDogs);
  allDogs.forEach(function (age, i) {
    age >= 3
      ? console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`)
      : console.log(`Dog number ${i + 1} is still a puppy`);
  });
};
checkDogs(juliaData, kateData);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;
const movementUSD = movements.map(mov => mov * euroToUsd);
console.log(movementUSD);

const movementsDescription = movements.map(
  (mov, index) =>
    `Movement ${index + 1}: You ${
      mov > 0 ? "deposited" : "withdrew"
    } ${Math.abs(mov)}`
);
console.log(movementsDescription);

const movements = [200, 450, -400, 3000, -650, -130, 70, 130];
const deposits = movements.filter(mov => mov > 0);
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
const balance = movements.reduce((sum, value, i, arr) => sum + value, 100);
console.log(balance);

//Maximum value of array
const maxValue = movements.reduce(
  (max, cur) => (max > cur ? max : cur),
  movements[0]
);
console.log(maxValue);

// Coding Challenge #2
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// GOOD LUCK 😀

const calcAverageHumanAge = function (ages) {
  const averageHumanAge = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((sum, age, _, arr) => sum + age / arr.length, 0);
  console.log(averageHumanAge);
  return averageHumanAge;
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

const euroToUsd = 1.1;
const depositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(depositsUSD);

//Find method
const fistWithdrawal = movements.find(mov => mov < 0);

const account = accounts.find(acc => acc.owner === "Jessica Davis");
console.log(account);

let account;
for (const acc of accounts) {
  if (acc.owner === "Jessica Davis") account = acc;
}
console.log(account);

console.log(movements);
console.log();

const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);


const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, [2]], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());

const accountMovements = accounts.map(acc => acc.movements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const allMovementsSum = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(allMovementsSum);

const overalBalance = accounts
  .flatmap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov);
console.log(overalBalance);


const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort());

console.log(movements);
console.log(
  movements.sort((a, b) => {
    if (a > b) return 1;
    if (b > a) return -1;
  })
);
console.log(movements.sort((a, b) => a - b));
console.log(movements.sort((a, b) => b - a));


// Emprty arrays + fill method
const x = new Array(7);
console.log(x);
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const randomDiceRolls = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 6) + 1
);
console.log(randomDiceRolls);

const a = Array.from("Friends");
console.log(a);
const movementsUI = Array.from(document.querySelectorAll(".movements__value"));
console.log(movementsUI);

// Coding Challenge #4
// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion (see hint).
// Your tasks:
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) 🤓
// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"
// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)
// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects 😉)
// Hints:
// § Use many different tools to solve these challenges, you can use the summary
// lecture to choose between them 😉
// § Being within a range 10% above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended *
// 1.10). Basically, the current portion should be between 90% and 110% of the
// recommended portion.
// Test data:
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];
//1
// current > (recommended * 0.90) && current < (recommended * 1.10)
dogs.forEach(dog => (dog.recommendedFood = dog.weight ** 0.75 * 28));
console.log(dogs);

//2
const sarahDog = dogs.find(dog => dog.owners.includes("Sarah"));
console.log(
  sarahDog.curFood > sarahDog.recommendedFood
    ? "eat too much"
    : "eat too little"
);
//3
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .map(dog => dog.owners)
  .flat();
console.log(ownersEatTooMuch);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

//4
console.log(`${ownersEatTooMuch.join(" and ")} dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")} dogs eat too much!`);

//5
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

//6
console.log(
  dogs.some(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);

//7
const okayAmmount = dogs.filter(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(okayAmmount);

//8
const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(dogsSorted);

//1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, dep) => acc + dep, 0);
console.log(bankDepositSum);
//2.
const deposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;
console.log(deposits1000);

//3
const sumObject = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (obj, mov) => {
      mov > 0 ? (obj.depositSum += mov) : (obj.withdrawalSum += mov);
      return obj;
    },
    { depositSum: 0, withdrawalSum: 0 }
  );
console.log(sumObject);

//4
let string = "a this is a nice title";
const convertTitleCase = function (title) {
  const exceptions = ["and", "the", "a", "an", "for", "to", "but", "at", "by"];
  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(" ");
  return titleCase[0].toUpperCase() + titleCase.slice(1);
};
console.log(convertTitleCase(string));
*/
