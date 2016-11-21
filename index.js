var myElement = document.getElementById('dot');
var styles = window.getComputedStyle(myElement);
var topStyle = parseInt(styles.top);
var left = parseInt(styles.left);

var myElement2 = document.getElementById('dot2');
var styles2 = window.getComputedStyle(myElement2);
var topStyle2 = parseInt(styles.top);
var left2 = parseInt(styles.left);
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
function moveGold() {
	var theTop = Math.floor(Math.random() * left2) + topStyle2;
	var theLeft = Math.floor(Math.random() * left2) + topStyle2;
	myElement2.style.top = theTop + 'px';
	myElement2.style.left = theLeft + 'px';
	setTimeout(arguments.callee, 5000);
}
