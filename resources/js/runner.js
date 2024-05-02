const runnerContainer = document.querySelector(".runner-container");
let counter = 0;

if (runnerContainer) {
    const chicken = document.getElementById("chicken");
    const obstacle = document.getElementById("obstacle");
    const prompt = document.getElementById("prompt");
    const restart = document.querySelector(".restart");
    let once = true;

    let lose = setInterval(function () {
        let chickenTop = parseInt(
            window.getComputedStyle(chicken).getPropertyValue("top")
        );
        let blockLeft = parseInt(
            window.getComputedStyle(obstacle).getPropertyValue("left")
        );
        if (blockLeft < 160 && blockLeft > 50 && chickenTop >= 330 && once) {
            obstacle.style.animation = "none";
            obstacle.style.display = "none";
            chicken.style.animation = "none";
            prompt.querySelector("b").textContent = counter;
            prompt.classList.remove("hidden");
            prompt.classList.add("flex");
            once = false;
        }
    }, 10);

    window.addEventListener("keydown", (e) => {
        if (e.key === " ") {
            jump();
        }
    });

    restart.addEventListener("click", () => {
        location.reload();
    });
}

function jump() {
    if (chicken.classList != "animate") {
        chicken.classList.add("animate");
    }

    setTimeout(function () {
        chicken.classList.remove("animate");
        counter++;
    }, 500);
}
