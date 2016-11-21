var myElement = document.getElementById('dot');
var styles = window.getComputedStyle(myElement);
var top = parseInt(styles.top);
var left = parseInt(styles.left);
function moveLeft() {
	var newLeft = left - 1;
	document.getElementById("dot").style.left = newLeft + 'px';
}
