//Testing Active Status//
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
//Choosing character preferences after popup confirm (lower case..upper case...)//
var chosenChars = ""
//Range of Password Length//
var passwordlength = { from: 8, to: 128 }
//Var Definitions to minimize usage of 'var'//
var chooseSymbols
var chooselowerCase
var chooseupperCase
var chooseNumber

var emptyArr = []

// Write password to the #password input//
//DO NOT TOUCH. Separate from rest//
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


  function generatePassword() {
    //Beging Loops until the correct amount (a number between 8-128) is added. Additional prompts to confirm Character Preference//
    passwordlength = (prompt("How many characters would you like your Password to be? Must be betweem 8 to 128 characters and WHOLE NUMBERS only")); {
      //Happened to find out the usage of 'while' by chance. I was stuck on this part for awhile because I wanted my prompts to continue even if a value wasn't correctly added. Instructor was reviewing a JS CheatSheet and as he scrolled through loops, I found 'while.'
      while (isNaN(passwordlength) || (passwordlength < 8) || (passwordlength > 128)) {
        passwordlength = prompt("Please make sure you put a NUMBER that is between 8 and 128")
      } console.log(passwordlength)

      //begin combo choices.. Gathered the IF Sequences from YT and combined it with my confirm pop-up //
      finalcomboPassword = ""

      chooseSymbols = confirm("Do you want Symbols?")
      console.log(chooseSymbols)
      if (chooseSymbols === true) {
        chosenChars += specialSymbols;
      } else chooseSymbols = false

      chooselowerCase = confirm("Do you want Lower Case letters?")
      console.log(chooselowerCase)
      if (chooselowerCase === true) {
        chosenChars += lowerCase;
      } else chooselowerCase = false

      chooseupperCase = confirm("Do you want Upper Case letters?")
      console.log(chooseupperCase)
      if (chooseupperCase === true) {
        chosenChars += upperCase
      } else chooseupperCase = false

      chooseNumber = confirm("Do you want numbers?")
      console.log(chooseNumber)
      if (chooseNumber === true) {
        chosenChars += number
      } else chooseNumber = false
    }
    //Random Math statement combining all to generate final product//
    for (var i = 0; i < passwordlength; i++) {
      finalcomboPassword += chosenChars.charAt(Math.floor(Math.random() * chosenChars.length));
      //tracking method of showing random generator in progress//
      console.log(finalcomboPassword)
    }
    return finalcomboPassword
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {

}

