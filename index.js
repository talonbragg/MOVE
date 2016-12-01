//Guy
var myElement = document.getElementById('dot');
var styles = window.getComputedStyle(myElement);
var topStyle = parseInt(styles.top);
var left = parseInt(styles.left);
var guyWidth = parseInt(styles.width);
var guyHeight = parseInt(styles.height);
//X and Y for Guy
var guyX1 = parseInt(left);
var guyX2 = parseInt(left) + guyWidth;
var guyY1 = parseInt(topStyle);
var guyY2 = parseInt(topStyle) + guyHeight;
//Gold
var myElement2 = document.getElementById('dot2');
var styles2 = window.getComputedStyle(myElement2);
var topStyle2 = parseInt(styles2.top);
var left2 = parseInt(styles2.left);
var goldWidth = parseInt(styles2.width);
var goldHeight = parseInt(styles2.height);
//X and Y for gold
var goldX1 = parseInt(left2);
var goldX2 = parseInt(left2) + goldWidth;
var goldY1 = parseInt(topStyle2);
var goldY2 = parseInt(topStyle2) + goldHeight;
//functions
var speed = 5;

function moveLeft() {
    var newLeft = left - speed;
    left = newLeft;
    myElement.style.left = newLeft + 'px';
    var changeX = window.getComputedStyle(guyWidth);
    var changeY = window.getComputedStyle(guyHeight);
}

function moveUp() {
    var newTop = topStyle - speed;
    topStyle = newTop;
    myElement.style.top = newTop + 'px';
    var changeX = window.getComputedStyle(guyWidth);
    var changeY = window.getComputedStyle(guyHeight);
}

function moveRight() {
    var newLeft2 = left + speed;
    left = newLeft2;
    myElement.style.left = newLeft2 + 'px';
    var changeX = window.getComputedStyle(guyWidth);
    var changeY = window.getComputedStyle(guyHeight);
}

function moveDown() {
    var newTop2 = topStyle + speed;
    topStyle = newTop2;
    myElement.style.top = newTop2 + 'px';
    var changeX = window.getComputedStyle(guyWidth);
    var changeY = window.getComputedStyle(guyHeight);
}

function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            moveLeft();
            break;
        case 39:
            moveRight();
            break;
        case 38:
            moveUp();
            break;
        case 40:
            moveDown();
            break;
    }
}

function docReady() {
    window.addEventListener('keydown', moveSelection);
}

function moveGold() {
    var theTop = Math.floor(Math.random() * screen.height) + 1;
    var theLeft = Math.floor(Math.random() * screen.width) + 1;
    myElement2.style.top = theTop + 'px';
    myElement2.style.left = theLeft + 'px';
    if (topStyle2 === topStyle && left === left2) {
        confirm("You Win!");
        document.location.reload();
	//collision detection
        if (guyY2 < goldY1 || guyX1 > goldX1 || guyY1 < goldY2 || guyX1 < goldX1 || guyY2 < goldY1 && guyX2 > goldX1 || guyY1 > goldY2 && guyX1 > goldX2 || guyY1 > goldY2 && guyX1 < goldX2 || guyY2 < goldY1 && guyX2 < goldX1) {
                confirm("You Win!");
            }     
    }
    //timer
    function startTimer(duration, display) {
        var timer = duration,
            minutes, seconds;
        setInterval(function() {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }


    var fiveMinutes = 60 / 2,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);

}
