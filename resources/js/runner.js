const chicken = document.getElementById("chicken");
const obstacle = document.getElementById("obstacle");
const runnerContainer = document.querySelector(".runner-container");
let counter = 0;

runnerContainer.addEventListener("click", () => {
    jump();
});

function jump() {
    if (chicken.classList != "animate") {
        chicken.classList.add("animate");
    }

    setTimeout(function () {
        chicken.classList.remove("animate");
        counter++;
    }, 500);
}

let lose = setInterval(function () {
    let chickenTop = parseInt(
        window.getComputedStyle(chicken).getPropertyValue("top")
    );

    let blockLeft = parseInt(
        window.getComputedStyle(obstacle).getPropertyValue("left")
    );

    if (blockLeft < 20 && blockLeft > 0 && chickenTop >= 130) {
        obstacle.style.animation = "none";
        obstacle.style.display = "none";
        alert("Score: " + counter);
        counter = 0;
    }
}, 10);
