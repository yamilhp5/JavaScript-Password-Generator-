// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(uppercaseABC, lowercaseABC, specialSymbols, numeric) {
  var keylength = prompt ("Password must be between 8 and 128 characters! Click OK to continue")
  var uppercase = confirm ("Do you want to include Uppercase letters?")
  var lowercase = confirm ("Do you want to include Lowercase letters?")
  var symbols = confirm ("Do you want to include symbols and/or special characters?")
  var numbers = confirm ("Do you want to include numbers?")
  
  
  var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowercaseABC = "abcdefghijklmnopqrstuvwxyz"
  var specialSymbols = "~!@#$%^&*()_+"
  var numeric = "0123456789"
  var password = []; 

 console.log (password, "password")

 if (lowercase) {password += lowercaseABC};
 console.log (password, "password")
 if (uppercase) {password += uppercaseABC};
 console.log (password, "password")
 if (numbers) {passsword += numeric}
 console.log (password, "password")
 if (symbols) (password += specialSymbols);
 console.log (password, "password")

 if (keylength < 8 || keylength > 128) {
  alert("Password must contain at least 8 characters");
  var keylength = prompt ("Password must be between 8 and 128 characters! Click OK to continue");
 };

 if (uppercaseABC === false && lowercaseABC === false && specialSymbols === false && numeric === false) {
  return "Your passsword does not meet the password criteria"
  
 };

  for (let i = 0; i < password; index++) {
    let rng = [Math.floor(Math.random() * password.length )]
    
  }

  

  return password; // return generated password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
