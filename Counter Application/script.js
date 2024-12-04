document.getElementById('incrementalBtn').addEventListener("click",incrementCounter);
document.getElementById('decrementalBtn').addEventListener("click",decrementCounter);
document.getElementById('resetBtn').addEventListener("click",resetCounter);

let counterDisplay = document.getElementById("counterDisplay");
let counterValue = 7;


function updateCounterDisplay(){
    counterDisplay.textContent = counterValue;
}

function incrementCounter(){
    
    counterValue++;
    updateCounterDisplay();
}
function decrementCounter(){
    if(counterValue>0){
        counterValue--;
        updateCounterDisplay();
    }
    else{
        alert("Counter is already at 0");
    }
}
function resetCounter(){
    counterValue = 0;
    updateCounterDisplay();
}
