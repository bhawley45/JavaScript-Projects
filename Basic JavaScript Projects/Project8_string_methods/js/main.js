var string1 = `hello `;
var string2 = `there`;

function concatStrings() {
    var fullString = string1.concat(string2);
    document.getElementById(`output`).innerHTML = fullString;
}

function spliceStrings() {
    document.getElementById(`spliceOutput`).innerHTML = string2.slice(1);
}

function string_Method() {
    var x = 55;
    document.getElementById(`Numbers_to_String`).innerHTML = x.toString();
}

function precision_Method() {
    var x = 3.14159265;
    document.getElementById(`Precision`).innerHTML = x.toPrecision(3);
}