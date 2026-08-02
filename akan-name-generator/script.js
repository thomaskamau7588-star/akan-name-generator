const malenames = [
    "Kwasi",    // Sunday
    "Kwadwo",   // Monday
    "Kwabena",  // Tuesday
    "Kwaku",    // Wednesday
    "Yaw",      // Thursday
    "Kofi",     // Friday
    "Kwame"     // Saturday
];

const femalenames = [
    "Akosua",   // Sunday
    "Adwoa",    // Monday
    "Abenaa",   // Tuesday
    "Akua",     // Wednesday
    "Yaa",      // Thursday
    "Afua",     // Friday
    "Ama"       // Saturday
];

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

document.getElementById("birthform").addEventListener("submit", generateAkanName);

function validateInput(day, month, year) {
    const currentYear = new Date().getFullYear();

    if (day < 1 || day > 31) {
        return false;
    }

    if (month < 1 || month > 12) {
        return false;
    }

    if (year < 1900 || year > currentYear) {
        return false;
    }

    return true;
}

function generateAkanName(event) {
    event.preventDefault();

    const birthday = document.getElementById("birthday").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const result = document.getElementById("result");

    if (!birthday || !gender) {
        result.innerHTML = "<p>Please fill in all the fields.</p>";
        return;
    }

    const date = new Date(birthday);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    if (!validateInput(day, month, year)) {
        result.innerHTML = "<p>Please enter a valid date.</p>";
        return;
    }

    const dayIndex = date.getDay();

    let akanName;

    if (gender.value === "male") {
        akanName = malenames[dayIndex];
    } else {
        akanName = femalenames[dayIndex];
    }

    result.innerHTML = `
        <h3>Result</h3>
        <p>You were born on <strong>${days[dayIndex]}</strong>.</p>
        <p>Your Akan name is <strong>${akanName}</strong>.</p>
    `;
}


