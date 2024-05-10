const runnerContainer = document.querySelector(".runner-container");

if (runnerContainer) {
    const chicken = document.getElementById("chicken");
    const obstacle = document.getElementById("obstacle");
    let hit = false;

    document.addEventListener("keydown", handleJump);
    moveObstacle(obstacle, 3);

    function moveObstacle(obstacle, speed) {
        const sandboxWidth = runnerContainer.offsetWidth;
        let x = sandboxWidth;

        requestAnimationFrame(animate);

        function animate() {
            x -= speed;
            if (x < -obstacle.offsetWidth) {
                x = sandboxWidth;
            }
            obstacle.style.transform = `translateX(${x}px)`;

            if (checkCollision(x)) {
                handleCollision();
            } else {
                continueAnimation();
            }
        }

        function handleCollision() {
            if (hit) {
                obstacle.classList.add("shrink");
                setTimeout(function () {
                    resetObstacle();
                }, 200);
            } else {
                console.error("game over");
            }
        }

        function continueAnimation() {
            if (x !== sandboxWidth) {
                requestAnimationFrame(animate);
            } else {
                setTimeout(() => {
                    requestAnimationFrame(animate);
                }, getRandomCount(3) * 1000);
            }
        }

        function resetObstacle() {
            x = sandboxWidth;
            obstacle.style.transform = `translateX(${x}px)`;
            obstacle.classList.remove("shrink");
            setTimeout(() => {
                requestAnimationFrame(animate);
            }, getRandomCount(3) * 1000);
            hit = false;
        }
    }

    function getRandomCount(num) {
        return Math.floor(Math.random() * num);
    }

    function checkCollision(obstacleLeft) {
        const chickenTop = parseInt(
            window.getComputedStyle(chicken).getPropertyValue("top")
        );
        const isObstacleInRange = obstacleLeft < 160 && obstacleLeft > 50;
        const isChickenInHitRange = chickenTop < 332 && chickenTop > 320;
        const isChickenHit = chickenTop > 333;

        if (!isObstacleInRange) {
            return false;
        }
        if (isChickenInHitRange) {
            hit = true;
            return true;
        } else if (isChickenHit) {
            return true;
        }
    }

    function handleJump(e) {
        if (e.key === "ArrowUp") {
            if (!chicken.classList.contains("jump")) {
                chicken.classList.add("jump");
            }
            setTimeout(function () {
                chicken.classList.remove("jump");
            }, 500);
        }
    }

    function randomDelay() {
        return Math.random * 10000;
    }
}
