/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog {
};
var dog1 = new Dog()
var dog2 = new Dog()

console.log(dog1)
console.log(dog2)

// Prompt 2: Snack
class Snack {
};

var snack1 = new Snack()
var snack2 = new Snack()

console.log(snack1)
console.log(snack2)

// Prompt 3: Shirt
class Shirt {
};

var shirt1 = new Shirt()
var shirt2 = new Shirt()

console.log(shirt1)
console.log(shirt2)

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class DogType {
  constructor() {
    this.breed = 'corgi'
    this.age = 11
    this.color = 'white'
  }
};
var dogtype1 = new DogType();
console.log(dogtype1);

// Prompt 2: Snack
class SnackTime {
  constructor() {
    this.time = 10
    this.snack = 'fruits'
    this.otherSnack = 'chips'
  }
};
var snackTime1 = new SnackTime();
console.log(snackTime1);

// Prompt 3: Shirt
class ShirtType {
  constructor() {
    this.material = 'cotton'
    this.length = 'short'
    this.color = 'black'
  }
};
var shirt1 = new ShirtType();
console.log(shirt1);
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class DogsAdopted {
  constructor(breed, color, age) {
    this.breed = breed
    this.color = color
    this.age = age
  }
};
var dogAdopted1 = new DogsAdopted('corgi', 'black', 4);
var dogAdopted2 = new DogsAdopted('yorkie', 'brown', 7);
console.log(dogAdopted1);
console.log(dogAdopted2);

// Prompt 2: Snack

class SnacksBought {
  constructor(snackType, amount, dip) {
    this.snackType = snackType
    this.amount = amount
    this.dip = dip
  }
};
var snack1 = new SnacksBought('chips', 30, 'salsa');
var snack2 = new SnacksBought('pretzel', 20, 'cheese');
console.log(snack1);
console.log(snack2);

// Prompt 3: Shirt

class ShirtDesign {
  constructor(anime, inkType, color){
    this.anime = anime
    this.inkType = inkType
    this.color = color
  }
};
var shirtDesign1 = new ShirtDesign('Demon Slayer', 'water based ink', 'black');
var shirtDesign2 = new ShirtDesign('Naruto', 'oil based ink', 'yellow');

console.log(shirtDesign1);
console.log(shirtDesign2);
