// onCreateに相当
window.onload = function() {

	/**
	 * 画像を取得する
	 **/
	document.getElementById("btn1").onclick = function() {
		var activity = new MozActivity({
		    // Ask for the "pick" activity
		    name: "pick",
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
}
