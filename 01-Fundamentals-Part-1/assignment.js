// const country = "Romania";
// const continent = "Europe";
// let population = 19;
// console.log(country);
// console.log(continent);
// console.log(population);

// const isIsland = false;
// let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// language = "romana";

// // console.log(population / 2);
// // population++;
// // console.log(population);
// // console.log(population > 6);
// // console.log(population > 33);
// const description = `${country} is in ${continent}, and it's ${population} million people speak ${language}`;
// console.log(description);

// if(population > 33) {
//     console.log(`${country}'s population is above average`);
// } else {
//     console.log(`${country}'s population is ${33 - population} milion below average`);
// }

// // const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

// // if(numNeighbours === 1){
// //     console.log('Only one border!');
// // } else if(numNeighbours > 1) {
// //     console.log('More than 1 border'); 
// // } else {
// //     console.log('No borders');
// // }
// const perfectCountry = language === "english" && population < 50 && !isIsland
// if(perfectCountry){
//     console.log(`You should live in ${country}`)
// } else {
//     console.log(`${country} does not meet your criteria :(`)
// }


// switch(language){
//     case 'chinese':
//     case 'mandarin':
//         console.log('MOST number of native speakers!');
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers');
//         break;
//     case 'english':
//         console.log('3rd place');
//         break;
//     case 'hindi':
//         console.log('Number 4');
//         break;
//     case 'arabic':
//         console.log('5th most spoken language');
//         break;
//     default:
//         console.log('Great language too :D');
// }

// console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average.`)
'use strict'

function describeCountry(country, population, capitalCity) {
    const description = `${country} has ${population} million people and it's capital city is ${capitalCity}.`
    return description
}

const finland = describeCountry("Finland", 6, "Helsinky");
const romania = describeCountry("Romania", 19, "Bucharest");
const usa = describeCountry("USA", 50, "Washington");

const worldPop = 7900;
function percentageOfWorld1(population){
    return population / 7900 * 100 +'%'
}
const romaniaPop = percentageOfWorld1(19);
const chinaPop = percentageOfWorld1(1441);
const finlandPop = percentageOfWorld1(6);
console.log(romaniaPop, chinaPop, finlandPop);

const percentageOfWorld2 = function(population){
    return population / 7900 * 100 +'%'
}
const romaniaPop1 = percentageOfWorld1(19);
const chinaPop1 = percentageOfWorld1(1441);
const finlandPop1 = percentageOfWorld1(6);
console.log(romaniaPop1, chinaPop1, finlandPop1);

const percentageOfWorld3 = population => population / 7900 * 100 +'%';
const romaniaPop3 = percentageOfWorld3(19);
const chinaPop3 = percentageOfWorld3(1441);
const finlandPop3 = percentageOfWorld3(6);
console.log(romaniaPop3, chinaPop3, finlandPop3);

const describePopulation = (country, population) =>`${country} has ${population} million poeple, witch is about ${percentageOfWorld3(population)} of the world.`;

console.log(describePopulation('Romania', 19));

const populations = [19, 1441, 6, 7];
console.log(populations.length === 4);
const percentages = [percentageOfWorld3(19), percentageOfWorld3(1441), percentageOfWorld3(6), percentageOfWorld3(7)];
console.log(percentages);

const neighbours = ['Bulgary', 'Ungary', 'Ucraine', 'Moldova', 'Serbia'];
neighbours.push('Utopia');
neighbours.pop('Utopia');
if(!neighbours.includes('Germany')){
    console.log('Probably not central European country!')
}
neighbours[neighbours.indexOf('Moldova')] = 'Republic of Moldova';

console.log(neighbours);

const myCountry = {
    country: 'Romania',
    capital: 'Bucharest',
    language: 'romanian',
    population: 19,
    neighbours: neighbours,
    // isIsland: neighbours.length === 0 ? true : false,
    isIsland: neighbours ? false : true,




    // checkIsland: function () {
    //     this.isIsland = !Boolean(this.neighbours.length);
    //     },
    // This code appears to be setting the value of the isIsland property of an object to the opposite of the boolean value of the length property of the neighbours array. If the length property is 0 (i.e., if the neighbours array is empty), then the boolean value of this.neighbours.length is false, so the isIsland property will be set to true. If the length property is non-zero (i.e., if the neighbours array is not empty), then the boolean value of this.neighbours.length is true, so the isIsland property will be set to false.




    describe: function(){
        this.description = `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}. ${this.country} ${this.isIsland ? 'is' : "isn't"} a island.`
        return this.description
    }
}
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// console.log(myCountry.checkIsland())
myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);
console.log(myCountry.describe());
console.log(myCountry.isIsland);

for(let voter = 1; voter <= 50; voter++){
    console.log(`Voter number ${voter} is currently voting.`);
}

// const populations = [19, 1441, 6, 7];
const percentages2 = [];

for(let i = 0; i < populations.length; i++){
    percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2)


const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for(let i = 0; i < listOfNeighbours.length; i++){
    for(let i2 = 0; i2 < listOfNeighbours[i].length; i2++){
        console.log(`Neighbour:${listOfNeighbours[i][i2]}`)
    }
}
const percentages3 =[]
let pop1 = 0
while (pop1 < populations.length) {
    percentages3.push(percentageOfWorld1(populations[pop1]));
    pop1++;
}
console.log(percentages3);