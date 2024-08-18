let display = document.getElementsByName('display')[0]

const append = input=>display.value+=input;

const clearDisplay = _=>display.value = "";

const calculate = _=>{
    try{
        display.value = eval(display.value)
    }
    catch(err){
        display.value = "Err"
    }
};