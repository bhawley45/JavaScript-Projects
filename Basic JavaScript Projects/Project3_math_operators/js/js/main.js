//I would add comments but everything is extremely self explanitory

function sum() {
    var add = 2 + 2;
    document.getElementById(`math-add`).innerHTML = "2 + 2 = " + add;
}

function diff() {
    var subtract = 4 - 2;
    document.getElementById(`math-subtract`).innerHTML = "4 - 2 = " + subtract;
}

function multiply() {
    var multiply = 4 * 2;
    document.getElementById(`math-multiply`).innerHTML = "4 * 2 = " + multiply;
}

function divide() {
    var divide = 8 / 2;
    document.getElementById(`math-divide`).innerHTML = "8 / 2 = " + divide;
}

function remainder() {
    var result = 8 % 2;
    document.getElementById(`math-divide-rem`).innerHTML = "8 % 2 = " + result;
}

function moreMath() {
    var result = 8 / 2 * 2;
    document.getElementById(`math-multiple`).innerHTML = "8 / 2 * 2 = " + result;
}

function negify() {
    var num = 2;
    document.getElementById(`math-negative`).innerHTML = -num;
}

function increment() {
    var inc = 2;
    inc++;
    document.getElementById(`math-increment`).innerHTML = inc;
}

function decrement() {
    var dec = 2;
    dec--;
    document.getElementById(`math-decrement`).innerHTML = dec;
}

function randNum() {
    var num = Math.random() * 100;
    document.getElementById(`math-random`).innerHTML = num;
}