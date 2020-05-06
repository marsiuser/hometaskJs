let firstDiv = document.querySelector(".first");
let secondDiv = document.querySelector(".second");


firstDiv.addEventListener('click', blueColor, false);
const blueColor =  (e) => {
    e.preventDefault();
    firstDiv.classList.toggle("new-color__blue");
    // secondDiv.classList.remove("new-color__blue");
    secondDiv.removeEventListener(greenColor);
};

secondDiv.addEventListener('click', greenColor, false);
const greenColor = (e) => {
    e.preventDefault();
    secondDiv.classList.toggle("new-color__green");
    // firstDiv.classList.remove("new-color__blue");
    firstDiv.removeEventListener(blueColor);
};



