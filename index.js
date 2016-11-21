var myElement = document.getElementById('dot');
var styles = window.getComputedStyle(myElement);
var top = parseInt(styles.top);
console.log(styles.top);
var left = parseInt(styles.left);
function moveLeft() {
	var newLeft = left - 5;
	left = newLeft;
	myElement.style.left = newLeft + 'px';
}
function moveUp() {
	var newTop = top - 5;
	top = newTop;
	myElement.style.top = newTop + 'px';
}
function moveRight() {
	var newLeft2 = left + 5;
	left = newLeft2;
	myElement.style.left = newLeft2 + 'px';
}
function moveDown() {
	var newTop2 = top + 5;
	top = newTop2
	myElement.style.top = newTop2 + 'px';
}
