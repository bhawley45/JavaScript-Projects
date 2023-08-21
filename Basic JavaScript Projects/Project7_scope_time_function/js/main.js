var global = 5;

function SumTwoNum() {
    var local = 10;
    document.write(global + local);
}

function get_date() {
    if (new Date().getHours() < 18) {
        document.getElementById(`greeting`).innerHTML = "How are you today?";
    } else {
        document.getElementById(`greeting`).innerHTML = "Bro it's like late, u ok?";
    }
}


if (global == 5) {
    document.write(`That clobal variable is a pretty cool dude...`);
}

function checkInput() {
    var num = document.getElementById(`usr_input`).value;
    if (num > 10) {
        document.getElementById("output").innerHTML = `Yo, that num be greater than 10, holy cow!`;
    } else {
        document.getElementById("output").innerHTML = `That number's lame, try harder...`;
    }
}

function Time_Function() {
    var Time = new Date().getHours();
    var Rely;
    if (Time < 12 == Time > 0) {
        Reply = `It is morning!`;
    } else if (Time >= 12 == Time < 18) {
        Reply = `It is afternoon.`;
    } else {
        Reply = `It is evening.`;
    }
    document.getElementById(`Time_of_Day`).innerHTML = Reply;
}