// onCreateに相当
window.onload = function() {
	// findViewByIdに相当
	var btn1 = document.getElementById('btn1');
	// setOnClickListnerに相当
	btn1.onclick = function() {
	    document.getElementById('div1').innerHTML = 'Hello World';
	}
}
