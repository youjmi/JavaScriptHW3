console.log("Generator is Active")

// Assignment Code
var generateBtn = document.querySelector("#generate");
//Var Characters//
var specialSymbols = "~!@#$%^&*()_+";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var number = "123456789";
//Gabe mentioned this at the last segment of class to find a way to combo all//
var finalcomboPassword = ""
//Choosing character preferences (lower case..upper case...)//
var chosenChars = ""
//Range of Password Length//
var passwordlength = { from: 8, to: 128 }
//Var Definitions//
var chooseSymbols
var chooselowerCase
var chooseupperCase
var chooseNumber

// Write password to the #password input//
//DO NOT TOUCH. Separate from rest//
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{

function generatePassword() {
  //Beging Loops until the correct amount (a number between 8-128) is added. Additional prompts to confirm Character Preference//
  passwordlength = (prompt("How many characters would you like your Password to be? Must be betweem 8 to 128 characters")); {
    while (isNaN(passwordlength) || (passwordlength < 8 || passwordlength > 128)) {
      passwordlength = parseInt(prompt("Please make sure you put a NUMBER that is between 8 and 128"))
    }
    console.log(passwordlength)

    chooseSymbols = confirm("Do you want Symbols?")
    console.log(chooseSymbols)

    chooselowerCase = confirm("Do you want Lower Case letters?")  
    console.log(chooselowerCase)

    chooseupperCase = confirm("Do you want Upper Case letters?")
    console.log(chooseupperCase)

    chooseNumber = confirm("Do you want numbers?")
    console.log(chooseNumber)
  }
//begin combo choices.. referenced this sequence from YouTube Video //

  finalcomboPassword = ""
  if (chooseSymbols === true) {
    chosenChars += specialSymbols;
  }
  if (chooselowerCase === true) {
    chosenChars += lowerCase;
  }
  if (chooseupperCase === true) {
    chosenChars += upperCase
  }
  if (chooseNumber === true) {
    chosenChars += number
  }
  for (var i = 0; i < passwordlength; i++) {
    finalcomboPassword += chosenChars.charAt(Math.random() * chosenChars.length);
    //tracking method of showing random generator in progress//
    console.log(finalcomboPassword)
  }
  return finalcomboPassword
}
}
