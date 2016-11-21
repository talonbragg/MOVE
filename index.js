var myElement = document.getElementById('dot');
var styles = window.getComputedStyle(myElement);
var topStyle = parseInt(styles.top);
var left = parseInt(styles.left);

var myElement2 = document.getElementById('dot2');
var styles2 = window.getComputedStyle(myElement2);
var topStyle2 = parseInt(styles.top);
var left2 = parseInt(styles.left);
function moveLeft() {
	var newLeft = left - 30;
	left = newLeft;
	myElement.style.left = newLeft + 'px';
}
function moveUp() {
	var newTop = topStyle - 30;
	topStyle = newTop;
	myElement.style.top = newTop + 'px';
}
function moveRight() {
	var newLeft2 = left + 30;
	left = newLeft2;
	myElement.style.left = newLeft2 + 'px';
}
function moveDown() {
	var newTop2 = topStyle + 30;
	topStyle = newTop2
	myElement.style.top = newTop2 + 'px';
}
function moveGold() {
	var theTop = Math.floor(Math.random() * screen.height) + 1;
	var theLeft = Math.floor(Math.random() * screen.width) + 1;
	myElement2.style.top = theTop + 'px';
	myElement2.style.left = theLeft + 'px';
	setTimeout(arguments.callee, 12000);
		if (myElement.style.top === myElement2.style.top && myElement.style.left === myElement2.style.left) {
			confirm("You Win!");
			document.location.reload();
		}
}
