var button1Text = `You clicked button 1`;
var paraText = `Yay! the paragraph changed!`;
var otherString = `Hello, I'm concatenated now!`;


function getAnElement() {
    document.getElementById(`paragraph`).innerHTML = paraText;
    document.getElementById(`button1`).innerHTML = button1Text;
}

function myFunction() {
    document.getElementById(`conThis`).innerHTML += otherString;
}