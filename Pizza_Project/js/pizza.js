function getReceipt() {
    //Initializes string to store information for receipt
    var rText = `<h3>You Ordered:</h3>`
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName(`size`);
    for (let i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            rText += selectedSize + `<br>`;
        }
    }

    switch (selectedSize) {
        case `Personal Pizza`:
            sizeTotal = 6;
            break;
        case `Small Pizza`:
            sizeTotal = 8;
            break;
        case `Medium Pizza`:
            sizeTotal = 10;
            break;
        case `Large Pizza`:
            sizeTotal = 14;
            break;
        case `Extra Large Pizza`:
            sizeTotal = 16;
            break;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + ` = $` + sizeTotal + `.00`);
    console.log(`size receipt text: ` + rText);
    console.log(`Subtotal: $` + runningTotal + `.00`);

    getTopping(runningTotal, rText);
}

function getTopping(runningTotal, rText) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName(`toppings`);
    for (let i = 0; i < toppingArray.length; i++) {
        if (toppingArray[i].checked) {
            selectedTopping.push(toppingArray[i].value)
            console.log(`selected topping item: (` + toppingArray[i].value + `)`);
            rText += toppingArray[i].value + `<br>`;
        }
    }

    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = toppingCount - 1;
    } else {
        toppingTotal = 0;
    }

    runningTotal += toppingTotal;
    console.log(`topping count: ` + toppingCount);
    console.log(toppingCount + ` topping - 1 FREE topping = ` + toppingTotal + `.00`);
    console.log(`topping rText: ` + rText);
    console.log(`Purchase Total: ` + `$` + runningTotal + `.00`);

    document.getElementById(`showText`).innerHTML = rText;
    document.getElementById(`totalPrice`).innerHTML = `<h3>Total: <strong>$` + runningTotal + `.00 </strong></h3>`;
}