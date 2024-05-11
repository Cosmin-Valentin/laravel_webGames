const runnerContainer = document.querySelector(".runner-container");

if (runnerContainer) {
    const chicken = document.getElementById("chicken");
    const colorBubble = document.getElementById("color-bubble");
    // const blackBubble = document.getElementById("black-bubble");
    const cactus = document.querySelector(".cactus");
    const pixelsLight = document.querySelector(".pixels.group-1");
    const pixelsDark = document.querySelector(".pixels.group-2");
    let hit = false;
    let animationIds = [];

    document.addEventListener("keydown", handleJump);
    moveObstacle(colorBubble, 3);
    setTimeout(function () {
        moveObstacle(cactus, 3);
    }, 500);

    moveGround();

    function moveObstacle(obstacle, speed) {
        const sandboxWidth = runnerContainer.offsetWidth;
        let x = sandboxWidth;

        animationIds.push(requestAnimationFrame(animate));

        function animate() {
            x -= speed;
            if (x < -obstacle.offsetWidth) {
                x = sandboxWidth;
            }
            obstacle.style.transform = `translateX(${x}px)`;

            if (obstacle.classList.contains("obstacle") && checkCollision(x)) {
                handleCollision();
            } else {
                continueAnimation();
            }
        }

        function handleCollision() {
            if (!obstacle.classList.contains("cactus")) {
                if (hit) {
                    obstacle.classList.remove("wobble");
                    obstacle.classList.add("shrink");
                    setTimeout(function () {
                        resetObstacle();
                    }, 200);
                } else {
                    gameOver();
                }
            } else {
                gameOver();
            }
        }

        function continueAnimation() {
            if (x !== sandboxWidth) {
                animationIds.push(requestAnimationFrame(animate));
            } else {
                setTimeout(() => {
                    animationIds.push(requestAnimationFrame(animate));
                }, getRandomCount(3) * 1000);
            }
        }

        function resetObstacle() {
            x = sandboxWidth;
            obstacle.style.transform = `translateX(${x}px)`;
            obstacle.classList.remove("shrink");
            obstacle.classList.add("wobble");
            setTimeout(() => {
                animationIds.push(requestAnimationFrame(animate));
            }, getRandomCount(3) * 1000);
            hit = false;
        }
    }

    function moveGround() {
        moveObstacle(pixelsLight, 3);
        setTimeout(function () {
            moveObstacle(pixelsDark, 3);
        }, 2000);
    }

    function gameOver() {
        console.error("game over");
        animationIds.forEach((id) => cancelAnimationFrame(id));
        animationIds = [];
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
