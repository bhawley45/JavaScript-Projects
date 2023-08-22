/* function countdown() {
    var seconds = document.getElementById(`seconds`).value;
    // grab seconds from input box

    function tick() {
        seconds -= 1;
        // subtract 1 second every tick
        timer.innerHTML = seconds;
        // display current progression of the countdown
        var time = setTimeout(tick, 1000); //pause program (timeOut) for 1 sec
        if (seconds == -1) {
            // 0-1 counts as an additional second instead of ending at 0
            alert(`Time's up!`);
            clearTimeout(time);
            // clears timer
            timer.innerHTML = ``;
            // resets output <p>
        }
    }
    tick()
} */



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
} 