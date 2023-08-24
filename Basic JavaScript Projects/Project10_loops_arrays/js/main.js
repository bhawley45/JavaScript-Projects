function Call_Loop() {
    let x = 0;
    while (x <= 10) {
        console.log(x); // Print the value of x to the console
        x++;
    }
}


// Instrument list section

var _Instruments = ["Guitar", "Piano", "Violin"];
var sortedInstruments = ``;

function forLoop() {
    for (let i = 0; i < _Instruments.length; i++) {
        sortedInstruments += _Instruments[i] + `<br>`;
    }
    document.getElementById(`List_of_Instruments`).innerHTML = sortedInstruments;
}

var _Dogs = ["Poodle", "Labrador", "PitBull", "Retriever"];
var sortedDogs = ``;

function arrayFunction() {
    for (let i = 0; i < _Dogs.length; i++) {
        sortedDogs += _Dogs[i] + `<br>`;
    }
    document.getElementById(`Array`).innerHTML = sortedDogs;
}


const myObject = {
    name: "John",
    age: 30,
    occupation: "Developer"
};

let otherObject = {
    name: "Steve",
    age: 256,
    occupation: "Developer"
};

// Change property value
myObject.age = 31;

// Add a new property
myObject.location = "New York";

function constantFunction() {
    const output = `Name: ${myObject.name}, Age: ${myObject.age}, Occupation: ${myObject.occupation}, Location: ${myObject.location}`;
    document.getElementById("Constant").innerHTML = output;
}

function letFunction() {
    const output = `Name: ${otherObject.name}, Age: ${otherObject.age}, Occupation: ${otherObject.occupation}`;
    document.getElementById("Let").innerHTML = output;
}