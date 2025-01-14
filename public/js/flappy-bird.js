const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const ball = {
    x: 50,
    y: 200,
    radius: 10,
    dy: 0,
    gravity: 0.2,
    jumpStrength: -4,
    maxSpeed: 5,
};

let pipes = [];
let score = 0;
let gameSpeed = 2;
let isJumping = false;

const gapSize = 120; // Space between top and bottom pipes
const pipeWidth = 50;
const minPipeHeight = 40; // Minimum height of a pipe

function createPipes() {
    const availableSpace = canvas.height - gapSize - 2 * minPipeHeight;
    const topPipeHeight = Math.random() * availableSpace + minPipeHeight;
    const bottomPipeHeight = canvas.height - topPipeHeight - gapSize;

    pipes.push({
        x: canvas.width,
        topHeight: topPipeHeight,
        bottomHeight: bottomPipeHeight,
        width: pipeWidth,
        passed: false,
    });
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}

function drawPipes() {
    pipes.forEach((pipe) => {
        // Draw top pipe
        ctx.fillStyle = 'green';
        ctx.fillRect(pipe.x, 0, pipe.width, pipe.topHeight);

        // Draw bottom pipe
        ctx.fillRect(
            pipe.x,
            canvas.height - pipe.bottomHeight,
            pipe.width,
            pipe.bottomHeight
        );
    });
}

function drawScore() {
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('Score: ' + score, 10, 30);
}

function checkCollision(pipe) {
    const ballRight = ball.x + ball.radius;
    const ballLeft = ball.x - ball.radius;
    const ballTop = ball.y - ball.radius;
    const ballBottom = ball.y + ball.radius;

    return (
        ballRight > pipe.x &&
        ballLeft < pipe.x + pipe.width &&
        (ballTop < pipe.topHeight ||
            ballBottom > canvas.height - pipe.bottomHeight)
    );
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Apply jump if the jump key is pressed
    if (isJumping && ball.dy > -ball.maxSpeed) {
        ball.dy += ball.jumpStrength;
    }

    // Apply gravity
    ball.dy += ball.gravity;

    // Limit vertical speed
    ball.dy = Math.max(Math.min(ball.dy, ball.maxSpeed), -ball.maxSpeed);

    // Update ball position
    ball.y += ball.dy;

    // Keep ball within canvas
    if (ball.y + ball.radius > canvas.height) {
        ball.y = canvas.height - ball.radius;
        ball.dy = 0;
    } else if (ball.y - ball.radius < 0) {
        ball.y = ball.radius;
        ball.dy = 0;
    }

    pipes.forEach((pipe, index) => {
        pipe.x -= gameSpeed;

        // Check for collision
        if (checkCollision(pipe)) {
            alert('Game Over! Your score: ' + score);
            document.location.reload();
        }

        // Increase score when passing a pipe
        if (!pipe.passed && pipe.x + pipe.width < ball.x) {
            score++;
            pipe.passed = true;
            gameSpeed += 0.1;
        }

        // Remove pipes that are off screen
        if (pipe.x + pipe.width < 0) {
            pipes.splice(index, 1);
        }
    });

    // Create new pipes
    if (pipes.length === 0 || pipes[pipes.length - 1].x < canvas.width - 300) {
        createPipes();
    }

    drawBall();
    drawPipes();
    drawScore();

    requestAnimationFrame(update);
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowUp') {
        isJumping = true;
    }
});

document.addEventListener('keyup', (event) => {
    if (event.code === 'ArrowUp') {
        isJumping = false;
    }
});

createPipes(); // Create initial pipes
update();
