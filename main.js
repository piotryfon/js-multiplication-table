function getRandomNumberInRange(min, max){
    return Math.round(Math.random() * (max - min)) + min;
}
let input = document.querySelector("#input");
let showTask = document.querySelector("#showTask");
let showResultDiv = document.querySelector("#show-result-div");
let start = document.querySelector("#start");
let startEventListener = start.addEventListener("click", startApi);
let checkBtn = document.querySelector("#check");
let checkBtnEventListener = checkBtn.addEventListener("click", checkResult);
let parseValue;
let result;

function submitVal(){
    if(input.value){
        parseValue = parseInt(input.value);
        console.log("Napisałeś: " + parseValue);
     showResultDiv.innerHTML = `<h2>Napisałeś ${parseValue}</h2>`;
                
    }else{
     showResultDiv.innerHTML = "<h2>Wpisz wartość i potwierdź przyciskiem obok!</h2>"
    }   
}

function startApi(){
    let a = getRandomNumberInRange(1, 10);
    let b = getRandomNumberInRange(1, 10);
    
    result = a * b;
    console.log("Wynik to: " + result)
    showTask.innerHTML = `${a} x ${b} =`
    startEventListener = start.removeEventListener("click", startApi)
    checkBtnEventListener = checkBtn.addEventListener("click", checkResult);
    return result;
}


function checkResult(){
    
    if(result && parseValue){
        
        console.log("result: " + result + " value: " + parseValue)
        console.log(result === parseValue)
        if(result === parseValue){
         showResultDiv.innerHTML = "<h2>Bardzo dobrze!</h2>"
        }else {
         showResultDiv.innerHTML = `<h2>Źle, wynik to: ${result}</h2>`
        }

    }else showResultDiv.innerHTML = `<h2>Naciśnij "Start" i wpisz prawidłowo wartość!</h2>`

    startEventListener = start.addEventListener("click", startApi);
    
    checkBtnEventListener = checkBtn.removeEventListener("click", checkResult);
    
}
