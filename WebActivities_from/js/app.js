// onCreateに相当
window.onload = function() {

	/**
	 * 画像を取得する
	 **/
	document.getElementById("btn1").onclick = function() {
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
		    alert(picture);
		    // 画像を生成し、返ってきた Blob を src にセット
		    var img = document.createElement("img");
			alert(this.result.blob.name);
		    img.src = window.URL.createObjectURL(this.result.blob);
			img.width = 160;
		    // アプリ内に画像を表示
		    document.getElementById("div2").appendChild(img);

		};

		activity.onerror = function() {
		    console.log(this.error);
		};
	}

	/**
	 * 設定を呼び出す
	 **/
	document.getElementById("btn2").onclick = function() {
		var activity = new MozActivity({
		    name: "configure",
		    data: {
		        target : "device"
		    }
		});

	}

	/**
	 * 電話をかける
	 **/
	document.getElementById("btn3").onclick = function() {
		var activity = new MozActivity({
		    name: "dial",
		    data: {
		        number: "123456789"
		    }
		});
	}

	/**
	 * メールを送信する
	 **/
	document.getElementById("btn4").onclick = function() {
		var activity = new MozActivity({
		    name: "new",
		    data: {
		        type : "mail"
		    }
		});

	}

	/**
	 * URLを開く
	 **/
	document.getElementById("btn5").onclick = function() {
		var activity = new MozActivity({
		    name: "view",
		    data: {
		        type : "url",
		        url:"http://example.com"
		    }
		});

	}
}
