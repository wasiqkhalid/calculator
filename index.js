
function add(x, y) {
    return +x + +y;
}
function subtract(x, y) {
    return +x - +y;
}
function multiply(x, y) {
    return +x * +y;
}
function divide(x,y) {
    return +x / +y;
}


function operate(op, x, y) {
    if(op == '+') {
        return add(x, y);
    }
    if(op == '−') {
        return subtract(x, y);
    }
    if(op == '×') {
        return multiply(x, y);
    }
    if(op == '÷') {
        return divide(x, y);
    }
}


function mainDisplay(mainValue){
    const mainDisp = document.querySelector(".main");
    const content = document.createElement("div");
    content.textContent = mainValue;
    mainDisp.appendChild(content);
    
}

function smallDisplay(smallValue){
    const smallDisp = document.querySelector(".small");
    const content = document.createElement("div");
    content.textContent = smallValue;
    content.id = 1099;
    smallDisp.appendChild(content);
}
function operatorSmallDiv(opvValue){
    const smallDisp = document.querySelector(".small");
    const content = document.createElement("div");
    content.textContent = opvValue;
    content.id =2099;
    smallDisp.appendChild(content);
}

function getFirstDigit() {
    const allDigits = document.querySelectorAll("button");
    allDigits.forEach((button) => {button.addEventListener('click', getFirst);});
    
}
function getFirst(e){
    const firstDigit = e.target.textContent;
    checkCorrectFirst(firstDigit);
}

function checkCorrectFirst(firstDigit) {
    const mainDiv = document.querySelector(".main");
    const smallDiv = document.querySelector(".small");

    if(firstDigit == "1" || firstDigit == "2" || firstDigit == "3" || firstDigit == "4" || firstDigit == "5" || firstDigit == "6" || firstDigit == "7" || firstDigit == "8" || firstDigit == "9" || firstDigit == "0") {
        mainDisplay(firstDigit);
    }
    if(firstDigit == "." && !(mainDiv.textContent.includes("."))) {
        mainDisplay(firstDigit);
    }
        
    
    if((mainDiv.textContent.includes("1") || mainDiv.textContent.includes("2") || mainDiv.textContent.includes("3") || mainDiv.textContent.includes("4") || mainDiv.textContent.includes("5") || mainDiv.textContent.includes("6") || mainDiv.textContent.includes("7") || mainDiv.textContent.includes("8") || mainDiv.textContent.includes("9"))){
        if(smallDiv.textContent == ""){
            if(firstDigit == "+" || firstDigit == "−" || firstDigit == "×" || firstDigit == "÷"){
                const mainDiv1 = document.querySelector(".main");
                smallDisplay(mainDiv1.textContent);
                operatorSmallDiv(firstDigit);
                mainDiv1.textContent = "";                
            }
        }
               
    }
    
    if((firstDigit == "=") && (mainDiv.textContent != "") && (smallDiv.textContent != "")) {
        const secondnum = mainDiv.textContent;
        const firstnum = document.getElementById("1099").textContent;
        const op = document.getElementById("2099").textContent;
        mainDiv.textContent = roundUpDecimals(operate(op, firstnum, secondnum));
        smallDiv.textContent = "";
    }
}

function roundUpDecimals(x){
    return Number.parseFloat(x).toFixed(2);
}

getFirstDigit();

// Clear button
const clearbtn = document.getElementById("clear");
clearbtn.addEventListener('click', () =>{
    const mainDiv = document.querySelector(".main");
    mainDiv.textContent = "";
    const smallDiv = document.querySelector(".small");
    smallDiv.textContent = "";
})

//backspace / delete button
const deletebtn = document.getElementById("del");
deletebtn.addEventListener('click', () =>{
    const mainDiv1 = document.querySelector(".main");
    const text = mainDiv1.textContent;
    const editedText = text.slice(0, -1);
    mainDiv1.textContent = editedText;
    

})