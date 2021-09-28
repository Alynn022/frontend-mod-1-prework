/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

//-------------------
// PART 1: Function Syntax
//-------------------

// EXAMPLE: Write a function below that, when called will log "Severus Snape" to the console
function printName() {
  console.log("Severus Snape");
};

printName();
printName();
printName();
printName();
// Since the function was called 4 times, "Severus Snape" will log 4 times.


// YOU DO: Write a function named sayHello that logs to the console "Oh, Hello!"
// Then, call the function 2 times.

function sayHello() {
  console.log("Oh, Hello!")
};

sayHello();
sayHello();

//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.
function greetMe(greeting) {
  console.log(greeting + ', Lynn!');
}

greetMe('Good morning')
greetMe('Good afternoon')
greetMe('Good night')


// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.

function logSum(numOne, numTwo) {
  console.log(numOne + numTwo);
}

logSum(1, 3)
logSum(6, 10)
logSum(10, 12)

// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

function logBestFriendNames(nameOne, nameTwo) {
  console.log(nameOne + " and " + nameTwo + " are BFFs!");
}

logBestFriendNames('Mochi', 'Evee')

//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN: I named the function 'logSum' because the task is to write 2 numbers as arguments,
and log their sum. Each parameter includes the order of the numbers because if we needed
to have more parameters, we can add them infinitely without needing multiple confusing names.
I named the next function 'logBestFriendNames' so that we understand that we're evaluating
best friend names. I named the parameters 'nameOne and nameTwo' because again, if I needed
to add more parameters, I wouldn't be confused with different parameter names.


*/
