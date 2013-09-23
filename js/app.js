var onAddButtonClick = function() {
    document.getElementById('mainText').innerHTML += '<br> add item';
}

var onRemoveButtonClick = function() {
    var str = document.getElementById('mainText').innerHTML;
    var i = str.lastIndexOf("<br>");
    document.getElementById('mainText').innerHTML = str.substring(0,i);
}
