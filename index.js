  const display = document.getElementById("display");

function Display(input){
display.value += input;
 }

function Delete(){
    display.value = display.value.slice(0,-1);
}

function ClearDisplay(){
    display.value = "";
}

function Calculate() {
    try {
        let result = eval(display.value);
        if (result === Infinity || isNaN(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Error";
    }
}

