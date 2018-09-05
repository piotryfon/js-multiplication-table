function getRandomNumberInRange(min, max){
    return Math.round(Math.random() * (max - min)) + min;
}
let input = document.querySelector("#input");
let showTask = document.querySelector("#showTask");
let showResultDiv = document.querySelector("#show-result-div");
let start = document.querySelector("#start");
let startEventListener = start.addEventListener("click", randomizeTask);
let checkBtn = document.querySelector("#check");
let checkBtnEventListener = checkBtn.addEventListener("click", checkResult);
let parsedValue;
let result;

function randomizeTask(){

    let a = getRandomNumberInRange(1, 10);
    let b = getRandomNumberInRange(1, 10);
    
    result = a * b;
    console.log("Wynik to: " + result)
    showTask.innerHTML = `${a} x ${b} =`
    startEventListener = start.removeEventListener("click", randomizeTask)
    checkBtnEventListener = checkBtn.addEventListener("click", checkResult);  
}

function submitVal(){

    if(input.value){
        parsedValue = parseInt(input.value);
        console.log("Napisałeś: " + parsedValue);
     showResultDiv.innerHTML = `<h2>Napisałeś ${parsedValue}</h2>`;
                
    }else{
     showResultDiv.innerHTML = "<h2>Wpisz wartość i potwierdź przyciskiem obok!</h2>"
    }   
}

function checkResult(){
    
    if(result && parsedValue){
        
        console.log("result: " + result + " value: " + parsedValue)
        console.log(result === parsedValue)
        if(result === parsedValue){
         showResultDiv.innerHTML = "<h2>Bardzo dobrze!</h2>"
        }else {
         showResultDiv.innerHTML = `<h2>Źle, wynik to: ${result}</h2>`
        }

    }else showResultDiv.innerHTML = `<h2>Naciśnij "Start" i wpisz prawidłowo wartość!</h2>`

    startEventListener = start.addEventListener("click", randomizeTask);
    checkBtnEventListener = checkBtn.removeEventListener("click", checkResult);  
}
