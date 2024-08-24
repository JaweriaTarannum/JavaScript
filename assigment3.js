
// CHAPTER NO 35 TO 38
// ANSWER NO 1
document.getElementById('refresh').addEventListener('click', updateDateTime);

// Function to update the date and time
function updateDateTime() {
    const now = new Date();
    
    // Format the date and time
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    };
    const formattedDateTime = now.toLocaleDateString('en-US', options);

    // Update the content of the paragraph element
    document.getElementById('datetime').innerText = `Current Date & Time: ${formattedDateTime}`;
}

// Initial call to display the date and time when the page loads
updateDateTime();

// ANSWER NO 2
document.getElementById('greeting-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the values from the input fields
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();

    // Call the function to generate the greeting message
    displayGreeting(firstName, lastName);
});

function displayGreeting(firstName, lastName) {
    if (firstName && lastName) {
        // Generate the greeting message
        const greetingMessage = `Hello, ${firstName} ${lastName}! Welcome!`;

        // Display the greeting message
        document.getElementById('greeting').innerText = greetingMessage;
    } else {
        // Handle case where one or both fields are empty
        document.getElementById('greeting').innerText = 'Please enter both first and last names.';
    }
}

// ANSWER NO 3
document.getElementById('sum-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the values from the input fields
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    // Call the function to add the numbers and display the result
    const sum = addNumbers(number1, number2);
    document.getElementById('result1').innerText = `The sum is: ${sum}`;
});

function addNumbers(num1, num2) {
    return num1 + num2;
}

// ANSWER NO 4
document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the values from the input fields
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;

    // Call the function to perform the calculation and display the result
    const result = calculate(num1, num2, operator);
    document.getElementById('result2').innerText = `Result: ${result}`;
});

function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return 'Error: Division by zero';
            }
        default:
            return 'Invalid operator';
    }
}

// ANSWER NO 5
document.getElementById('square-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the value from the input field
    const number = parseFloat(document.getElementById('number').value);

    // Call the square function and display the result
    const result = square(number);
    document.getElementById('result3').innerText = `The square of ${number} is ${result}`;
});

function square(number) {
    return number * number;
}

// ANSWER NO 6
document.getElementById('factorial-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the value from the input field
    const number = parseInt(document.getElementById('number').value, 10);

    // Call the factorial function and display the result
    const result = factorial(number);
    document.getElementById('result4').innerText = `The factorial of ${number} is ${result}`;
});

function factorial(n) {
    if (n < 0) {
        return 'Error: Factorial is not defined for negative numbers';
    } else if (n === 0 || n === 1) {
        return 1; // Base case: 0! = 1 and 1! = 1
    } else {
        return n * factorial(n - 1); // Recursive case
    }
}

// ANSWER NO 7
document.getElementById('count-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the start and end values from the input fields
    const start = parseInt(document.getElementById('start').value, 10);
    const end = parseInt(document.getElementById('end').value, 10);

    // Generate the counting sequence and display the result
    const result = generateCountingSequence(start, end);
    document.getElementById('result5').innerText = result;
});

function generateCountingSequence(start, end) {
    if (start > end) {
        return 'Error: Start number must be less than or equal to end number.';
    }

    let sequence = '';
    for (let i = start; i <= end; i++) {
        sequence += i + ' ';
    }
    return sequence.trim(); // Remove any trailing whitespace
}

// ANSWER NO 8
document.getElementById('hypotenuse-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the base and perpendicular values from the input fields
    const base = parseFloat(document.getElementById('base').value);
    const perpendicular = parseFloat(document.getElementById('perpendicular').value);

    // Call the calculateHypotenuse function and display the result
    const hypotenuse = calculateHypotenuse(base, perpendicular);
    document.getElementById('result6').innerText = `The hypotenuse is: ${hypotenuse}`;
});

function calculateHypotenuse(base, perpendicular) {
    // Inner function to calculate the square of a number
    function calculateSquare(number) {
        return number * number;
    }

    // Calculate the square of the base and perpendicular
    const baseSquared = calculateSquare(base);
    const perpendicularSquared = calculateSquare(perpendicular);

    // Calculate the hypotenuse using the Pythagorean theorem
    const hypotenuseSquared = baseSquared + perpendicularSquared;
    const hypotenuse = Math.sqrt(hypotenuseSquared);

    return hypotenuse;
}


// ANSWER NO 9
function calculateArea() {
    // Get the width and height from the form inputs
    let width = parseFloat(document.getElementById('width').value);
    let height = parseFloat(document.getElementById('height').value);

    // Calculate the area
    let area = width * height;

    // Display the result
    document.getElementById('result7').innerText = `Area of the rectangle: ${area}`;
}

// ANSWER NO 10
function checkPalindrome() {
    // Get the input value
    let inputString = document.getElementById('inputString').value;

    // Clean the input string
    const cleanedString = inputString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Reverse the cleaned string
    const reversedString = cleanedString.split('').reverse().join('');

    // Check if the cleaned string is the same as its reverse
    const isPalindrome = cleanedString === reversedString;

    // Display the result
    document.getElementById('result8').innerText = isPalindrome
        ? `"${inputString}" is a palindrome.`
        : `"${inputString}" is not a palindrome.`;
}

// ANSWER NO 11
function capitalizeWords() {
    // Get the input value
    let inputString = document.getElementById('inputString1').value;

    // Function to capitalize the first letter of each word
    const capitalizeFirstLetterOfEachWord = (str) => {
        return str
            .split(' ') // Split the string into words
            .map(word => 
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalize first letter
            )
            .join(' '); // Join words back into a single string
    };

    // Convert the input string
    let resultString = capitalizeFirstLetterOfEachWord(inputString);

    // Display the result
    document.getElementById('result9').innerText = resultString;
}

// ANSWER NO 12
function findLongestWord() {
    // Get the input value
    let inputString = document.getElementById('inputString2').value;

    // Function to find the longest word
    function getLongestWord(str) {
        let words = str.split(' '); // Split the string into an array of words
        let longestWord = ''; // Initialize an empty string to hold the longest word

        for (let word of words) {
            // Check if the current word is longer than the longestWord
            if (word.length > longestWord.length) {
                longestWord = word;
            }
        }

        return longestWord;
    }

    // Find the longest word in the input string
    let longestWord = getLongestWord(inputString);

    // Display the result
    document.getElementById('result10').innerText = `The longest word is: ${longestWord}`;
}

// ANSWER NO 13
function countOccurrences() {
    // Get the input values
    let inputString = document.getElementById('inputString3').value;
    let inputLetter = document.getElementById('inputLetter').value;

    // Validate input
    if (inputLetter.length !== 1) {
        alert('Please enter exactly one letter.');
        return;
    }

    // Function to count occurrences of a letter
    function countLetterOccurrences(str, letter) {
        let count = 0;
        let lowerStr = str.toLowerCase(); // Convert to lower case
        let lowerLetter = letter.toLowerCase(); // Convert to lower case
        
        for (let char of lowerStr) {
            if (char === lowerLetter) {
                count++;
            }
        }
        
        return count;
    }

    // Get the count of occurrences
    let count = countLetterOccurrences(inputString, inputLetter);

    // Display the result
    document.getElementById('result11').innerText = `The letter "${inputLetter}" appears ${count} times.`;
}

// ANSWER NO 14
function calculateProperties() {
    const radius = document.getElementById("radius").value;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius ** 2;

    document.getElementById("circumference").innerHTML = `The circumference is ${circumference.toFixed(2)}`;
    document.getElementById("area").innerHTML = `The area is ${area.toFixed(2)}`;
  }