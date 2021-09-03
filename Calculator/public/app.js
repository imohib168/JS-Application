function placeNumb(n) {
    var res = document.getElementById("output-result");
    res.value += n;
}

function clearScreen() {
    var res = document.getElementById("output-result");
    res.value = "";
}

function finalresult() {
    var res = document.getElementById("output-result");
    res.value = eval(res.value)
}

function backspace(){
    var res = document.getElementById("output-result");
    var backspaced = res.value.slice(0, res.value.length - 1);
    res.value = backspaced
}