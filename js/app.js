// onCreateに相当
window.onload = function() {

	onButtonClick1 = function() {
	 	window.navigator.vibrate(200);
	}

	onButtonClick2 = function() {
	 	window.navigator.vibrate([400,50,100,50,100]);		
	}

	onButtonClick3 = function() {
	 	window.navigator.vibrate(5000);		
	}

	onButtonClick4 = function() {
	 	window.navigator.vibrate(0);		
	}
}
