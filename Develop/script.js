// Assignment Code 
var specialCharactersList = ['!', "\'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '`', '{', '|', '}', '~'];
var numbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCaseLettersList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLettersList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(specialCharactersList);
console.log(numbersList);
console.log(upperCaseLettersList);
console.log(lowerCaseLettersList);

function options() {
  // Creation of Password length integer
  var passwordLength = parseInt(window.prompt("How many characters would you like your password to be?"));
  console.log(passwordLength);
  // Storing whether or not the user wants the following in their password
  var ifspecialCharacters = window.confirm("Would you like to include special characters?");
  var ifnumbers = window.confirm("Would you like to include numeric characters?");
  var ifupperCaseLetters = window.confirm("Would you like to include uppercase characters?");
  var iflowerCaseLetters = window.confirm("Would you like to include lowercase characters?");

  console.log(ifspecialCharacters);
  console.log(ifnumbers);
  console.log(ifupperCaseLetters);
  console.log(iflowerCaseLetters);

  // Creation of object with stored elements
  var userInput = {
    passLength: passwordLength,
    specialChar: ifspecialCharacters,
    numbers: ifnumbers,
    upperCase: ifupperCaseLetters,
    lowerCase: iflowerCaseLetters,
  };

  console.log(userInput);
  // Returns object to the caller
  return userInput;
}

var generateBtn = document.querySelector("#generate");
// Create function generatePassword
function generatePassword() {
  var choices = options();

  if (!choices) {
      return;
  }

  var charsConcat = [];
  var charsPassword = [];

  console.log(charsConcat);
  console.log(charsPassword);

  if (choices.specialChar) {
    charsConcat = charsConcat.concat(specialCharactersList);
  }
  if (choices.numbers) {
    charsConcat = charsConcat.concat(numbersList);
  }
  if (choices.upperCase) {
    charsConcat = charsConcat.concat(upperCaseLettersList);
  }
  if (choices.lowerCase) {
    charsConcat = charsConcat.concat(lowerCaseLettersList);
  }
  console.log(charsConcat);
  console.log(charsConcat.length);
  console.log(choices.passLength);

  for (var i = 0; i < choices.passLength; i++) {
    var randomNum = Math.floor(Math.random() * charsConcat.length);
    charsPassword = charsConcat[randomNum];
  }
 //*** troubleshoot this ***  console.log(charsPassword);
  // return aPassString; // "fsajdfhsakdjfs"
};

generatePassword();



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
