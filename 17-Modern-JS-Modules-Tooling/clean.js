'strict mode';
const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendinLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = (limits, user) => (limits?.[user] ? limits?.[user] : 0);

const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  user = user.toLowerCase();

  return value <= getLimit(limits, user)
    ? [...state, { value: -value, description, user: user }]
    : state;
};
const newBudget1 = addExpense(budget, spendinLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(
  newBudget1,
  spendinLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendinLimits, 200, 'Stuff', 'Jay');

const checkExpenses = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );
const finalBudget = checkExpenses(newBudget3, spendinLimits);
console.log(finalBudget);

const logBigExpenses = function (bigLimit, budget) {
  const bigExpenses = budget
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  console.log(bigExpenses);
};

logBigExpenses(100, newBudget3);
