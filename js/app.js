
var alarmId;

// onCreateに相当
window.onload = function() {
	// findViewByIdに相当
	var btn1 = document.getElementById('btn1');

}

// setOnClickListnerに相当
var onButtonClick1 = function() {
	// Set an alarm and store it's id
	//var request = navigator.mozAlarms.add(new Date("Sep 29, 2013 18:29:00"), "honorTimezone");
	var request = navigator.mozAlarms.add(new Date(2013,8,29,19,25,0,0), "honorTimezone");
	 var time = 4;
	  // var request = navigator.mozAlarms.add(
	  //   new Date((new Date()).getTime() + time * 1000),
	  //   "honorTimezone",
	  //   { mydata: "alarm" }
	  // );

	request.onsuccess = function () {
	  alarmId = this.result;
	}
}

// setOnClickListnerに相当
var onButtonClick2 = function() {
	if (alarmId) {
	  navigator.mozAlarms.remove(alarmId);
	}
}

navigator.mozSetMessageHandler("alarm", function (mozAlarm) { 
//   alert("alarm fired: " + JSON.stringify(mozAlarm.data)); 
    // 通知（ノーティフィケーション）生成
  var notification = navigator.mozNotification.createNotification(
    "10秒たちました",
    "右スワイプでクリアします。"
  );
  notification.show();

});

// 

