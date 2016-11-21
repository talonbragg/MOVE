//Guy
var myElement = document.getElementById('dot');
var styles = window.getComputedStyle(myElement);
var topStyle = parseInt(styles.top);
var left = parseInt(styles.left);
//Gold
var myElement2 = document.getElementById('dot2');
var styles2 = window.getComputedStyle(myElement2);
var topStyle2 = parseInt(styles.top);
var left2 = parseInt(styles.left);
//functions
function moveLeft() {
	var newLeft = left - 10;
	left = newLeft;
	myElement.style.left = newLeft + 'px';
}
function moveUp() {
	var newTop = topStyle - 10;
	topStyle = newTop;
	myElement.style.top = newTop + 'px';
}
function moveRight() {
	var newLeft2 = left + 10;
	left = newLeft2;
	myElement.style.left = newLeft2 + 'px';
}
function moveDown() {
	var newTop2 = topStyle + 10;
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
	setTimeout(arguments.callee, 12000);
		if (myElement.style.top == myElement2.style.top && myElement.style.left == myElement2.style.left) {
			confirm("You Win!");
			document.location.reload();
		}
}
