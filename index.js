/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function(edible){
  if(this.stomach.length < 10){
    this.stomach.push(edible);
  }
}
Person.prototype.poop = function(){
  this.stomach = [];
}
Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
}

const james =  new Person('James', 31);
const sam = new Person('Sam', 37);
const latoya = new Person('LaToya', 32);

console.log(james.toString());
console.log(sam.toString());
console.log(latoya.toString());

james.eat('Pizza');
james.eat('Taco');
james.eat('Sushi');
james.eat('Burrito');
james.eat('Pasta');
james.eat('Cake');
james.eat('Cookie');
james.eat('Salad');
james.eat('Soup');
james.eat('Crackers');
james.eat('Ramen');

console.log('James stomach', james.stomach);
console.log(james.poop());

console.log('James stomach after using the bathroom', james.stomach);

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, mpg) {
  this.model = model;
  this.milesPerGallon = mpg;
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function(gallons){
  this.tank = this.tank + gallons;
}
Car.prototype.drive = function(distance){
  this.odometer = this.odometer + distance;
  const energy = this.milesPerGallon * this.tank;
  if(distance <= energy){
    this.odometer = this.tank - (distance / this.milesPerGallon);
  }else{
    this.odometer = this.odometer + energy;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer}.`
  };
}

const nissan =  new Car('Nissan', 15);
const chevy =  new Car('Chevy', 18);
const prius =  new Car('Prius', 35);

nissan.fill(5);
nissan.fill(10);
nissan.fill(15);

console.log('Nissan Tank', nissan.tank);

nissan.drive(20);
nissan.drive(20);
nissan.drive(200);


console.log('Nissan odometer', nissan.odometer);
console.log('Nissan mpg', nissan.milesPerGallon);
console.log('Nissan energy', nissan.energy);


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
 Person.call(this, name, age);
 this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play= function(favoriteToy){
  return `${this.name} is playing with ${this.favoriteToy}`;
}

const ben = new Baby("Ben", 1, "puzzle"); 
const amy = new Baby("Amy", 2, "fire truck"); 

console.log('Task 3:', ben.favoriteToy);
console.log(ben.play());
console.log(amy.play());



/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
    these four principles help the developer determine what gets "this"
  1. Global Binding - when in the global scope the value of "this" will be the window/console object
  2. Implicit Binding - whenever a function is called by a preceeding dot, the object left of the dot get the "this"
  3. New Binding - whenever a constructor function is used, "this" refers to the specific instance of the object that is created and returned by the constructor function.
  4. Explicit Binding - whenever JavaScript's "call" or "apply" method is used, this is explicitly defined.
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}