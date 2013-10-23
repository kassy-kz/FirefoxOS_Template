
var alarmId;

// ボタンが押された時、Alarmをセットする
var onButtonClick1 = function() {
    // Alarm発火までの時間
	var time = 5000;
	// Alarmセット
	var request = navigator.mozAlarms.add(
	    new Date((new Date()).getTime() + time),
	    "honorTimezone",
	    { message: "alarm1" }
	);

	// Alarmセットに成功した時
	request.onsuccess = function () {
	    alarmId = this.result;
	}
}

// ボタンが押された時、Alarmを解除する
var onButtonClick2 = function() {
	if (alarmId) {
	    navigator.mozAlarms.remove(alarmId);
	}
}

// Alarmのハンドリング
navigator.mozSetMessageHandler("alarm", alarmHandler);

// Alarmが発火したときに呼ばれる関数
var alarmHandler = function(mozAlarm) {
    alert("alarm fired: " + JSON.stringify(mozAlarm.data)); 	
}