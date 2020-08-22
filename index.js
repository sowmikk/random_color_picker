const color = ["crimson", "tomato", "orchid", "aqua", "mediumorchid", "palegreen", "deepskyblue"];

function changeColor() {
    let randomNumber = 0;
    randomNumber = Math.floor(Math.random() * color.length);
    document.body.style.backgroundColor = color[randomNumber];
    document.querySelector('.header').innerHTML = "Background Color is: " + color[randomNumber];
    console.log(randomNumber);
}

const toggle = document.querySelector(".fas");

toggle.addEventListener("click", function () {
    document.querySelector(".navlink").classList.toggle("showNav");
    document.querySelector(".fas").classList.toggle("fas-rotate");

});