// CALCULATOR PROGRAM

const display = document.getElementById("display");

// parameter is input b/c passing in a character
function appendToDisplay(input){
    // equivalent of display.value = display.value + input (whatever button clicked on calc) 
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    // eval() function takes expression such as 1+2+3 & gives a result
    // evaluate the value within our display

    // dangerous code:
    try{
        display.value = eval(display.value);
    }

    catch(error){
        display.value = "Error";
    }
}

