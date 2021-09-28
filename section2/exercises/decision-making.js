/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
In line 14, condition 1 is the doorChoice, this line of code will execute if this statement is true.
Which means if doorChoice strictly equals one, then the bearClothing will be "hat" because of the variable
assigned on line 15. Line 16 is the outcome if condition 1 is false. That means none of the conditions above
evaluates to true, the assigned variable "scarf" to bearClothing will execute. Another thing to note that there
is only one condition in this scenario.

2. What variable has a new value assigned to it after the first if statement executes?
The variable bearClothing has a new value assigned to it after the first statement executes.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
If we changed the variable doorChoice to equal 3, then the bear will be wearing a 'scarf'

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
Line 27 assigns condition1 of the 'if' statement, which evaluates if the variable bearChoice is strictly equal to 1,
then the computer will print, "You offer the bear your 'hat' and the bear shows you a secret passage out!".
Line 29 assigns condition2 to evaluate when condition 1 is false, but the variable bearChoice is
strictly equal to 2, then the computer will print, "You tell the bear the 'hat' is too small and it starts to cry!".
Line 31 assigns condition 3 to evaluate when condition1 and condition 2 are both false, but the variable bearChoice
is strictly equal to 3, then the computer will print, "You run as fast as you can into the next room. It's full of
snakes!". Line 33 is the else statement, which is what the computer will print when none of conditions, 1, 2, or 3,
evaluates to be true. If the variable bearChoice does not strictly equal to neither 1, 2, or 3, then the computer
will print, "You stay with the bear and becomes it's best friend!".

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
The computer will print, "You run as fast as you can into the next room. It's full of snakes!".

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
The computer will print, " You tell the bear the 'hat' is too small and it starts to cry!".

7. What is your favorite ending?
Choosing to offer my clothing to the bear so that it can show me the way out of the dark room through a secret passage.
*/
