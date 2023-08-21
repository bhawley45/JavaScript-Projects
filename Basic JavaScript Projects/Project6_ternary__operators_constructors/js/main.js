function Ride_Function() {
    var height, can_ride;
    height = document.getElementById(`height`).value;
    can_ride = (height < 52) ? "You're too short" : "You're tall enough";
    document.getElementById(`ride`).innerHTML = can_ride + " to ride.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Floopy = new Vehicle(`Ford`, `GT`, 2008, `blue`);

function myFunction() {
    document.getElementById("New_and_This").innerHTML = "Floopy drives a " +
        Floopy.Vehicle_Color + "-colored " + Floopy.Vehicle_Model + " manufactured in " + Floopy.Vehicle_Year;
}



function WriteToHTML() {
    document.getElementById("Nested_Function").innerHTML = SumOfNum()
    function SumOfNum() {
        var num1 = 2, num2 = 3;
        document.write(num1 + num2);
    }
}