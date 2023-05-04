'use strict';
/* 
const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never create a method inside a constructor funcion
  //   this.calcAge = function () {
  //     console.log(2023 - this.birthYear);
  //   };
};

const alex = new Person('Alex', 1997);
console.log(alex);

//new {} is created
//function is called, this ={}
//{} linked to prototype
// function automatically return {}

const sebi = new Person('Sebi', 1988);
const jack = new Person('Jack', 1975);
const jonas = new Person('Jonas', 1989);

console.log(alex instanceof Person);

//Prototypes
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

alex.calcAge();

Person.prototype.species = 'Homo Sapiens';
console.log(alex.species);
console.log(alex.hasOwnProperty('firstName'));
console.log(alex.hasOwnProperty('species'));

// Prototypal Inheritance on Built-In Objects
console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

//Adding methods to arrays

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

///////////////////////////////////////
// Coding Challenge #1


1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀


const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is driving at ${this.speed} km/h.`);
};
Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.make} is driving at ${this.speed} km/h.`);
};

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.break();
mercedes.break();
mercedes.break();
mercedes.break();
mercedes.accelerate();

//Class expression
// const Person = class {};

//class declaration
class Person {
  constructor(fullName, birthday) {
    this.fullName = fullName;
    this.birthday = birthday;
  }
  //instance Methods
  clacAge() {
    console.log(2023 - this.birthday);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2023 - this.birthday;
  }
  //Set a property that already exist
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('hey');
  }
}

const alex = new Person('Alex Constantin', 1997);
alex.clacAge();
console.log(alex.age);

// Setters and Getters
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
Person.hey();

// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();


//Coding Challenge #2

Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h
GOOD LUCK 😀


class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is driving at ${this.speed} km/h.`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is driving at ${this.speed} km/h.`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(miles) {
    this.speed = miles * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.speedUS = 100;
ford.brake();

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(
    `Hi, Iam ${this.name}, born in ${this.birthYear} and I study ${this.course}`
  );
};

const mike = new Student('Mike', 2000, 'Computer Science');
mike.introduce();
mike.calcAge();
console.log(mike);



// Coding Challenge #3
Your tasks:
1. Use a constructor function to implement an Electric Car (called 'EV') as a child
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the
current battery charge in % ('charge' property)
2. Implement a 'chargeBattery' method which takes an argument
'chargeTo' and sets the battery charge to 'chargeTo'
3. Implement an 'accelerate' method that will increase the car's speed by 20,
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
km/h, with a charge of 22%'
4. Create an electric car object and experiment with calling 'accelerate',
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
you 'accelerate'! Hint: Review the definiton of polymorphism 😉
Test data:
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀



const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is driving at ${this.speed} km/h.`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is driving at ${this.speed} km/h.`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} is driving at ${this.speed} km/h with a charge of ${this.charge}%.`
  );
};

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
tesla.chargeBattery(90);
tesla.accelerate();
tesla.brake();

class Person {
  constructor(fullName, birthday) {
    this.fullName = fullName;
    this.birthday = birthday;
  }
  clacAge() {
    console.log(2023 - this.birthday);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }
}

class Student extends Person {
  constructor(fullName, birthday, course) {
    super(fullName, birthday);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthday
      } years old, but as a student I feel more like ${
        2037 - this.birthday + 10
      }`
    );
  }
}
const martha = new Student('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
martha.greet();

// Inheritance Between "Classes": Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();


class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //protected property
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;
  }
  //Public Interface
  getMovements() {
    return this._movements;
  }
  deposit(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan aproved');
    }
  }
}

const acc1 = new Account('Alex', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1);
acc1.getMovements();


//Real ecaptulation
class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      // if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  #approveLoan(val) {
    return true;
  }
}
const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));


class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //protected property
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;
  }
  //Public Interface
  getMovements() {
    return this._movements;
  }
  deposit(val) {
    this._movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan aproved');
      return this;
    }
  }
}
const acc1 = new Account('Alex', 'EUR', 1111);
// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());



//Coding Challenge #4
Your tasks:
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl'
class. Then experiment with chaining!
Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is driving at ${this.speed} km/h.`);
    return this;
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is driving at ${this.speed} km/h.`);
    return this;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} is driving at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%'.`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);

rivian.accelerate().brake().chargeBattery(50).accelerate().brake();
