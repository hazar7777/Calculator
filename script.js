const display=document.getElementById("display");
const result=document.getElementById("result");

function appendToDisplay(input){
display.value+=input;
}
function clearDisplay(){
display.value="";
result.innerHTML="0";
}
function calculate(){
    try{
        result.innerHTML=eval(display.value);
    }
catch(err){
    result.innerHTML="Error";
}
}

function deleteDisplay(){
    const display=document.getElementById("display");
    const newdisplay=display.value;
    console.log(newdisplay);
    display.value=newdisplay.substring(0,newdisplay.length -1);
}