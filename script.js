// Assignment Code
var generateBtn = document.querySelector("#generate");


// Create arrays for various character types
var lowercaseCharacter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseCharacter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberCharacter = [0,1,2,3,4,5,6,7,8,9];
// Create a string of special characters, then using the split function to convert the string into an array
// To avoid confusion creating an array with specific characters that relate to strings and escape characters
var symbolString =  " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
var specialCharacter = symbolString.split("");

// wrapper array for user chosen parameters
var chosenParameters = [];
// user input: password length
var passwordLength = 0;
var parameterIndex = 0;
var chosenCharacter;
var generatedPassword = "";


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
function generatePassword()
{
  // resets generated password to an empty string every time the function is called so as to not infinitely concatenate passwords
  generatedPassword = "";
  for (i=0; i < passwordLength; i++)
  { 
    //generatedPassword += characterSelector(parameterSelector());  
    var tempPS = parameterSelector();
    var tempCS = characterSelector();

    console.log("This is current index: " + i + " This is tempPS: " + tempPS + " and this is tempCS: " + tempCS)
    generatedPassword = generatedPassword + tempCS;
    console.log("This is current password: " + generatedPassword);
  }
  return generatedPassword;
}

// test run
passwordLength = 8;
chosenParameters = [lowercaseCharacter, uppercaseCharacter, numberCharacter, specialCharacter];
console.log(generatePassword());
console.log("*******************")
// end test run

// Function requires a return statement to not instantly activate upon page load
// function myTestFunction()
// {
//   alert("Test");
//   return;
// }

function userInputPrompts()
{
  // Initial prompt asking for password length which will be stored globally
  passwordLength = prompt("How many characters would you like your password to have?\nEnter a number between 8 and 128.");
  if (passwordLength >= 8 && passwordLength <= 128)
  {
    if (confirm("Click OK to confirm lowercase characters") == true)
    {
      alert("Yes this works");
    }
    else
    {
      alert("Boo you suck");
    }
  }

  // Exception for when password length does not meet the requirement
  else 
  {
    // if less than 8 characters long
    if (passwordLength < 8)
    {
      alert("Password length should be at least 8 characters long.");
    }
    // if more than 128 characters long
    else
    {
      alert("Password length should be less than 128 characters long.");
    }
  }
  return;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

//generateBtn.addEventListener("click", myTestFunction);
generateBtn.addEventListener("click", userInputPrompts);
generateBtn.addEventListener("click", writePassword);
