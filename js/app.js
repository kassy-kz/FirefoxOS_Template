var battery = navigator.battery ;

battery.onlevelchange = function() {
	var status = "Battery status: " + battery.level * 100 + " %";
  	document.getElementById('div1').innerHTML = status;    
}

battery.onchargingchange = function () {
    if (battery.charging) {
    	document.getElementById('div2').innerHTML = "Battery is charging";    
    } else {
    	document.getElementById('div2').innerHTML = "Battery is not charging";        	
    }
}

