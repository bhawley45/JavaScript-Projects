//Keep track of player turn
let activePlayer = `X`;
//Array to store moves as played
let selectedSquares = [];

//Function for placing an X or O in cell
function placeXorO(squareNumber) {
    //If square hasn't already been selected...
    // --> the .some() method is used to check each element of the selectSquare array
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //retrieve and assign HTML element that was clicked    
        let select = document.getElementById(squareNumber);

        //Assign square to correct player
        if (activePlayer === `X`) {
            //place x.png in cell ("select." is used to reference the square assigned above)
            select.style.backgroundImage = `url("images/x.png")`;
        } else {
            //place o.png in cell
            select.style.backgroundImage = `url("images/o.png")`;
        }

        //Play placement audio
        audio(`./media/place.mp3`);

        //Square # and player are concatenated together and added to game play tracking array
        selectedSquares.push(squareNumber + activePlayer);

        //See if a winning condition has been met
        checkWinConditions();

        //Alternate to next active player
        if (activePlayer === `X`) {
            activePlayer = `O`;
        } else {
            activePlayer = `X`;
        }

        //check for computer turn
        if (activePlayer === `O`) {
            //Disable player clicking for Computer turn
            disableClick();
            //Set 1 second delay before computer picks a cell
            setTimeout(function () { computersTurn(); }, 1000);
        }
        return true;
    }

    function computersTurn() {
        let success = false;
        let pickSquare;
        while (!success) {
            //Pick a random number between 0-8
            pickSquare = String(Math.floor(Math.random() * 9));

            //Check if square is taken
            if (placeXorO(pickSquare)) {
                //placeXorO(pickSquare);
                //Break out of loop
                success = true;
            }
        }
    }
}

function checkWinConditions() {
    //HORIZONTAL Win Conditions
    if (arrayIncludes(`0X`, `1X`, `2X`) || arrayIncludes(`0O`, `1O`, `2O`)) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes(`3X`, `4X`, `5X`) || arrayIncludes(`3O`, `4O`, `5O`)) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes(`6X`, `7X`, `8X`) || arrayIncludes(`6O`, `7O`, `8O`)) { drawWinLine(50, 304, 558, 304) }

    //VERTICAL Win Conditions
    else if (arrayIncludes(`0X`, `3X`, `6X`) || arrayIncludes(`0O`, `3O`, `6O`)) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes(`1X`, `4X`, `7X`) || arrayIncludes(`1O`, `4O`, `7O`)) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes(`2X`, `5X`, `8X`) || arrayIncludes(`2O`, `5O`, `8O`)) { drawWinLine(508, 50, 508, 558) }

    //DIAGONAL Win Conditions
    else if (arrayIncludes(`6X`, `4X`, `2X`) || arrayIncludes(`6O`, `4O`, `2O`)) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes(`0X`, `4X`, `8X`) || arrayIncludes(`0O`, `4O`, `8O`)) { drawWinLine(100, 100, 520, 520) }

    //TIE Condition
    else if (selectedSquares.length >= 9) {
        audio(`./media/tie.mp3`);
        //Set a .3 sec timer before resetGame is called
        setTimeout(function () { resetGame(); }, 500)
    }

    function arrayIncludes(sqA, sqB, sqC) {
        // Check for 3 in-a-row
        const a = selectedSquares.includes(sqA);
        const b = selectedSquares.includes(sqB);
        const c = selectedSquares.includes(sqC);

        // true if all are contained, else false
        if (a === true && b === true && c === true) { return true; }
    }
}


//Makes body element temporarily unclickable
function disableClick() {
    body.style.pointerEvents = `none`;
    //Make body clickable again after 1 second
    setTimeout(function () { body.style.pointerEvents = `auto`; }, 1000);
}

//Takes a string parameter of file path, then plays audio
function audio(audioURL) {
    //Creat a new audio object to pass path parameter
    let audio = new Audio(audioURL);
    audio.play();
}

//Utilizes HTML canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //access canvas element
    const canvas = document.getElementById(`win-lines`);
    //access methods for 2d designs
    const c = canvas.getContext(`2d`);

    //Temporary data for animation loop
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    function animateLineDrawing() {
        //Create a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);

        //clears content from last loop iteration
        c.clearRect(0, 0, 608, 608);

        //Start new draw path
        c.beginPath();
        //Starting point
        c.moveTo(x1, y1);
        //End point
        c.lineTo(x, y);

        c.lineWidth = 10;
        c.strokeStyle = `rgba(70,255,33,.8)`;

        //Begin the physical drawing based on above
        c.stroke();

        //Check if reached endpoints
        if (x1 <= x2 && y1 <= y2) {
            //add 10 to previous endpoint-x 
            if (x < x2) { x += 10; }
            //add 10 to previous endpoint-y
            if (y < y2) { y += 10; }

            //Similar to above, necessary for 6,4,2(diagonal) win conditions
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }

        //Necessary for 6,4,2(diagonal) win condition
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    //Clear canvas after win line is drawn
    function clear() {
        //Starts animation loop
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }

    //disable click while sound is played
    disableClick();
    //Play win sounds
    audio(`./media/winGame.mp3`);

    //Call main animation loop
    animateLineDrawing();

    //Wait 1 sec and reset game
    setTimeout(function () { clear(); resetGame(); }, 1000);
}


//Function for resetting the game
function resetGame() {
    //Loop through each HTML cell in table
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        //remove background image
        square.style.backgroundImage = ``;
    }

    //Resets playkeeper array
    selectedSquares = [];
}