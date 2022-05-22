const colors = ["GREEN", "RED", "BLUE", "rgba(133,122,200)", "#F15025"];
const HEX = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

//Function to get simple colors in the app
let simple = () => {
    btn.addEventListener('click', function () {
        let bkgr = document.getElementById('bkgr');
        //get randomNumber between 0-4
        let randomNumber = Math.floor(Math.random() * colors.length);
        bkgr.style.backgroundColor = colors[randomNumber];
        color.innerHTML = colors[randomNumber];
        color.style.color = colors[randomNumber];
    })
}

//Function to get HEX colors in the app
let hex = () => {
    btn.addEventListener('click', function () {
        let bkgr = document.getElementById('bkgr');
        //get randomNumber between 0-15
        let hex = "#";
        for (let i = 0; i <= 6; i++) {
            let randomNumber = Math.floor(Math.random() * HEX.length);
            hex += HEX[randomNumber];
        }
        bkgr.style.backgroundColor = hex;
        color.innerHTML = hex;
        color.style.color = hex;
    })

}
