const color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

function changeColor() {
    let randomcolor = "#";

    for (var i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * color.length);
        randomcolor += color[randomNumber];
        console.log(randomNumber);
    }

    document.body.style.backgroundColor = randomcolor;
    document.querySelector(".header").innerHTML = "Background Color is: " + randomcolor;
}