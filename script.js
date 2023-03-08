var ON = false;

function screen(elem){
    if(ON){
        document.getElementById("screen").value += elem;
    }
}

function del(){
    if(ON){
        document.getElementById("screen").value = document.getElementById("screen").value.slice(0, -1);
    }
}

function calculate(){
    if(ON){
        document.getElementById("screen").value = eval(document.getElementById("screen").value);
    }
}

function clearScreen(){
    if(ON){
        document.getElementById("screen").value = "";
    }
}

function power(){
    var button = document.getElementById("power");
    if(ON){
        clearScreen();
        button.style.backgroundColor = "rgb(242, 114, 114)";
        document.getElementById("power").value = "OFF";
        ON = false;  
    }else{
        button.style.backgroundColor = "rgb(73, 135, 77)";
        document.getElementById("power").value = "ON";
        ON = true;
    }
}