document.onkeyup = function(e) {
    if (e.keyCode ==   13) {
        changeColor();
    }
}

function changeColor() {
    var newColor = makeColor();
    var box = document.body.style.backgroundColor = newColor.rgb;
    document.getElementById('rgb').innerHTML = newColor.rgb;
    document.getElementById('hex').innerHTML = newColor.hex;
}

function makeColor() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        var num = Math.floor(Math.random() * 255);
        arr.push(num);
        var rgb = 'rgb(' + arr[0] + "," + arr[1] + "," + arr[2] + ')';
    }
    var hex = rgbToHex(arr);
    return newCols = {
        rgb: rgb,
        hex: hex
    }
}

function rgbToHex(arr) {
    function c(v) {
        var hex = v.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
    var hexCol = "#" + c(arr[0]) + c(arr[1]) + c(arr[2]);
    var onlyHexNums = c(arr[0]) + c(arr[1]) + c(arr[2]);
    changeDisplayColor(onlyHexNums);
    return hexCol;
}

function changeDisplayColor(onlyHexNums) {
    document.getElementById('colorRgb').style.color = 'black';
    document.getElementById('colorHex').style.color = 'black';
    var rgb = parseInt(onlyHexNums, 16); // convert rrggbb to decimal
    var r = (rgb >> 16) & 0xff; // extract red
    var g = (rgb >> 8) & 0xff; // extract green
    var b = (rgb >> 0) & 0xff; // extract blue

    var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    if (luma < 40) {
        document.getElementById('colorRgb').style.color = 'white';
        document.getElementById('colorHex').style.color = 'white';
    }

}
