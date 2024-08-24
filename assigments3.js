// CHAPTER NO 31 TO 34
// ANSWER NO 1
function updateDateTime() {
    const now = new Date();
    const datetime = now.toLocaleString();
    document.getElementById("datetime").innerHTML = datetime;
  }

  updateDateTime();
  setInterval(updateDateTime, 1000); // update every 1 second

//   ANSWER NO 2
function showCurrentMonth() {
    const now = new Date();
    const monthIndex = now.getMonth(); // getMonth() returns a zero-based index (0 = January, 11 = December)
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const currentMonth = months[monthIndex];
    alert(`Current month is ${currentMonth}`);
}
// ANSWER NO 3
function showDayAbbreviation() {
    const now = new Date();
    const dayIndex = now.getDay(); // getDay() returns a zero-based index (0 = Sunday, 6 = Saturday)
    const days = [
        'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
    ];
    const dayAbbreviation = days[dayIndex];
    alert(`Today is ${dayAbbreviation}`);
}
// ANSWER NO 4
function displayFunDayMessage() {
    const now = new Date();
    const dayIndex = now.getDay(); // getDay() returns a zero-based index (0 = Sunday, 6 = Saturday)
    
    // Check if today is Saturday (6) or Sunday (0)
    if (dayIndex === 6 || dayIndex === 0) {
        document.getElementById('message').textContent = "It’s Fun day";
    } else {
        document.getElementById('message').textContent = "It’s not Fun day";
    }
}

// Display the message when the page loads
displayFunDayMessage();
// ANSWER NO 5
function displayDateMessage() {
    const now = new Date();
    const dayOfMonth = now.getDate(); // getDate() returns the day of the month (1 - 31)
    
    const message = dayOfMonth < 16 
        ? "First fifteen days of the month" 
        : "Last days of the month";
    
    document.getElementById('message2').textContent = message;
}

// Display the message when the page loads
displayDateMessage();
// ANSWER NO 6
// Calculate minutes since midnight, Jan. 1, 1970
function calculateMinutesSinceEpoch() {
    const now = new Date();
    const epoch = new Date(0); // Midnight, Jan. 1, 1970
    const minutesSinceEpoch = Math.floor((now - epoch) / (1000 * 60)); // Convert milliseconds to minutes
    return minutesSinceEpoch;
}

// Assign the value to a variable
const minutes = calculateMinutesSinceEpoch();

// Display the result on the webpage
document.getElementById('minutes-display').textContent = `Minutes since midnight, Jan. 1, 1970: ${minutes}`;
// ANSWER NO 7
function checkTime() {
    const now = new Date();
    const hours = now.getHours(); // Get the current hour (0-23)
    
    if (hours < 12) {
        alert("It's AM");
    } else {
        alert("It's PM");
    }
}
// ANSWER NO 8
// Create a Date object for the last day of the last month of 2020
const laterDate = new Date(2020, 11, 31); // Month is zero-based, so 11 represents December

// Display the date in a readable format
document.getElementById('date-display').textContent = `The last day of 2020 is: ${laterDate.toDateString()}`;
// ANSWER NO 9
// script.js
document.getElementById('calculateDays').addEventListener('click', function() {
    // Date of 1st Ramadan
    const firstRamadan = new Date('June 18, 2015');

    // Current date
    const today = new Date();

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = today - firstRamadan;

    // Convert milliseconds to days
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

    // Alert the number of days
    alert(`Number of days since 1st Ramadan (June 18, 2015): ${differenceInDays}`);
});
// ANSWER NO 10
// script.js
document.getElementById('calculateSeconds').addEventListener('click', function() {
    // Get the reference date from the input
    const referenceDateInput = document.getElementById('referenceDate').value;
    
    if (!referenceDateInput) {
        alert('Please select a reference date.');
        return;
    }

    // Convert the reference date from the input to a Date object
    const referenceDate = new Date(referenceDateInput);

    // Define the start of 2015
    const startOf2015 = new Date('January 1, 2015 00:00:00');

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = referenceDate - startOf2015;

    // Convert milliseconds to seconds
    const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);

    // Display the result
    document.getElementById('result').textContent = `Seconds elapsed between the beginning of 2015 and the selected date: ${differenceInSeconds}`;
});
// ANSWER NO 11
// script.js
document.getElementById('manipulateDate').addEventListener('click', function() {
    // Create a Date object for the current date and time
    const currentDate = new Date();

    // Extract the hours
    const hours = currentDate.getHours();

    // Create a new Date object an hour ahead
    const newDate = new Date(currentDate);
    newDate.setHours(currentDate.getHours() + 1);

    // Display the original and new date
    const resultElement = document.getElementById('result2');
    resultElement.innerHTML = `
        <strong>Current Date and Time:</strong> ${currentDate.toString()}<br>
        <strong>Current Hours:</strong> ${hours}<br>
        <strong>Updated Date and Time (1 hour ahead):</strong> ${newDate.toString()}
    `;
});
// ANSWER NO 12
// script.js
document.getElementById('showDate').addEventListener('click', function() {
    // Create a Date object for the current date and time
    const currentDate = new Date();
    
    // Reset the Date object to 100 years back
    const pastDate = new Date(currentDate);
    pastDate.setFullYear(currentDate.getFullYear() - 100);
    
    // Show the past date in an alert box
    alert(`Date 100 years back: ${pastDate.toDateString()}`);
});
// ANSWER NO 13
// script.js
document.getElementById('calculateBirthYear').addEventListener('click', function() {
    // Get the age input value
    const ageInput = document.getElementById('age').value;
    
    // Check if the input is valid
    if (!ageInput || isNaN(ageInput) || ageInput <= 0) {
        document.getElementById('result3').textContent = 'Please enter a valid age.';
        return;
    }

    // Calculate the birth year
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - ageInput;

    // Display the birth year
    document.getElementById('result3').textContent = `You were born in ${birthYear}.`;
});
// script.js
document.getElementById('generateBill').addEventListener('click', function() {
    // Retrieve input values
    const customerName = document.getElementById('customerName').value;
    const currentMonth = document.getElementById('currentMonth').value;
    const numberOfUnits = parseFloat(document.getElementById('numberOfUnits').value);
    const chargesPerUnit = parseFloat(document.getElementById('chargesPerUnit').value);

    // Constants
    const latePaymentSurcharge = 50; // Example surcharge amount

    // Validate inputs
    if (isNaN(numberOfUnits) || isNaN(chargesPerUnit) || numberOfUnits < 0 || chargesPerUnit < 0) {
        alert('Please enter valid numbers for units and charges per unit.');
        return;
    }

    // Calculate amounts
    const netAmountPayable = numberOfUnits * chargesPerUnit;
    const grossAmountPayable = netAmountPayable + latePaymentSurcharge;

    // Round amounts to 2 decimal places
    const roundedNetAmountPayable = netAmountPayable.toFixed(2);
    const roundedLatePaymentSurcharge = latePaymentSurcharge.toFixed(2);
    const roundedGrossAmountPayable = grossAmountPayable.toFixed(2);

    // Display results
    document.getElementById('displayCustomerName').textContent = customerName;
    document.getElementById('displayCurrentMonth').textContent = currentMonth;
    document.getElementById('displayNumberOfUnits').textContent = numberOfUnits.toFixed(2);
    document.getElementById('displayChargesPerUnit').textContent = chargesPerUnit.toFixed(2);
    document.getElementById('displayNetAmountPayable').textContent = `₹${roundedNetAmountPayable}`;
    document.getElementById('displayLatePaymentSurcharge').textContent = `₹${roundedLatePaymentSurcharge}`;
    document.getElementById('displayGrossAmountPayable').textContent = `₹${roundedGrossAmountPayable}`;

    // Show the bill details
    document.getElementById('billDetails').classList.remove('hidden');
});


