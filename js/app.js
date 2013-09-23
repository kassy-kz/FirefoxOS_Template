window.onload = function() {
	battery.addEventListener("chargingchange", updateBatteryStatus);
	battery.addEventListener("levelchange", updateBatteryStatus);
	updateBatteryStatus();
}

var battery = navigator.battery ;

function updateBatteryStatus() {
	var status = "Battery status: " + battery.level * 100 + " %";
  	document.getElementById('div1').innerHTML = status;    

    if (battery.charging) {
    	document.getElementById('div2').innerHTML = "Battery is charging";    
    } else {
    	document.getElementById('div2').innerHTML = "Battery is not charging";        	
    }
}
