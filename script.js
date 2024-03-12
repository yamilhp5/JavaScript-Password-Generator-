var upperCaseABC = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCaseABC = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialSymbols = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function getPasswordOptions() {
  var length = parseInt(prompt("Password must be between 8 and 128 characters! Click OK to continue"), 10);

  if (isNaN(length)) {
    alert("Password length must be a number");
    return null;
  }

  if (length < 8) {
    alert("Password must be at least 8 characters");
    return null;
  }

  if (length > 128) {
    alert("Password must be less than 128 characters");
    return null;
  }

  var hasUpperCase = confirm("Do you want to include Uppercase letters?");
  var hasLowerCase = confirm("Do you want to include Lowercase letters?");
  var hasSymbols = confirm("Do you want to include symbols and/or special characters?");
  var hasNumbers = confirm("Do you want to include numbers?");

  if (!hasUpperCase && !hasLowerCase && !hasSymbols && !hasNumbers) {
    alert("Must select at least one");
    return null;
  }

  var passwordCriteria = {
    length: length,
    hasUpperCase: hasUpperCase,
    hasLowerCase: hasLowerCase,
    hasSymbols: hasSymbols,
    hasNumbers: hasNumbers,
  };

  return passwordCriteria;
}

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var correctCharacters = [];

  if (!options) return null;

  if (options.hasSymbols) {
    possibleCharacters = possibleCharacters.concat(specialSymbols);
    correctCharacters.push(getRandom(specialSymbols));
  }

  if (options.hasLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCaseABC);
    correctCharacters.push(getRandom(lowerCaseABC));
  }

  if (options.hasUpperCase) {
    possibleCharacters = possibleCharacters.concat(upperCaseABC);
    correctCharacters.push(getRandom(upperCaseABC));
  }

  if (options.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    correctCharacters.push(getRandom(numericCharacters));
  }

  for (var i = 0; i < options.length; i++) {
    result[i] = getRandom(possibleCharacters);
  }

  return result.join("");
}

var generateBtn = document.querySelector('#generate');

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);

