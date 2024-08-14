var images = [
    "assets/1.png",
    "assets/2.png",
    "assets/3.png",
    "assets/4.png",
    "assets/5.png",
    "assets/6.png",
];

document.getElementById("play-button").addEventListener("click", function() {
    
    var random1 = Math.floor(Math.random()*6)%6;
    var random2 = Math.floor(Math.random()*6)%6;

    document.getElementById("image1").src = images[random1]
    document.getElementById("image2").src = images[random2]

    if (random1 > random2) {
        document.querySelector("h1").textContent = "🚩 Player 1 WINS"
    } else if (random1 < random2){
        document.querySelector("h1").textContent = "Player 2 WINS 🚩"
    } else {
        document.querySelector("h1").textContent = "🚩DRAW🚩"
    }
})

document.getElementById("play-button").addEventListener("click", function() {
    
    
})
function imgs() {
    document.getElementById("image1").src = images[Math.floor(Math.random()*6)%6]
    document.getElementById("image2").src = images[Math.floor(Math.random()*6)%6]
}   
window.onload = imgs;

