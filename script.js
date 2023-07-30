let result = document.getElementById('result');
let lastAnswer = document.getElementById('lastAnswer');
let erase = 0;

function insert(num) {
    if(erase == 1){
        clearInput();
        erase = 0;
    }
    result.value += num;
}

function clearInput() {
    result.value = '';
}

function backspace() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (e) {
        result.value = 'Error';
    }
    erase = 1;
    lastAnswer.value = result.value;
}

function sin() {
    result.value = Math.sin(result.value);
}

function cos() {
    result.value = Math.cos(result.value);
}

function tan() {
    result.value = Math.tan(result.value);
}

function log() {
    result.value = Math.log10(result.value);
}

function sqrt() {
    result.value = Math.sqrt(result.value);
}

function exponent() {
    result.value = Math.pow(result.value, 2);
}

function getLastAnswer(){
    return lastAnswer.value;
}
