// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//A function called buildaBear with 5 arguments, name, age, fur, clothes, specialPower.
function buildABear(name, age, fur, clothes, specialPower) {
// 4 variables and assign them to strings that include concatenation and interpolation.
//variable declared as greeting assigned as string with interpolation.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
//variable declared as demographics assigned as name and age arguments.
  var demographics = [name, age];
//variable declared as powerSaying assigned to string with concatenation.
  var powerSaying = "Did you know that I can " + specialPower + " ?";
//An object with the following 6 key values, basicInfo, clothes, exterior, cost, sayings, isCuddly
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };
//builtBear return to function caller.
  return builtBear
}
//instance of buildABear
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
//A function called fizzBuzz, with 3 arguments of num1, num2, and range.
function fizzBuzz(num1, num2, range) {
//  a loop that iterates through the list of fizzBuzz.
  for (var i = 0; i <= range; i++) {
//if statement stating condition1, if i modulus of the variable num1
// is strictly equal to zero AND i modulus of num2 strictly equal to Zero
// then the computer should print fizzbuzz.
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
//line 42 is stating condition2, in the scenario that condition1 is false, and if i modulus of the variable num1 strictly equal to
// zero, then computer should print fizz.
    } else if (i % num1 === 0) {
      console.log('fizz');
// line 47 is stating condition3, in the scenarion that condition1 and condition 2 is false
//and i modulus of num2 is strictly equal to 0, then computer should print buzz.
    } else if (i % num2 === 0) {
      console.log('buzz');
//if all conditions are false, then computer will print i.
    } else {
      console.log(i);
    }
  }
}
//first instance of fizzBuzz, num1 equals 3, num2 equals 5, and range equals 100.
//this loop will iterate 100 times and calculate which conditions are met, and then print
// the calculated result.
fizzBuzz(3, 5, 100);
//second instance of fizzBuzz, num1 equals 5, num2 equals 8, and range equals 400.
fizzBuzz(5, 8, 400);
