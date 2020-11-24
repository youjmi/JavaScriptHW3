//Testing Active Status//
console.log("Generator is Active")
// Assignment Code
var generateBtn = document.querySelector("#generate");
//Var Characters//
var specialSymbols = "~!@#$%^&*()_+".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase("")
lowerCase.split("")
upperCase.split("")
var number = "123456789".split("");
console.log(number)
//Gabe mentioned this like 3 classes ago... To be able to find a way to combine//
var chosenChars = ""
//Range of Password Length//
var passwordlength = { from: 8, to: 128 }
//Var Definitions to minimize usage of 'var'//
var chooseSymbols
var chooselowerCase
var chooseupperCase
var chooseNumber

var finalOpts = ""


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
      passwordText = ""

      chooseSymbols = confirm("Do you want Symbols?")
      console.log(chooseSymbols)
      if (chooseSymbols === true) {
        chosenChars += specialSymbols;
        // var random= Math.floor(Math.random() * specialSymbols.length)
        finalOpts += specialSymbols[(Math.floor(Math.random() * specialSymbols.length))]
        // console.log(random)
        //console.log(specialSymbols)
      }

///******* math.floor & Remove , */


      chooselowerCase = confirm("Do you want Lower Case letters?")
      console.log(chooselowerCase)
      if (chooselowerCase === true) {
        chosenChars += lowerCase;
        finalOpts += lowerCase[(Math.floor(Math.random() * lowerCase.length))]
      }

      chooseupperCase = confirm("Do you want Upper Case letters?")
      console.log(chooseupperCase)
      if (chooseupperCase === true) {
        chosenChars += upperCase
        finalOpts += upperCase[(Math.floor(Math.random() * upperCase.length))]
      }

      chooseNumber = confirm("Do you want numbers?")
      console.log(chooseNumber)
      if (chooseNumber === true) {
        chosenChars += number
        finalOpts += number[(Math.floor(Math.random() * number.length))]
      
      }

      console.log(finalOpts)

      if (chosenChars.length === 0) {
        chosenChars = alert("No options selected. Please select ONE")
      } else {
        for (var i = 0; i < passwordlength; i++) {
          passwordText += chosenChars.charAt(Math.floor(Math.random() * chosenChars.length));
          //tracking method of showing random generator in progress//
          console.log(passwordText)
        }
      }
      passwordText = finalOpts + passwordText
      passwordText = passwordText.replace(/,/g,)
      passwordText = passwordText.slice (0,passwordlength) //<-- look this up//
      //Random Math statement combining all to generate final product//
      return passwordText
    }
  }
  finalOpts = []
  chosenChars = []
  console.log(chosenChars)
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
}