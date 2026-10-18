const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 400;

const updateDelay = 1000/120; // ms; higher number = slower animation
let lastUpdate = 0;

function randomColor() {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    return `rgb(${r}, ${g}, ${b})`;
}

function animate(timestamp) {
    if (!lastUpdate || timestamp - lastUpdate >= updateDelay) {
        lastUpdate = timestamp;
        ctx.fillStyle = randomColor();
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);