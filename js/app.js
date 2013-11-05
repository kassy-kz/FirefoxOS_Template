// onCreateに相当
window.onload = function() {
}

// setOnClickListnerに相当
var onButtonClick1 = function() {
	var activity = new MozActivity({
	    // Ask for the "pick" activity
	    name: "pick",

	    // Provide the data required by the filters of the activity
	    data: {
	        type: "image/jpeg"
	    }
	});

	activity.onsuccess = function() {
	    var picture = this.result;
	    console.log("A picture has been retrieved");

	    // 画像を生成し、返ってきた Blob を src にセット
	    var img = document.createElement("img");
	    img.src = window.URL.createObjectURL(this.result.blob);
		img.width = 160;
	    // アプリ内に画像を表示
	    document.getElementById("div2").appendChild(img);

	};

	activity.onerror = function() {
	    console.log(this.error);
	};
}

var onButtonClick2 = function() {
	var activity = new MozActivity({
	    // Ask for the "pick" activity
	    name: "configure",

	    // Provide the data required by the filters of the activity
	    data: {
	        target : "device"
	    }
	});
}
