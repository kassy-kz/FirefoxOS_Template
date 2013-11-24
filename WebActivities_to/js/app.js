var activity;
var canvas ;

// onCreateに相当
window.onload = function() {
    // WebActivitiesで呼ばれた時
    navigator.mozSetMessageHandler('activity', function(activityRequest) {
        var option = activityRequest.source;
        activity = activityRequest;

        if (option.name === "pick") {
        } else {
            activityRequest.postError("Unable to provide a picture");
        }
    });

    // 戻るボタンが押された時の動作
    document.getElementById("backButton").onclick = function() {
        // Canvasに描画した内容をBlobに変換する
        canvas.toBlob(function(blob1){
            // 元のActivityに画像を渡す
   　        activity.postResult({
                type: 'image/jpeg',
                blob: blob1
            });

        }, "image/jpeg", 0.95);
    }
    // Canvasに画像を描画
    draw();

}

/**
 * Canvasに画像を描画する
 **/
function draw() {
    // Canvas要素を取得
    canvas = document.getElementById('canvas1');
    if ( !canvas || !canvas.getContext ) { 
        return false; 
    }
    var ctx = canvas.getContext('2d');

    // Imageオブジェクトを生成 
    var img = new Image();
    // 画像を指定
    img.src = "img/hanabi.jpg";
    // 画像読み込み終わりを待ってCanvasに描画する
    img.onload = function() {
        // 画像を描画 
        ctx.drawImage(img, 0, 0);
    }
}