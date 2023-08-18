function countRepeatedLetters(name) {
  let letters = {};
  let repeatedLetters = [];
  let lowercaseName = name.toLowerCase();
  for (let i = 0; i < lowercaseName.length; i++) {
    let letter = lowercaseName[i];
    if (!/[a-z]/i.test(letter)) {
      continue;
    }
    if (letters[letter]) {
      letters[letter]++;
    } else {
      letters[letter] = 1;
    }
    if (letters[letter] > 1 && !repeatedLetters.includes(letter)) {
      repeatedLetters.push(letter);
    }
  }
  let result = "";
  repeatedLetters.forEach((letter) => {
    let count = letters[letter];
    result += `${letter}: ${count} time${count > 1 ? "s" : ""}<br>`;
  });

  return result;
}

let checkButton = document.getElementById("check-button");
let nameInput = document.getElementById("name-input");
let resultContainer = document.getElementById("result");

checkButton.addEventListener("click", () => {
  let name = nameInput.value.trim();
  if (name === "") {
    resultContainer.innerHTML = "Please enter a name/word.";
    return;
  }

  let repeatedLetters = countRepeatedLetters(name);
  if (repeatedLetters) {
    resultContainer.innerHTML = `Repeated letters in your name/word:<br>${repeatedLetters}`;
  } else {
    resultContainer.innerHTML = "No repeated letters found in your name/word.";
  }
});



// countRepeatedLetters Function: This function takes a parameter name, which is the input name or word. It processes the name to count the occurrences of each letter (case-insensitive) and then generates a message indicating which letters were repeated and how many times they were repeated.

// letters: An object used to keep track of the count of each letter.
// repeatedLetters: An array to store letters that are repeated.
// lowercaseName: The input name converted to lowercase to ensure case-insensitive comparison.
// The function then loops through each character in lowercaseName and performs the following:
// If the character is not a letter (using a regular expression /[a-z]/i.test(letter)), it's skipped.
// If the character already exists in letters, its count is incremented; otherwise, a new entry is created in the letters object with a count of 1.
// If the count of the current letter is greater than 1 and the letter is not already in repeatedLetters, it is added to the repeatedLetters array.
// Finally, the function constructs a string result by iterating through repeatedLetters and appending each repeated letter along with its count to the string.
// Event Listeners and UI Interaction:

// The code first retrieves elements from the HTML using document.getElementById and assigns them to variables.
// It adds a click event listener to the "Check" button.
// When the button is clicked, the code performs the following:
// Trims the input value obtained from the input element.
// If the trimmed name is empty, it displays a message prompting the user to enter a name/word.
// Otherwise, it calls the countRepeatedLetters function to obtain a string containing information about repeated letters.
// If there are repeated letters (repeatedLetters is not an empty string), it displays the repeated letters and their counts in the result container. If there are no repeated letters, it indicates that in the result container.