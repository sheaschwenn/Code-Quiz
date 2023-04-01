// variables pointing to html doc
var startButton = document.getElementById("start");
var count = document.getElementById("timer");

// creating form elements 
var form = document.querySelector("form");
var labelEl = document.createElement("label");
var inputEl = document.createElement("input");
labelEl.textContent = "Name";

startButton.addEventListener("click",function(){
    var timeGiven = 3;
    console.log('hey');
    var timeInterval = setInterval(function(){
        timeGiven--
        if(timeGiven >=1){
            count.textContent = (timeGiven + " seconds left")
            console.log("what up")
        }
        if(timeGiven === 0){
            count.textContent = ("Times up!");
            clearInterval(timeInterval);
            displayForm();
        }
    },1000);
})

function displayForm(){
    form.appendChild(labelEl)
    form.appendChild(inputEl)
    var userInfo = {
        firstName:inputEl,
        // score: 
    }
}

