/*
let js = 'amazing';
console.log(10 + 11 + 14 - 7);

let firstName = "Jonas";
console.log(firstName);
let myFirstJob = "Student";
let mySecondJob = "Programmer";
console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year= 1991;
console.log(typeof year);

console.log(typeof null);


let age = 25;
age = 26;

const birthYear = 1997;

// Math Operators
let curentYear = 2037
const ageJonas = curentYear - 1991;
const ageAlex = curentYear - 1997;
console.log(ageJonas, ageAlex);

console.log(ageJonas * 2, ageJonas / 10, ageJonas ** 2);
// ageJonas ** 2 means age to the power of 2 = age 8 age
const firstName = 'Alex';
const lastName = 'Constantin';
const fullName = firstName + " " + lastName;
console.log(fullName);

//Assigment operators
let x = 10 + 5; //15
x += 10;    //x = x + 10
x++; //x = x + 1
x--; //x = x - 1
console.log(x);

//Comparation operators
console.log(ageJonas > ageAlex);
const isFullAge = ageAlex >= 18;
console.log(isFullAge);


let curentYear = 2037
const ageJonas = curentYear - 1991;
const ageAlex = curentYear - 1997;
console.log(curentYear - 1991 > curentYear - 1997);
const averageAge = (ageJonas + ageAlex) / 2;
console.log(ageJonas, ageAlex, averageAge);


//Coding Challange 1

let marksMass = 78;
let marksHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

const marksBMI = marksMass / marksHeight ** 2;
const johnBMI = johnMass / (johnHeight * johnHeight);
const marksHigherBMI = marksBMI > johnBMI;

console.log(marksBMI, johnBMI, marksHigherBMI);


const firstName= "Alex";
const job = "programmer";
const birthYear = 1997;
const year = 2023

const alex = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(alex)

const age = 15;

if (age >= 18) {
    console.log(`Sarah can start drivind license🚗`);
} else {
    console.log(`Sarah is too young. Wait another ${18-age} years`);
};

const birthYear = 1997;
let century
if(birthYear <= 2000) {
     century = 20;
} else {
     century = 21;
}
console.log(century)




//Coding challange 2

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / (johnHeight * johnHeight);

if(markBMI > johnBMI) {
    console.log(`Mark's BMI(${markBMI}) is higher than John's BMI(${johnBMI}).`);
} else {
    console.log(`John's BMI(${johnBMI}) is higher than Mark's BMI(${markBMI}).`);
}

//type convertion
const inputYear = '1997';
console.log(Number(inputYear) + 18);
console.log(String(23));

//type coercion
console.log('1' + 1 - 1) 


console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(-1));
let x = 34 - 670
console.log(Boolean(x));


const age = Number(prompt("What's your age?"))
if(age === 18) {
     console.log(`You just became an adult :D`);
} else if(age > 18) {
    console.log(`You can log in`);
} else{
    console.log(`You just need to wait more ${18-age} years.`);
}


const hasDriversLicence = true;
const hasGoodVision = true;
const isTired = true;

console.log(hasDriversLicence || hasGoodVision);

const shouldDrive = hasDriversLicence && hasGoodVision && !isTired

if(shouldDrive){
    console.log("Sarah is able to drive!")
} else{
    console.log("Someone else should drive")
}




// Coding Challange 3

const avrDolphins = (100 + 100 + 100) / 3;
const avrKoalas = (100 + 100 + 100) / 3;

if(avrDolphins > avrKoalas && avrDolphins >= 100){
    console.log("Winner is Dolphins.")
} else if (avrKoalas > avrDolphins && avrKoalas >= 100){
    console.log("Winner is Koalas.")
} else if(avrDolphins === avrKoalas && avrDolphins >= 100){
    console.log("It's a draw.")
} else {
    console.log("No team wins the trophy.")
}



const day = 'wednesday';

switch (day) {
    case "monday":
        console.log('Plan my course structure');
        console.log('Go to coding meetup!');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend') 
    default:
        console.log('Not a valid day') 
}

if(day === "monday"){
    console.log('Plan my course structure');
        console.log('Go to coding meetup!');
} else if(day === "tuesday"){
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday'){
    console.log('Write code examples');
} else if (day === "friday"){
    console.log('record videos');
} else if (day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the weekend') 
} else{
    console.log('Not a valid day') 
}



const age = 23;
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water')

const drink = age >=18 ? "wine" : "water";


//Coding challange 4

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

*/