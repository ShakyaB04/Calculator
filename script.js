var display = document.getElementById('display');
var cal = document.getElementByClassName('calculator');

function buttonClick(val) {
    if(val == 'equalsto'){
        display.value = eval(display.value)
    }
    else if(val == 'clear'){
        display.value = ' '
    }
    else{
        display.value += val
    }
}