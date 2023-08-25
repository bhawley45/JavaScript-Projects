function ColorFunction() {
    var colors = document.getElementById(`color-input`).value;
    var colorString = ` is a great color!`;

    switch (colors) {
        case `Red`:
            document.getElementById(`output`).innerHTML = `Red` + colorString;
            break;
        case `Yellow`:
            document.getElementById(`output`).innerHTML = `Yellow` + colorString;
            break;
        case `Green`:
            document.getElementById(`output`).innerHTML = `Green` + colorString;
            break;
        case `Blue`:
            document.getElementById(`output`).innerHTML = `Blue` + colorString;
            break;
        case `Pink`:
            document.getElementById(`output`).innerHTML = `Pink` + colorString;
            break;
        case `Purple`:
            document.getElementById(`output`).innerHTML = `Purple` + colorString;
            break;
        default:
            document.getElementById(`output`).innerHTML = "Please enter a valid color from the above list!"
    }
}

function changeText() {
    let arr = document.getElementsByClassName(`click`);
    arr[0].innerHTML = "Ta-da!!!";
}


//Draw a circle
const canvas = document.getElementById(`myCanvas`);
const ctx = canvas.getContext(`2d`);
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

//Create a gradient
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, `black`);
grd.addColorStop(1, `white`);

// Draw a filled Rectangle
ctx.fillStyle = grd;
ctx.fillRect(20, 200, 150, 100); 