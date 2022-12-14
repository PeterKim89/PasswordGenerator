// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create arrays for various character types
var lowercaseCharacter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseCharacter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberCharacter = [0,1,2,3,4,5,6,7,8,9];
// Create a string of special characters, then using the split function to convert the string into an array
// To avoid confusion creating an array with specific characters that relate to strings and escape characters
var specialString =  " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
// convert the string into an array using split
var specialCharacter = specialString.split("");
// wrapper array for user chosen parameters
var chosenParameters = [];
// user input: password length
var passwordLength = 0;
// used to randomly pick between chosen character types
var parameterIndex = 0;
// given input array, push it onto the chosenParameters array
function chosenParameterPush(array) {
  chosenParameters.push(array);
  return chosenParameters;
}

// prompt if lowercase characters are wanted
function lowercaseConfirm()
{
  if (confirm("Click OK to confirm lowercase characters") == true)
  {  
    chosenParameterPush(lowercaseCharacter);
    return chosenParameters;
  }
  else
  {
    return chosenParameters;
  }
}

// prompt if uppercase characters are wanted
function uppercaseConfirm()
{
  if (confirm("Click OK to confirm uppercase characters") == true)
  {
    chosenParameterPush(uppercaseCharacter);
    return chosenParameters;
  }
  else
  {
    return chosenParameters;
  }
}

// prompt if numerical characters are wanted
function numberConfirm()
{
  if (confirm("Click OK to confirm numerical characters") == true)
  {
    chosenParameterPush(numberCharacter);
    return chosenParameters;
  }
  else
  {
    return chosenParameters;
  }
}

// prompt if sepcial characters are wanted
function specialConfirm()
{
  if (confirm("Click OK to confirm special character") == true)
  {  
    chosenParameterPush(specialCharacter)
    return chosenParameters;
  }
  else
  {
    return chosenParameters;
  }
}

// generates a random index between 0 and the number of chosen parameters and returns it
function parameterSelector() {
  parameterIndex = Math.floor(Math.random()*(chosenParameters.length));
  return parameterIndex;
}

// generates a random character from the selected parameter array and returns it
function characterSelector(i) {
  var secondaryIndex = Math.floor(Math.random()*chosenParameters[parameterIndex].length)
  var chosenCharacter = chosenParameters[parameterIndex][secondaryIndex];
  return chosenCharacter;
}

function userInputPrompts()
{
  // reset the array upon activation
  chosenParameters=[];
  // Initial prompt asking for password length which will be stored globally
  passwordLength = prompt("How many characters would you like your password to have?\nEnter a number between 8 and 128.");
  if (passwordLength >= 8 && passwordLength <= 128)
  {
    console.log(typeof(passwordLength));
    lowercaseConfirm();
    uppercaseConfirm();
    numberConfirm();
    specialConfirm();
    // Exception if all prompts are canceled
    if (chosenParameters.length == 0)
    {
      alert("Select at least 1 type of character to include.");
    }
    else
    {
      return chosenParameters;
    }
  }

  // Exception for when password length does not meet the requirement
  else 
  {
    // requires an integer input between 8 and 128
      alert("Please input a number between 8 and 128 characters.");
  }
}

// looping until we reach the desired password length, calling our parameterSelector() and characterSelector() functions to choose a random character. Then appending said character onto our generated password
function generatePassword()
{ 
  // resets generated password to an empty string every time the function is called so as to not infinitely concatenate passwords
  var generatedPassword = "";
  // iterate the given password length, 1 character at a time
  for (i=0; i < passwordLength; i++)
  { 
    generatedPassword = generatedPassword + characterSelector(parameterSelector());
  }
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  // confirms if passwordLength is a valid input, else outputs nothing
  if (passwordLength >= 8 && passwordLength <= 128)
  {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", userInputPrompts);
generateBtn.addEventListener("click", writePassword);