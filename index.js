//Guy
var myElement = document.getElementById("dot");

var move_left = false;
var move_up = false;
var move_right = false;
var move_down = false;

//Gold
var myElement2 = document.getElementById('dot2');
var styles2 = window.getComputedStyle(myElement2);
var topStyle2 = parseInt(styles2.top);
var left2 = parseInt(styles2.left);
//functions
setInterval(function (){
	if (move_left) myElement.style.left = (getIntfromStyle(myElement.style.left) - 1) + 'px';
	if (move_up) myElement.style.top = (getIntfromStyle(myElement.style.top) - 1) + 'px';
	if (move_right) myElement.style.left = (getIntfromStyle(myElement.style.left) + 1) + 'px';
	if (move_down) myElement.style.top = (getIntfromStyle(myElement.style.top) + 1) + 'px';
}, 100);

// with this function, you dont need topStyle & left variables to store previous positions
// you can get current positioin easilysily
function getIntfromStyle(in_style) {
	return parseInt(in_style.replace('px', ''));
}

// i use keyboard to tell code when character should be moved and when must stop
document.onkeydown = function(e) {
    e = e || window.event;
    switch(e.which || e.keyCode) {
		case 37: // left
			move_left = true;
			break;
        case 38: // up
			move_up = true;
			break;
        case 39: // right
			move_right = true;
			break;
        case 40: // down
			move_down = true;
			break;
        default: return; // exit this handler for other keys
	}
	e.preventDefault(); // prevent the default action (scroll / move caret)
}

document.onkeyup = function(e) {
    e = e || window.event;
    switch(e.which || e.keyCode) {
		case 37: // left
			move_left = false;
			break;
        case 38: // up
			move_up = false;
			break;
        case 39: // right
			move_right = false;
			break;
        case 40: // down
			move_down = false;
			break;
	}
}
function moveGold() {
	var theTop = Math.floor(Math.random() * screen.height) + 1;
	var theLeft = Math.floor(Math.random() * screen.width) + 1;
	myElement2.style.top = theTop + 'px';
	myElement2.style.left = theLeft + 'px';
	setTimeout(arguments.callee, 31000);
		if (topStyle2 === topStyle && left === left2) {
			confirm("You Win!");
			document.location.reload();
		}
	//timer
	function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
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
