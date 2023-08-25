function validateForm() {
    let fname = document.forms[`myForm`][`fname`].value;
    let lname = document.forms[`myForm`][`lname`].value;
    let country = document.forms[`myForm`][`country`].value;

    if (!validateInput(fname)) {
        alert(`Please enter a valid First Name...`);
        console.log(`Please enter a valid First Name...`);
        return false;
    }

    if (!validateInput(lname)) {
        alert(`Please enter a valid Last Name...`);
        console.log(`Please enter a valid Last Name...`);
        return false;
    }

    if (country == `default`) {
        alert(`Please select a valid Country!`);
        console.log(`Please select a valid Country!`);
        return false;
    }

    return true;
}

function validateInput(input) {
    //regex pattern
    // Only allow upperCase, lowerCase letters and spaces 
    const pattern = /^[A-za-z\s]+$/;
    return pattern.test(input);
}