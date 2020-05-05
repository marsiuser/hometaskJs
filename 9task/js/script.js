let firstDiv = document.querySelector(".first");
let secondDiv = document.querySelector(".second");

let blueColor = function (e) {
    e.preventDefault();
    firstDiv.classList.toggle("new-color__blue");
    // secondDiv.classList.remove("new-color__blue");
    secondDiv.removeEventListener(greenColor);
};

firstDiv.addEventListener('click', blueColor, false);


let greenColor = function (e) {
    e.preventDefault();
    secondDiv.classList.toggle("new-color__green");
    // firstDiv.classList.remove("new-color__blue");
    firstDiv.removeEventListener(blueColor);
};

secondDiv.addEventListener('click', greenColor, false);

