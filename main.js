let rectX = 0; 
const rectHeight = 75;
let rectY; 
let rectWidth = 75;
let clickCount = 0;
let speed; 
function setup () {
    createCanvas(500, 500);
    rectY = random(height - rectHeight);
    speed = random(1, 5);
}

function draw () {
    background(200);
    drawShape();
    rectX += speed;
    if (rectX > width) {
        noLoop();
        fill('blue');
        textSize(40);
        text('Your score was ' + clickCount, 75, 150);

    }
}
function mousePressed(){
    if((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
        clickCount++;
        console.log('hit', clickCount);
    };
    
}
function drawShape() {
    noStroke();
    fill('pink');
    rect(rectX, rectY, rectWidth, rectHeight);
}