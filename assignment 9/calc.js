function appendValue(val){
    document.getElementById('display').value+=val;
}
function clearDisplay(){
    document.getElementById('display').value='';
}
function deletechar(){
    const dispaly= document.getElementById('display');
    display.value=display.value.slice(0,-1);
}
function calculate(){
    const display= document.getElementById('display');
    try{  
        display.value= eval(display.value);
    }
    catch{
        display.value='Error';
    }
    
}

function handlekey(key){ 
    const allowedkeys='0123456789./*%+-=';
    
    if(allowedkeys.includes(key)){
        appendValue(key);
    }
    else if(key=='Enter'){
        calculate();
    }
    else if(key=='Backspace'){
        deletechar();
    }
    else if(key.toLowerCase()=='c'){
        clearDisplay();
    }
}



document.addEventListener('keydown',(event)=>{
    handlekey(event.key);
})

