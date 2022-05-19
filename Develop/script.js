// Assignment Code 
var specialCharacters = ['!', "\'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '`', '{', '|', '}', '~'];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(specialCharacters);
console.log(numbers);
console.log(upperCaseLetters);
console.log(lowerCaseLetters);

function options() {
  var passwordLength = parseInt(window.prompt("How many characters would you like your password to be?"));
  console.log(passwordLength);
  
  var ifspecialCharacters = window.confirm("Would you like to include special characters?");
  var ifnumbers = window.confirm("Would you like to include numeric characters?");
  var ifupperCaseLetters = window.confirm("Would you like to include uppercase characters?");
  var iflowerCaseLetters = window.confirm("Would you like to include lowercase characters?");
  
  console.log(ifspecialCharacters);
  console.log(ifnumbers);
  console.log(ifupperCaseLetters);
  console.log(iflowerCaseLetters);

  var userInput = {
    length: passwordLength,
    numbers: ifnumbers,
    upperCase: ifupperCaseLetters,
    lowerCase: iflowerCaseLetters,
    specialChar: ifspecialCharacters,
  }
  console.log(userInput)
  return userInput;
}
options();
var generateBtn = document.querySelector("#generate");
// Create function generatePassword
function generatePassword() {
  var choices = options()
  var chars_concat = [];
  var chars_password = [];

  console.log(chars_concat)


  for (var i = 0; i < passwordLength; i++) {
    var randomNum = Math.floor(Math.random() * chars_concat.length);
    chars_password[randomNum]

  }



  return aPassString; // "fsajdfhsakdjfs"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
