const runnerContainer = document.querySelector(".runner-container");

if (runnerContainer) {
    const chicken = document.getElementById("chicken");
    document.addEventListener("keydown", handleJump);

    const obstacle1 = document.getElementById("obstacle1");
    const obstacle2 = document.getElementById("obstacle2");

    let countTransitions = 0; // Count transitions of obstacle1
    let transitionsForObstacle2 = getRandomTransitionCount(); // Random number of transitions before obstacle2 appears
    let obstacle2Active = false; // State to track if obstacle2 should be moving

    function moveObstacle(obstacle, speed) {
        const sandboxWidth = runnerContainer.offsetWidth;
        let x = sandboxWidth; // Initial position off-screen

        function animate() {
            if (
                obstacle === obstacle1 ||
                (obstacle === obstacle2 && obstacle2Active)
            ) {
                x -= speed;
            }

            if (x < -obstacle.offsetWidth) {
                x = sandboxWidth; // Reset position
                if (obstacle === obstacle1) {
                    countTransitions++;
                    if (
                        countTransitions >= transitionsForObstacle2 &&
                        !obstacle2Active
                    ) {
                        obstacle2Active = true;
                        setTimeout(() => {
                            moveObstacle(obstacle2, 3); // Delayed start for obstacle2
                        }, Math.random() * 6000); // Random delay in ms (0 to 6 seconds)
                    }
                } else if (obstacle === obstacle2) {
                    obstacle2.style.display = "none"; // Hide obstacle2 after one transition
                    obstacle2Active = false; // Deactivate obstacle2
                    transitionsForObstacle2 = getRandomTransitionCount(); // Recalculate random transitions for next appearance
                    countTransitions = 0; // Reset transition count
                }
            }

            if (obstacle === obstacle2 && obstacle2Active) {
                obstacle.style.display = "block"; // Ensure obstacle2 is visible when active
                obstacle.style.transform = `translateX(${x}px)`;
            } else if (obstacle === obstacle1) {
                obstacle.style.transform = `translateX(${x}px)`;
            }

            requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);
    }

    function getRandomTransitionCount() {
        return 0 + Math.floor(Math.random() * 6); // Random number from 5 to 10
    }

    // Start moving obstacle1
    moveObstacle(obstacle1, 3);

    // if (!checkCollision(x)) {
    //     requestAnimationFrame(animate);
    // } else {
    //     console.error("game over");
    // }

    function checkCollision(obstacleLeft) {
        let chickenTop = parseInt(
            window.getComputedStyle(chicken).getPropertyValue("top")
        );

        return obstacleLeft < 160 && obstacleLeft > 50 && chickenTop >= 330;
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
