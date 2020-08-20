const color = ["crimson", "tomato", "orchid", "aqua", "mediumorchid", "palegreen", "deepskyblue"];

function changeColor() {
    let randomNumber = 0;
    randomNumber = Math.floor(Math.random() * color.length);
    document.body.style.backgroundColor = color[randomNumber];
    document.querySelector('.header').innerHTML = "Background Color is: " + color[randomNumber];
    console.log(randomNumber);
}