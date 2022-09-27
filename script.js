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

// wrapper array for user chosen parameters
var chosenParameters = [];
// user input: password length
var passwordLength = 0;
var parameterIndex = 0;
var chosenCharacter;
var generatedPassword;



// generates a random index between 0 and the number of chosen parameters and returns it
function parameterSelector() {
  parameterIndex = Math.floor(Math.random()*(chosenParameters.length));
  return parameterIndex;
}
// generates a random character from the selected parameter array and returns it
function characterSelector() {
  var secondaryIndex = Math.floor(Math.random()*(chosenParameters[parameterIndex].length))
  chosenCharacter = chosenParameters[parameterIndex][secondaryIndex];
  return chosenCharacter;
}

// looping until we reach the desired password length, calling our parameterSelector() and characterSelector() functions to choose a random character. Then appending said character onto our generated password
for (i=0; i < passwordLength; i++)
{ 
  generatedPassword += characterSelector(parameterSelector());  
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
