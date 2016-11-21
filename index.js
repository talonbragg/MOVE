var myElement = document.querySelector('#dot');
var styles = window.getComputedStyle(myElement);
var top = parseInt(styles.top);
var left = parsenInt(styles.left);
function moveLeft() {
	var newLeft = left - 1;
	document.getElementById("dot").style.left = newLeft + 'px';
}
