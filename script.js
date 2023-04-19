// Assignment Code
var generateBtn = document.querySelector("#generate");

//arrays of lowercase, Uppercase, numbers and special characters
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generatePassword function
function generatePassword() {

  //prompt user to select password length
  let passwordLength = prompt("choose a password length between 8 and 128 characters: ");

  //if statement to confirm length is between 8 and 128
  if (passwordLength < 8 || passwordLength > 128) {
    alert("invalid entry!, please try again and choose length between 8 and 128")
  }

  else if (passwordLength >= 8 && passwordLength <= 128) {
    //prompt user to choose whether or not to include upppercase
    var choiceUppercase = confirm("Would you like to use uppercase letters?")

    //prompt user to choose whether or not to include lowercase
    var choiceLowercase = confirm("Would you like to use lowercase letters?")

    //prompt user to choose whether or not to include number
    var choiceNumbers = confirm("would you like to use numbers?")

    //prompt user to choose whether or not to include special character
    var choiceCharacter = confirm("would you like to use special characters?")
  }

  var passArray = [];

  if (choiceCharacter) {
    passArray = passArray.concat(specialCharacter);
  }

  if (choiceNumbers) {
    passArray = passArray.concat(numbers);
  }

  if (choiceLowercase) {
    passArray = passArray.concat(lowerAlpha);
  }

  if (choiceUppercase) {
    passArray = passArray.concat(upperAlpha);
  }

  // Empty string to be filled based on for loop selecting random characters from the array
  var randPassword = "";

  for (var i = 0; i < passwordLength; i++) {
    randPassword = randPassword + passArray[Math.floor(Math.random() * passArray.length)];
  }
  return randPassword;

}
