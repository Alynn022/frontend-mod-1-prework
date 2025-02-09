/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line. Look back
at the directions from Section 1 if you need a refresher on how to do that.
*/
//$ node section2/exercises/comparisons.js
//-------------------
// PART 1: Comparing variables
//-------------------

var numTeachers = 4;
var numStudents = 20;
var stringTeachers = "4";
var numDogs = 0;

// EXAMPLE: log the result of the comparison: is numTeachers greater than numStudents?
console.log("Is numTeachers greater than numStudents?", numTeachers > numStudents);
// this should log: "Is numTeachers greater than numStudents?" false

// YOU DO: log the result of the comparison: is numTeachers less than numStudents?
// this should log: true
console.log("Is numTeachers less than numStudents", numTeachers < numStudents);

// YOU DO: log the result of the comparison: is numTeachers equal to stringTeachers? (use the == operator)
// this should log: true
console.log("Is numTeachers equal to stringTeachers", numTeachers == stringTeachers);
/*
Note: this is an example of type coercion. Although stringTeachers is a string and numStudents is an integer,
this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to
perform this evaluation
*/

// YOU DO: log the result of the comparison: is numTeachers strictly equal to stringTeachers? (use the === operator)
// this should log: false
console.log("Is numTeachers strictly equal to stringTeachers?", numTeachers === stringTeachers);
/*
Note: the strictly equal to operator compares the value of the variable in addition to the type of the variable.
since the numTeachers is an integer value and the stringTeachers is a string value, although they are both equal to 4,
the comparison still evaluates to false.

In JavaScript, it is a best practice to use the strict comparison. It is said that, anytime a developer
thinks they _need_ to use the `==` loose comparison, they are doing something they shouldn't be. To help
you develop good habits that follow best practice, from now on, use the strict comparison.
*/

// YOU DO: log the result of the comparison: is numTeachers not equal to numStudents?
// this should log: true
console.log("Is numTeachers not equal to numStudents?", numTeachers != numStudents);
// YOU DO: log the result of the comparison: is numStudents greater than or equal to 20?
// this should log: true
console.log("Is numStudents greater than or equal to 20?", numStudents >= 20);
// YOU DO: log the result of the comparison: is numStudents greater than or equal to 21?
// this should log: false
console.log("Is numStudents greater than or equal to 21?", numStudents >= 21);
// YOU DO: log the result of the comparison: is numStudents less than or equal to 20?
// this should log: true
console.log("Is numStudents less than or equal to 20?", numStudents <= 20);
// YOU DO: log the result of the comparison: is numStudents less than or equal to 21?
// this should log: true
console.log("Is numStudents less than or equal to 21?", numStudents <= 21);

//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
//YOU DO: Explain.
// Line 76 is asking the computer to determine whether 4 is less than 9, which will print true.
var books = 3;
console.log(4 < books);
// YOU DO: Explain.
// Line 79 assigns the variable 'books' to the integer 3. Line 80 is asking the computer to determine whether 4 is less than books,
// which will print false, because 4 is not less than 3, meaning 4 is not less than books.
var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
// Line 84 assigns the variable 'friends' to the integer 6, while line 85 assigns the variable 'siblings' as the integer 2.
// Line 86 is asking the computer to determine whether 'friends' is greater than 'siblings', based on the assigned variables,
// is 6 greater than 2? Which will print true because 6 is greater than 2, and friends is greater than siblings.
var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
// Line 91 assigns the variable 'attendees' to the integer 9, while line 92 assigns the variable 'meals' to the integer 8.
// Line 93 is asking the computer to determine whether 'attendees' is not equal to 'meals', based on the assigned variables,
// is 9 not equal 8? Which will print true, because 9 is not equal to 8, and attendees is not equal to meals.

//-------------------
// PART 3: Logical Operators
//-------------------

var isHungry = true;
var isHomeworkDone = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && isHomeworkDone);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || isHomeworkDone);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && age);
// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: 1, the answer is one because 'lovesToPlay' can be coerced into False, so it returns the B value, which is 'age'.
//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect? Yes.
