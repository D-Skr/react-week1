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
  return word.charAt(0).toUpperCase() + word.slice(1);
}

console.log(firstLetterUpperCase("hello!!!")); // Hello!!

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
  var greetingWord;
  var pronoun;

  if (isSelf == true) {
    greetingWord = greetingWords[0];
    pronoun = prefixes[0];
  } else {
    switch (gender) {
      case "male":
        greetingWord = greetingWords[1];
        pronoun = prefixes[1];
        break;
      case "female":
        greetingWord = greetingWords[2];
        pronoun = prefixes[2];
        break;
      default:
        greetingWord = greetingWords[2];
        pronoun = prefixes[3];
        break;
    }
  }
  greetingWord = greetingWord.charAt(0).toUpperCase() + greetingWord.slice(1);
  return `${greetingWord} ${pronoun} name is ${name}`; // use template literal for string to return
}

console.log(greeting("Dmitrii", "male", true)); // Hi my name is Dmitrii
console.log(greeting("Ann", "female", false));
console.log(greeting("Adam", "male", false));
console.log(greeting("Ivanessa", "nonbinary", false));
