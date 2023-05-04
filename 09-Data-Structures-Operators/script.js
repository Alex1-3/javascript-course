"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

for (const flight of flights.split("+")) {
  let [type, from, to, time] = flight.split(";");
  type = type.replaceAll("_", " ").trim();
  from = from.slice(0, 3).toUpperCase();
  to = to.slice(0, 3).toUpperCase();
  time = time.replace(":", "h");
  let output = `${
    type.includes("Delayed") ? "⏳" : ""
  } ${type} from ${from} to ${to} (${time})`.padStart(36);
  console.log(output);
}

// Data needed for first part of the section
const weekdays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
const openingHours = {
  //Es6 compute
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[6]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// console.log(openingHours);
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orederDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orederPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otheringredients) {
    let pizzaIngredients = `Your pizza is made with ${mainIngredient}`;
    for (let i = 0; i < otheringredients.length; i++)
      pizzaIngredients += `, ${otheringredients[i]}`;
    pizzaIngredients += `.`;
    console.log(pizzaIngredients);
  },
};
/*
//Split or Join
console.log("a+very+nice+string".split("+"));
const [firstName, lastName] = "Alex Constantin Gabriel".split(" ");
console.log(firstName, lastName);
const newName = ["Mr.", firstName, lastName.toLocaleUpperCase()].join(" ");
console.log(newName);

const passenger = "jessica ann smith davis";

const capitalizeName = function (name) {
  const names = name.split(" ");
  const capitalizeNames = [];
  for (const n of names) {
    capitalizeNames.push(
      n.slice(0, 1).toUpperCase() + n.slice(1).toLowerCase()
    );
    // capitalizeNames.push(n.replace(n[0], n[0].toUpperCase()));
  }
  return capitalizeNames.join(" ");
};
console.log(capitalizeName(passenger));
console.log(capitalizeName("jonas sChemedtmann"));
console.log(capitalizeName("alEx conSTantin"));

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(13, "+").padEnd(26, "+"));
console.log("Alex".padStart(13, "+").padEnd(26, "+"));
const airline = "TAP Air Portugal";
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
// console.log(airline.);
console.log();

const maskCreditCard = cardNumber =>
  (cardNumber + "").slice(-4).padStart((cardNumber + "").length, "X");
console.log(maskCreditCard(1234567890234567));

// Repeat
const message2 = "Bad weather...All departures delayed...";
console.log(message2.repeat(6));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈ ".repeat(n)}`);
};
planesInLine(4);
planesInLine(7);
planesInLine(2);

//Fix capitalization in name
const passenger = "jOnAS";
const passengerCorrect =
  passenger.toLowerCase()[0].toUpperCase() + passenger.toLowerCase().slice(1);
console.log(passengerCorrect);

// Comparing email
const email = "hello@jonas.io";
const loginEmail = " Hello@Jonas.Io \n";
const comparingEmails = function (email1, email2) {
  const trimmedEmail = email1.toLowerCase().trim();
  console.log(trimmedEmail);
  return trimmedEmail === email2;
};
console.log(comparingEmails(loginEmail, email));

//Replacing
const priceEU = "288,97€";
const priceUS = priceEU.replace("€", "$").replace(",", ".").replace("28", "29");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replaceAll("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));

// Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.startsWith("Air"));
console.log(plane.endsWith("neo"));

const checkBaggage = function (items) {
  if (
    items.toLowerCase().includes("gun") ||
    items.toLowerCase().includes("knife")
  )
    console.log("We have a problem");
};
checkBaggage("i have a laptop, some foof and pocket Knife");

console.log(plane[0]);
console.log("B737"[0]);
console.log(airline.length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"));

console.log(airline.slice(4, 7));
//first word
console.log(airline.slice(0, airline.indexOf(" ")));
//last word
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -2));

const checkMiddleSeat = function (seat) {
  const seatLetter = seat.slice(-1);
  if (seatLetter === "B" || seatLetter === "E")
    console.log(`Your seat ${seat} is a middle seat`);
  else console.log(`Your seat ${seat} isn't a middle seat`);
};

checkMiddleSeat("11B");
checkMiddleSeat("12C");
checkMiddleSeat("3E");

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct!"],
  [false, "Try again!"],
]);
console.log(question);

// Converts object to map
const restaurantMap = new Map(Object.entries(restaurant));
console.log(restaurantMap);

//Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt("Answer here"));
alert(question.get(answer === question.get("correct")));

//Convert map to array
console.log([...question]);

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");

console.log(rest.set(2, "Lisbon Portugal"));
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open")
  .set(false, "we are close");

console.log(rest.get(true));
console.log(rest.get("name"));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
rest.get(time > rest.get("open") && time < rest.get("close"));
console.log(rest.has("name"));
rest.delete(2);
console.log(rest.size);
rest.clear();

rest.set([1, 2, 3, "Test"], "test");

//will not work
rest.get([1, 2, 3, "Test"]);
//Will work
const arr = [1, 2, 3];
rest.set(arr, "settings");
rest.set(document.querySelector("h1"), "heading");

console.log(rest);
console.log(rest.get(arr));


const orderSet = new Set(["pasta", "pizza", "pizza", "risotto", "pasta"]);
console.log(orderSet);
console.log(new Set("Jonas"));
console.log(orderSet.size);
console.log(orderSet.has("pizza"));
orderSet.add("garlic bread");
orderSet.delete("risoto");

for (const order of orderSet) console.log(order);

// Example
const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);


//looping over properties name
for (const day of Object.keys(openingHours)) {
  console.log(day);
}

//Looping over properties value
for (const x of Object.values(openingHours)) {
  console.log(x);
}

//Looping entire object
for (const [day, { open, close }] of Object.entries(openingHours)) {
  console.log(`On ${day}  we open at ${open} and close at ${close}`);
}

// optional chaining

console.log(restaurant.openingHous?.monday?.open);

//Example
const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  if (open !== "closed") console.log(`On ${day}, we open at ${open}`);
  else console.log(`On ${day}, we are ${open}`);
}

console.log(restaurant.ordertte?.() ?? "Method doesn't exist");

//Arrays
const user = [{ name: "jonas", email: "alex@gmail.com" }];

console.log(user[0]?.password ?? "user[0]. password doesn't exist");

const rest1 = {
  nem: "Capri",
  numGuests: 0,
};
const rest2 = {
  nem: "La PIazza",
  owner: "Giovanni Rossi",
};



const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// For of loop

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i}: ${el}`);
}

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest2.owner &&= "<ANONYMOUS>";
console.log(rest1);
console.log(rest2);


restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest);
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);

const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;

const guest2 = restaurant.numGuests || 10;
console.log("-----AND-----");
console.log(0 && "Jonas");

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");


//Rest pattern
//for destructuring
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(others);

const [pizza, , rissoto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, rissoto, otherFood);

// const {
//   openingHours: { sat, ...weekDays },
// } = restaurant;
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

// For functions

const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

restaurant.orderPizza(
  "mushrooms",
  "tomatoes",
  "mozzarella",
  "chicken",
  "bacon"
);
restaurant.orderPizza("mushrooms");


const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const str = "Jonas";
const letters = [...str];
console.log(...str);

// const ingridients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt(`Ingredient 2`),
//   prompt(`ingredient 3`),
//   prompt("ingredient 4"),
// ];
// console.log(ingridients);
// restaurant.orederPasta(...ingridients);

//objects
const newRestaurant = { ...restaurant, founder: "Giuseppe", foundedIn: 1998 };
console.log(newRestaurant);
console.log({ ...restaurant });

restaurant.orederDelivery({
  time: "22:30",
  address: "Eclipsei nr. 107",
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orederDelivery({ address: "Oituz 50A", starterIndex: 3 });

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Mutating variables
let a = 11;
let b = 999;
const obj = { a: 24, b: 78, c: 90 };
({ a, b } = obj);
console.log(a, b);

//Nested objects destructuring

const {
  openingHours: {
    fri: { open, close },
  },
} = restaurant;
console.log(open, close);


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

let [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);




// Coding Challenge #1
// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored
// GOOD LUCK 😀

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 1.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const player1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(player1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(`${players[i]} - ${i + 1} - 0.`);
  }
};
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

team1 < team2 && team1 < draw && console.log("Team 1 is more likely to win");
team2 < team1 && teams < draw && console.log("Team 2 is more likely to win");
draw < team1 && draw < team2 && console.log("A draw is more likely");
*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: [
    "Lewandowski",
    "Gnarby",
    "Lewandowski",
    "Lewandowski",
    "Lewandowski",
    "Lewandowski",
    "Hummels",
    "Lewandowski",
    "Hummels",
  ],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 1.25,
    team2: 6.5,
  },
};
/*
//1
for (const [goal, player] of game.scored.entries())
  console.log(`Goal ${goal + 1}: ${player}`);

console.log(Object.values(game.odds));
//2
let avr = 0;
for (const odds of Object.values(game.odds)) {
  avr += odds;
}
avr /= Object.values(game.odds).length;
console.log(avr);
//3

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// BONUS
// WOW I REALLY DO IT MYSELF
const scorers = {};

for (const scorer of game.scored) {
  let goal = 1;
  for (const [alreadyScorer, goals] of Object.entries(scorers)) {
    if (scorer === alreadyScorer) {
      goal += goals;
    }
  }
  scorers[scorer] = goal;
}

// is egual with this better solution

// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

console.log(scorers);
console.log(Object.keys(scorers));


// Coding Challenge #3
// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17:
// ⚽
// GOAL
// GOOD LUCK 😀

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2
gameEvents.delete(64);
console.log(gameEvents);

// 3
const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${Math.trunc(
    time / gameEvents.size
  )} minutes.`
);

// 4
for (const [min, event] of gameEvents) {
  console.log(
    `${min < 45 ? "[FIRST HALF]" : "[SECOND HALF]"} ${min}: ${event}`
  );
}

// Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea 😉
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working 😉
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data!
// GOOD LUCK 😀

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
const button = document.querySelector("button");
const textarea = document.querySelector("textarea");
button.textContent = "Test!";

const tocamelCase = function () {
  for (const [n, word] of textarea.value.split("\n").entries()) {
    let [word1, word2] = word.toLowerCase().split("_");
    word2 = word2[0].toUpperCase() + word2.slice(1);
    let wordUppercase = [word1, word2].join("");
    wordUppercase = wordUppercase.padEnd(20, " ") + "✅".repeat(n + 1);
    console.log(wordUppercase);
  }
};
button.addEventListener("click", tocamelCase);
*/
