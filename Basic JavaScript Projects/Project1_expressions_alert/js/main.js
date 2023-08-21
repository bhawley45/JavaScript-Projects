// define variable with some arbitrary strings
var textToPrint = `Hello there...`
var msgToPrint = `This is an alert!!! "quote test"`
// define multiple variables on the same line
var name = `bob`, title = `friendly neighborhood bob`

//pop-up text
window.alert(msgToPrint)

document.write(textToPrint)
document.write(textToPrint + msgToPrint)
document.write(name + `, ` + title)

// Concatenate 2 strings and print to document
var sent1 = `This is the begining of the string`;
var sent2 = ` and this is the end of the string`;

document.write(sent1 + sent2);