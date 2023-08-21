function createDict() {
    var beaver = {
        color: `brown`,
        tail: `flat`,
        eyes: `blue`,
        cake: `chocolate`
    }
    delete beaver.cake;
    document.getElementById("dictionary").innerHTML = beaver.cake;
}