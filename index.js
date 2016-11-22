//Guy
var myElement = document.getElementById('dot');
var styles = window.getComputedStyle(myElement);
var topStyle = parseInt(styles.top);
var left = parseInt(styles.left);
//Gold
var myElement2 = document.getElementById('dot2');
var styles2 = window.getComputedStyle(myElement2);
var topStyle2 = parseInt(styles2.top);
var left2 = parseInt(styles2.left);
//functions
var speed = 1;
function moveLeft() {
	var newLeft = left - speed;
	left = newLeft;
	myElement.style.left = newLeft + 'px';
	
}
function moveUp() {
	var newTop = topStyle - speed;
	topStyle = newTop;
	myElement.style.top = newTop + 'px';
	
}
function moveRight() {
	var newLeft2 = left + speed;
	left = newLeft2;
	myElement.style.left = newLeft2 + 'px';
	
}
function moveDown() {
	var newTop2 = topStyle + speed;
	topStyle = newTop2
	myElement.style.top = newTop2 + 'px';
	
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
                };

        function docReady()
        {
          window.addEventListener('keydown', moveSelection);
        }
function moveGold() {
	var theTop = Math.floor(Math.random() * screen.height) + 1;
	var theLeft = Math.floor(Math.random() * screen.width) + 1;
	myElement2.style.top = theTop + 'px';
	myElement2.style.left = theLeft + 'px';
	setTimeout(arguments.callee, 31000);
		if (topStyle2 =< topStyle && left =< left2) {
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
