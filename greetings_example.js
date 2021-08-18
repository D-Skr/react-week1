/*
Use the strings in the arrays to form a sentence like: "Hi, my name is <Name>."
Be sure to have beginning words of sentences with the proper case.
Console log the result. Show examples for 3 different possibilities. 
Use a different greeting word for each gender.
Use "his" for men, "her" for women, "their" for nonbinary.
Use "my" if the isSelf argument is true
*/

const greetingWords = ["hello", "hi", "hey"];
const prefixes = ["my", "his", "her", "their"];

function firstLetterUpperCase(word) {
  // code below is same as: const upperCaseFirstLetter = word.charAt(0).toUpperCase();
  let firstLetterCapitalized = word.charAt(0);
  firstLetterCapitalized = firstLetterCapitalized.toUpperCase();

  const wordMinusFirstCharacter = word.slice(1);

  return firstLetterCapitalized + wordMinusFirstCharacter;

  // The line of code below does the same as all the code above
  return word.charAt(0).toUpperCase() + word.slice(1);
}

console.log(firstLetterUpperCase("hello!!!"));

/**
 @param {string} name
        name of person
 @parm  {string} gender
        Possible values of "gender" argument are "male", "female", "nonbinary"
 @param {boolean} isSelf
 @returns {string}
          greeting sentence
*/
function greeting(name, gender, isSelf) {
  // do stuff here ...
  return ``; // use template literal for string to return
}

console.log(greeting("Dmitrii", "male", true)); // Hi, my name is Dmitrii
console.log(greeting("Ann", "female", false));
console.log(greeting("Adam", "male", false));
console.log(greeting("Ivanessa", "nonbinary", false));
