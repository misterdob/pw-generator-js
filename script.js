// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  const criteriaTypes = [];

  prompt("What kind of criteria would you like to include?");
  prompt("Specify criteria here");

  // prompt the user for password criteria
  // prompt the user for which criteria to include (lowercase uppercase etc)
  //

  let eventualPassword = "The final password...";

  return eventualPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
