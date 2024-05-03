const runnerContainer = document.querySelector(".runner-container");
let counter = 0;
let fail = false;

if (runnerContainer) {
    const chicken = document.getElementById("chicken");
    const obstacle = document.getElementById("obstacle");
    const prompt = document.getElementById("prompt");
    const ground = document.getElementById("ground");
    const restart = document.querySelector(".restart");

    let lose = setInterval(function () {
        let chickenTop = parseInt(
            window.getComputedStyle(chicken).getPropertyValue("top")
        );
        let blockLeft = parseInt(
            window.getComputedStyle(obstacle).getPropertyValue("left")
        );
        if (blockLeft < 160 && blockLeft > 50 && chickenTop >= 330) {
            obstacle.style.animation = "none";
            obstacle.style.display = "none";
            chicken.style.transform = "rotate(0deg)";
            chicken.querySelector(".leg").style.animation = "none";
            ground.querySelector(".pixels").style.animation = "none";
            ground.querySelector(".pixels2").style.animation = "none";
            prompt.classList.remove("hidden");
            prompt.classList.add("flex");
            fail = true;
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
        let blockLeft = parseInt(
            window.getComputedStyle(obstacle).getPropertyValue("left")
        );
        if (blockLeft < 300 && !fail) {
            counter++;
            document.querySelector(".score b").textContent = counter;
        }
    }, 500);
}
