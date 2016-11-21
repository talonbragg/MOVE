var myElement = document.getElementById('dot');
var styles = window.getComputedStyle(myElement);
var top = parseInt(styles.top);
var left = parseInt(styles.left);
function moveLeft() {
	var newLeft = left - 1;
	left = newLeft;
	document.getElementById("dot").style.left = newLeft + 'px';
}
function moveUp() {
	var newTop = top - 1;
	top = newTop;
	document.getElementById("dot").style.top = newTop + 'px';
}
function moveRight() {
	var newLeft2 = left + 1;
	left = newLeft2;
	document.getElementById("dot").style.left = newLeft2 + 'px';
}
function moveDown() {
	var newTop2 = top + 1;
	top = newTop2
	document.getElementById("dot").style.top = newTop2 + 'px';
}
