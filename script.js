var specialCharactersList = ['!', "\'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '`', '{', '|', '}', '~'];
var numbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCaseLettersList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLettersList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var generateBtn = document.querySelector("#generate");

function options() {

  var passwordLength = parseInt(window.prompt("How many characters would you like your password to be?"));


  if (!passwordLength) {
    window.alert("Must enter a password length.");
    return;
  } 
  
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 and 128 characters.");
    return;
  }


  var ifspecialCharacters = window.confirm("Would you like to include special characters?");
  var ifnumbers = window.confirm("Would you like to include numeric characters?");
  var ifupperCaseLetters = window.confirm("Would you like to include uppercase characters?");
  var iflowerCaseLetters = window.confirm("Would you like to include lowercase characters?");


  if (!ifspecialCharacters && !ifnumbers && !ifupperCaseLetters && !iflowerCaseLetters) {
    window.alert("Please select one of the following character choices.");
    return;
  }

  var userInput = {
    passLength: passwordLength,
    specialChar: ifspecialCharacters,
    numbers: ifnumbers,
    upperCase: ifupperCaseLetters,
    lowerCase: iflowerCaseLetters,
  };

  return userInput;
}

function randomChar(array) {
  var randomNum = Math.floor(Math.random() * array.length);
  return array[randomNum];
};

function generatePassword() {
  var choices = options();


  var charsConcat = [];
  var charsGuarantee = [];
  var charsPassword = [];


  if (choices.specialChar) {
    charsConcat = charsConcat.concat(specialCharactersList);
    charsGuarantee.push(randomChar(specialCharactersList))
  }
  if (choices.numbers) {
    charsConcat = charsConcat.concat(numbersList);
    charsGuarantee.push(randomChar(numbersList))

  }
  if (choices.upperCase) {
    charsConcat = charsConcat.concat(upperCaseLettersList);
    charsGuarantee.push(randomChar(upperCaseLettersList))

  }
  if (choices.lowerCase) {
    charsConcat = charsConcat.concat(lowerCaseLettersList);
    charsGuarantee.push(randomChar(lowerCaseLettersList));
  }

  for (var i = 0; i < choices.passLength; i++) {
    var randomNum = Math.floor(Math.random() * charsConcat.length);
    charsPassword += charsConcat[randomNum];
  }

  for (var i = 0; i < charsGuarantee.length; i++) {
    charsPassword[i] = charsGuarantee[i]
  }
  return (charsPassword);
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
