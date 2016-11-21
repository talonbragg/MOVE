var myElement = document.getElementById('dot');
var styles = window.getComputedStyle(myElement);
var topStyle = parseInt(styles.top);
var left = parseInt(styles.left);
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
