
function setup() {
    const canvasParent = document.getElementById('canvas-parent');
    const canvasWidth = canvasParent.offsetWidth;
    const sketchCanvas = createCanvas(canvasWidth, 450);
    sketchCanvas.parent('canvas-parent');

    background(100);
}

function draw() {
    ellipse(mouseX, mouseY, 10, 10);
}
