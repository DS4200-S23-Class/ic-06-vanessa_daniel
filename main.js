

function colormouseover() {
    let circle = document.getElementById("mycircle");

    circle.classList.add("orange");
}

document.getElementById("mycircle").addEventListener('mouseover', colormouseover);