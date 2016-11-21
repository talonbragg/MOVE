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
function moveGold {
	myElement2.style.top = Math.random() * (topStyle2 - left2) + left2;
}
