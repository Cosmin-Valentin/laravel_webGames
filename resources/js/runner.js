const runnerContainer = document.querySelector(".runner-container");

if (runnerContainer) {
    const chicken = document.getElementById("chicken");
    const obstacle = document.getElementById("obstacle");
    const eagle = document.getElementById("eagle");
    const prompt = document.getElementById("prompt");
    const restart = document.querySelector(".restart");
    const skies = document.querySelectorAll(".sky");

    let counter = 0;
    let fail = false;
    let x = 1;
    let loseInterval;
    let circadianInterval;

    giveInfo();

    function init() {
        loseInterval = setupLoseCheck();
        circadianInterval = setupCircadianShift();

        document.addEventListener("keydown", handleJump);
        restart.addEventListener("click", () => location.reload());
    }

    function setupLoseCheck() {
        return setInterval(() => {
            if (checkCollision()) {
                gameOver();
            }
        }, 10);
    }

    function checkCollision() {
        let chickenTop = parseInt(
            window.getComputedStyle(chicken).getPropertyValue("top")
        );
        let blockLeft = parseInt(
            window.getComputedStyle(obstacle).getPropertyValue("left")
        );
        let eagleLeft = parseInt(
            window.getComputedStyle(eagle).getPropertyValue("left")
        );
        return (
            (blockLeft < 160 && blockLeft > 50 && chickenTop >= 330) ||
            (eagleLeft < 160 && eagleLeft > 50 && chickenTop < 397)
        );
    }

    function gameOver() {
        if (runnerContainer.classList.contains("move")) {
            runnerContainer.classList.remove("move");
            obstacle.classList.add("hidden");
        }
        if (chicken.classList.contains("walk")) {
            chicken.classList.remove("walk");
        }
        prompt.classList.remove("hidden");
        prompt.classList.add("flex");
        fail = true;
        clearInterval(loseInterval);
        clearInterval(circadianInterval);
        document.removeEventListener("keydown", handleJump);
        document.addEventListener("keydown", () => location.reload());
    }

    function setupCircadianShift() {
        return setInterval(() => {
            skies.forEach((sky) => sky.classList.add("hidden"));
            skies[x].classList.remove("hidden");
            x = x < 2 ? x + 1 : 0;
        }, 15000);
    }

    function handleJump(e) {
        const actions = {
            ArrowUp: () => performAction("jump"),
            ArrowDown: () => performAction("crouch"),
        };

        if (actions[e.key]) {
            actions[e.key]();
        }
    }

    function performAction(actionName) {
        if (!chicken.classList.contains(actionName)) {
            if (chicken.classList.contains("walk")) {
                chicken.classList.remove("walk");
            }
            chicken.classList.add(actionName);
            checkScoreIncrement();
            setTimeout(() => {
                chicken.classList.remove(actionName);
                if (!fail) {
                    chicken.classList.add("walk");
                }
            }, 500);
        }
    }

    function checkScoreIncrement() {
        let blockLeft = parseInt(
            window.getComputedStyle(obstacle).getPropertyValue("left")
        );
        let eagleLeft = parseInt(
            window.getComputedStyle(eagle).getPropertyValue("left")
        );
        if (blockLeft < 300 && !fail) {
            counter++;
            if (eagle.classList.contains("fly") && eagleLeft < 300) {
                counter++;
            }
            document.querySelector(".score b").textContent = counter;
            if (counter >= 4 && !eagle.classList.contains("fly")) {
                eagle.classList.add("fly");
            }
        }
    }

    function startGame(e) {
        const actionMap = {
            ArrowUp: "jump",
            ArrowDown: "crouch",
        };

        if (actionMap[e.key]) {
            performAction(actionMap[e.key]);
            init();
            document.removeEventListener("keydown", startGame);
            document.querySelector(".info").classList.add("hidden");
            if (!runnerContainer.classList.contains("move")) {
                runnerContainer.classList.add("move");
            }
        }
    }

    function giveInfo() {
        document.addEventListener("keydown", startGame);
    }
}
