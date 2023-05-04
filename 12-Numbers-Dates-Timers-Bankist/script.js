'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2023-01-15T23:36:17.929Z',
    '2023-01-16T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');

const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
//Actual app
let currentAccount, timer;
//CREATE USERNAMES

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const formattedBalance = (acc, money) =>
  new Intl.NumberFormat(acc.locale, {
    style: 'currency',
    currency: acc.currency,
  }).format(money);

const formatMovementsDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.abs(date1 - date2) / (1000 * 60 * 60 * 24);
  const daysPassed = Math.round(calcDaysPassed(new Date(), date));
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

//DISPLAY MOVEMENTS

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  // Sorting
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movs.forEach(function (mov, i) {
    const date = new Date(acc.movementsDates[i]);
    const dateDisplay = formatMovementsDate(date, acc.locale);
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
  <div class="movements__date">${dateDisplay}</div>
  <div class="movements__value">${formattedBalance(acc, mov)}</div>
</div>;`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//BALANCE

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((sum, mov) => sum + mov, 0);
  labelBalance.textContent = `${formattedBalance(acc, acc.balance)}`;
};

//SUMMARY

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${formattedBalance(account, incomes)}`;
  const outcomes = Math.abs(
    account.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0)
  );
  labelSumOut.textContent = `${formattedBalance(account, outcomes)}`;
  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${formattedBalance(account, interest)}`;
};

//Update date

const updateDate = function (locale = navigator.language) {
  const now = new Date();
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    weekday: 'long',
  };
  labelDate.textContent = Intl.DateTimeFormat(locale, options).format(now);
};

//Logout Timer
const startLogOutTimer = function () {
  let time = 300;
  const LogOutTimer = function () {
    const min = String(Math.floor(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;
    if (time === 0) {
      // containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Log in to get started';
      clearInterval(timer);
    }
    --time;
  };
  LogOutTimer();
  const timer = setInterval(LogOutTimer, 1000);
  return timer;
};
//updateUI
const updateUI = function (acc) {
  displayMovements(acc);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
  updateDate(acc.locale);
  if (timer) clearInterval(timer);
  timer = startLogOutTimer();
};

//LOGIN

const login = function (e) {
  //Prevent form from submiting
  e.preventDefault();
  currentAccount = accounts.find(
    acc =>
      (acc.username === inputLoginUsername.value &&
        acc.pin === +inputLoginPin.value) ||
      undefined
  );
  if (currentAccount) {
    //Display UI and message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //Clear input field
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    //Update UI
    updateUI(currentAccount);
  } else {
    containerApp.style.opacity = 0;
    labelWelcome.textContent = `Wrong user or pin`;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
  }
};
btnLogin.addEventListener('click', login);

// TRANSFER MONEY

const transferMoney = function (e) {
  e.preventDefault();
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  const amount = +inputTransferAmount.value;
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    updateUI(currentAccount);
  }
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();
};

btnTransfer.addEventListener('click', transferMoney);

// DELETE ACCOUNT
const deleteAccount = function (e) {
  e.preventDefault();
  const username = inputCloseUsername.value;
  const pin = +inputClosePin.value;
  if (username === currentAccount.username && pin === currentAccount.pin) {
    accounts.splice(accounts.indexOf(currentAccount), 1);
    containerApp.style.opacity = 0;
    labelWelcome.textContent = `Account has been deleted`;
  }
  //Clear input field
  inputCloseUsername.value = inputClosePin.value = '';
  inputClosePin.blur();
};

btnClose.addEventListener('click', deleteAccount);

// REQUEST LOAN
const requestLoan = function (e) {
  e.preventDefault();
  const request = Math.floor(inputLoanAmount.value);
  if (request > 0 && currentAccount.movements.some(mov => mov >= request * 0.1))
    setTimeout(() => {
      currentAccount.movements.push(request);
      //Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUI(currentAccount);
    }, 5000);

  inputLoanAmount.value = '';
  inputLoanAmount.blur();
};
btnLoan.addEventListener('click', requestLoan);

//SORT MOVEMENTS ASCENDING
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
  if (timer) clearInterval(timer);
  timer = startLogOutTimer();
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*


console.log(23 === 23.0);
//Conversion
console.log(Number('23'));
console.log(+'23');

//Parsing
console.log(Number.parseInt('30px'));
console.log(Number.parseInt('3h44m'));

console.log(Number.parseFloat('2.5rem'));

console.log(Number.isNaN('23'));

//Check if a value is a number
console.log(Number.isFinite(23));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.6));


console.log(Math.sqrt(25));

console.log(Math.max(5, 6, 9, 10, 15));
console.log(Math.min(3, 9, 4, 123, 3, 1));
console.log(Math.PI);

//RANDOM NUMBER BETWEEN 2 VALUES
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(45, 48));

// Rounding integers
Math.trunc(23.6);
console.log(Math.round(23.5));
console.log(Math.ceil(23.1));
console.log(Math.round(23.3));
console.log(Math.round(23.8));

// Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.745434352).toFixed(3));
console.log((2.7).toFixed(5));
console.log();
console.log();
console.log();


//Remainder operator
console.log(5 % 2);
console.log(8 % 3);

const isEven = n => (n % 2 ? 'even' : 'odd');
console.log(isEven(2));
console.log(isEven(3));

//Numeric separators
const diameter = 287_000_000_000;
console.log(32543254365465646435435435476767764354n);

//Create a date
const now = new Date();
console.log(now);

console.log(new Date('Tue Jan 17 2023 12:57:21'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2230, 10, 31, 15, 65, 3));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

//Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
const now = new Date();
console.log((future - now) / (1000 * 60 * 60 * 24));

const num = 388846.23;
const options = {
  style: 'unit',
  unit: 'mile-per-hour',
};
console.log(new Intl.NumberFormat('ro-RO', options).format(num));

const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ingr1, ingr2) =>
    console.log(`here is your pizza with: ${ingr1} and ${ingr2}`),
  3000,
  ...ingredients
);
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

const clock = setInterval(function () {
  const now = new Date();
  console.log(
    new Intl.DateTimeFormat('ro-RO', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }).format(now)
  );
}, 1000);
*/
let i = 0;
const timer1 = setInterval(function () {
  console.log(++i);
  if (i === 5) clearInterval(timer1);
  console.log('post-interval'); //this will still run after clearing
}, 200);
