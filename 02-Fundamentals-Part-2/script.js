'use strict';
/*
function logger(){
    console.log('My name is Alex.');
}

logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(6, 8);
console.log(appleOrangeJuice);

// function declaration
function calcAge1(birthday) {  
    return 2023 - birthday;
}

const age1 = calcAge1(1997);

// function expresion
const calcAge2 = function (birthday){
    return 2023 - birthday;
}
const age2 = calcAge2(1997);


// arrow function
const calcAge3 = birthday => 2023 - birthday;
const age3 = calcAge3(1997);

const yearsUntilRetirement = (birthday, firstName) => {
    const age = 2023 - birthday;
    const retirement = 65 - age;
    return `${firstName} has ${retirement} years to retirement`;
}

console.log(yearsUntilRetirement(1997, "Alex"));



function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces =  cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apple slices and ${orangePieces} orange slices.`;
    return juice
}
console.log(fruitProcessor(2, 3));

const age = birthday => 2023 - birthday

const yearsUntilRetirement = function(birthday, firstName) {
    const retirement = 65 - age(birthday);
    if(retirement > 0 ){
    return `${firstName} has ${retirement} years to retirement`;
    } else {
    return `${firstName} is retired already`;  
    }
}
console.log(yearsUntilRetirement(1997, 'Alex'));


// Codng challange 1
const calcAverage = (a, b, c) => (a + b + c) / 3

function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins >= avgKoalas * 2){
        console.log(`Dolphins win(${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= avgDolphins * 2){
        console.log(`Koalas win(${avgKoalas} vs. ${avgDolphins})`)
    } else {
        console.log('No team wins')
    }
}
checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));


const friends = ['Michael', 'Steven', 'Peter'];

const ys = new Array(1191, 1984, 2008, 2020);

console.log(friends[0], friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay'

const alex = ['Alex', 'Constantin', 2023-1997, friends]

alex[alex.length - 1][friends.length - 1] = 'Sebi'

console.log(alex , friends)

//Exercise
const age = birthday => 2023 - birthday;

const years = [1990, 1967, 2002, 2018];
const ages = [age(years[0]), age(years[1]), age(years[2]), age(years[3])]

console.log(ages)



const friends = ['Michael', 'Steven', 'Peter'];
//Add elements
const newLength = friends.push('Sebi');
console.log(newLength);

friends.unshift('Guy');
console.log(friends);

//Remove elements
const popped = friends.pop();
console.log(popped);
friends.shift()
console.log(friends)

function friend(x){
    if (friends.includes(x)){
        console.log(`You have a friend called ${x}`)
    } else{
        console.log(`${x} is not your friend.`)
    }
}

friend('Steven')


const calcTip = bill => bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2; 

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(bills, tips, totals);


const alex = {
    firstName: 'Alex',
    lastName: "Constantin",
    age: 2023 - 1997, 
    job: 'student',
    friends: ['Peter', 'Sebi', 'Steven']
};

console.log(alex.lastName);
console.log(alex['firstName']);

const nameKey = 'Name';
console.log(alex['first' + nameKey]);
console.log(alex['last' + nameKey]);
alex.location = 'Bucharest';
alex['language'] = 'romanian';

let interestedIn = prompt("What do you want to know about Alex? Choose between firstName, lastName, age, job, and friends.");


if(alex[interestedIn]){
    console.log(alex[interestedIn]);
} else {
    console.log('Wrong request!');
}

console.log(`${alex.firstName} has ${alex.friends.length} friends, and his best friend is called ${alex.friends[0]}.`)


const alex = {
    firstName: 'Alex',
    lastName: 'Constantin',
    birthday: 1997,
    friends: ['Flavian', 'Seb'],
    hasDriverlicense: true,
    // calcAge: function (birthday) {
    //     return 2023 - birthday;
    // }
    // calcAge: function() {
    //     return 2023 - this.birthday;
    // }
    calcAge: function() {
        this.age = 2023 - this.birthday;
        return this.age;
    },
    getSummary: function() {
        this.summary = `${this.firstName} ${this.lastName} is born in ${this.birthday} and is ${this.calcAge()} years old. He ${this.hasDriverlicense ? "" : "doesn't "}have a driver license. His friends are ${this.friends[0]} and ${this.friends[1]}.`;
        return this.summary;
    }
};
console.log(alex.getSummary())
// console.log(alex.calcAge());
// console.log(alex.calcAge(alex.birthday))
//console.log(alex['calcAge'](alex.birthday));

console.log(alex.age);





// Coding challange 3


const mark = {
    fullName: 'Mark Milner',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.BMI = this.mass / this.height ** 2;
        return this.BMI
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.BMI = this.mass / this.height ** 2;
        return this.BMI
    }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.BMI > john.BMI ? `${mark.fullName} BMI(${mark.BMI}) is higher than ${john.fullName} BMI(${john.BMI})` : `${john.fullName} BMI(${john.BMI}) is higher than ${mark.fullName} BMI(${mark.BMI}).`);

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
};

const alex = [
    'Alex',
    "Constantin",
    2023 - 1997, 
    'student',
    ['Peter', 'Sebi', 'Steven'], 
    true 
];

const types =[];

alex.push(25);

for(let i = 0; i < alex.length; i++){
    console.log(alex[i]);

    // types[i] = typeof alex[i];
    types.push(typeof alex[i]);
}
console.log(types)

const years = [1991, 2007, 1969, 2020];
const ages = [];

// const calcAge = year => 2023 - year

// for(let i = 0; i < years.length; i++){
//     ages.push(calcAge(years[i]));
// }

for(let i = 0; i < years.length; i++){
    ages.push(2023 - years[i]);
}
console.log(ages);

//continue and break
console.log('----ONLY STRINGS----')
for(let i = 0; i < alex.length; i++){
    if(typeof alex[i] !== 'string') continue;
    console.log(alex[i]);
}

for(let i = 0; i < alex.length; i++){
    if(typeof alex[i] === 'number') break;
    console.log(alex[i]);
}




const alex = [
    'Alex',
    "Constantin",
    2023 - 1997, 
    'student',
    ['Peter', 'Sebi', 'Steven'], 
];

for(let i = alex.length - 1; i >= 0; i--){
    console.log(i, alex[i]);
}

//Loop inside a loop !!!!!!!!!!!!!!!!!!!!!!!!!

for(let exercise = 1; exercise <= 3; exercise++) {
    console.log(`Starting exercise ${exercise}`);

    for(let rep = 1; rep < 6; rep++){
    console.log(`Exercise ${exercise} : Lifting weight repetition ${rep}`)
    }
}


// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// };

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1
console.log(dice);

while (dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1
    if(dice === 6) console.log('loop is about to end!')
}
console.log(dice)
*/

// Coding Challenge #4
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// tips and totals arrays 😉
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array
// GOOD LUCK 😀


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = bill => bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2; 

for(let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    // we use const because in each iteration a new 'tip' variable is created
    tips.push(tip);
    totals.push(bills[i] + tip);
}

console.log(bills, tips, totals)

const calcAverage = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    sum /= arr.length;
    return sum
}

console.log(calcAverage(totals));
console.log(calcAverage(bills));
console.log(calcAverage(tips));
