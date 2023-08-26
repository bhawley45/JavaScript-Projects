//creat object to track values
const Calculator = {
    Display_Value: `0`,
    First_Operand: null,
    Wait_Second_Operand: false,
    operator: null,
};

//Modifies values each time a button is pressed
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;

    // Checks Wait_Second_Operand, sets DIsplay_Value to key pressed by user
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //Overwrites Display_Value if current calue is 0
        Calculator.Display_Value = Display_Value === `0` ? digit : Display_Value + digit;
    }
}

//Section for handling Decimal Points
function Input_Decimal(dot) {
    //Keeps accidental pressing of decimal point from breaking program
    if (Calculator.Wait_Second_Operand === true) return;

    if (!Calculator.Display_Value.includes(dot)) {
        //if Display_Value doesnt contain decimal, add one...
        Calculator.Display_Value += dot;
    }
}

//Section for handling operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator;

    /*When operator key is pressed, convert current diplay_value then store
    result in Calculator.First_Operand if it doesn't already exist*/
    const Value_of_Input = parseFloat(Display_Value);

    /* If operator exists AND wait_second_operand is true, update operator and exit function*/
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }

    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        const Value_Now = First_Operand || 0;
        /*if operator exists, property lookup performed for operator
        in Perform_Calculaton object and respective operator function is called*/

        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //Convert result to an number type with a precision cap of 9
        result = Number(result).toFixed(9);

        //remove any trailing 0's
        result = (result * 1).toString();

        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand,
};

function Calculator_Reset() {
    Calculator.Display_Value = `0`;
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//Update calc screen with Display_Value
function Update_Display() {
    const display = document.querySelector(`.calculator-screen`);
    display.value = Calculator.Display_Value;
}


//ADDED TO TRY AND FIX DISPLAY NOT SHOWING NUMBERS PRESSED
function Num_Display() {
    const display = document.querySelector(`.calculator-screen`);
    display.value = First_Operand;
    alert(First_Operand);
}


Update_Display();


//Monitor button clicks
const keys = document.querySelector(`.calculator-keys`);
keys.addEventListener(`click`, (event) => {
    //target: object that represents the element clicked
    const { target } = event;

    //if clicked was not a button, escape function
    if (!target.matches(`button`)) {
        return;
    }

    if (target.classList.contains(`num`)) {
        Num_Display;
        //ADDED TO TRY AND FIX DISPLAY NOT SHOWING NUMBERS PRESSED
    }

    if (target.classList.contains(`operator`)) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains(`decimal`)) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    //Reset calculator when AC is pressed
    if (target.classList.contains(`all-clear`)) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display;
})
