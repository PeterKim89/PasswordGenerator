// Assignment Code
var generateBtn = document.querySelector("#generate");


// Create arrays for various character types
var lowercaseCharacter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseCharacter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberCharacter = [0,1,2,3,4,5,6,7,8,9];
// Create a string of special characters, then using the split function to convert the string into an array
// To avoid confusion creating an array with specific characters that relate to strings and escape characters
var symbolString =  "~`!@#$%^&*()_-+={[}]|\:;\"'<,>.?/"
var specialCharacter = symbolString.split("");

// wrapper array to facilitate choosing a random property later
// possibly unneeded
var parameters = [lowercaseCharacter, uppercaseCharacter, numberCharacter, specialCharacter];

// temp value until user input is coded
var passwordLength = 8;
var parameterIndex = 0;
var parameterMaxValue = 0;
function parameterSelector() {
  parameterIndex = Math.floor(Math.random()*(parameterMaxValue + 1));
  return parameterIndex;
}








// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
