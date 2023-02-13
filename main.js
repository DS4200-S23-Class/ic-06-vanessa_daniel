function colormouseover() {
    let circle = document.getElementById("mycircle");

    circle.classList.add("orange");
}

document.getElementById("mycircle").addEventListener('mouseover', colormouseover);

// add event handler to button 
document.getElementById("rectButton").addEventListener('click', buttonClicked);

// define function
function buttonClicked() {
    let rectOfInterest = document.getElementById("coolRect");
    rectOfInterest.classList.add("red");


}
