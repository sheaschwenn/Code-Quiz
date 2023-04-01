// variables pointing to html doc
var startButton = document.getElementById("start");
var count = document.getElementById("timer");
var question = document.getElementById("question");



// questions 
var questions = ["What does i stand for in typical for loops?",
                 "Which one of these is NOT an event handler for .addEventListener?",
                 "setInterval() is counted in:"];


// answers
var answerSet1 = ["Indicate","Index","Isolate","I dunno"];
var answerSet2 = ["click","mouseout", "submit", "over"];
var answerSet3 = ["milliseconds", "minutes","seconds","nanoseconds"];


// creating form elements 
var form = document.querySelector("form");
var labelEl = document.createElement("label");
var inputEl = document.createElement("input");
labelEl.textContent = "Name";

// for scoreboard
var ol = document.querySelector("ol")
var li = document.createElement("li")
var names = []

// clicking the start button will start the timer 
startButton.addEventListener("click",function(event){
    var timeGiven = 3;
    console.log('hey');
    var timeInterval = setInterval(function(){
        timeGiven--
        if(timeGiven >=1){
            count.textContent = (timeGiven + " seconds left")
            console.log("what up")
            for(var i = 0; i <questions.length; i++){
                question.textContent = questions[i]
                

            }
        }
        // if the timer is equal to zero then the form for the scoreboard will show 
        if(timeGiven === 0){
            count.textContent = ("Times up!");
            clearInterval(timeInterval);
            displayForm();
        }
    },1000);
})

// triggered by the end of the timer 
function displayForm(event){
    // event.preventDefault();
    // TODO add a score element right here score.textContent = ("Your score is" + score)
    form.appendChild(labelEl)
    form.appendChild(inputEl)
   
    var userInfo = {
        userName:inputEl,
        // score: 
    }
    return userInfo
}
function scoreboard(){
for(var i = 0; i<names.length;i++){
    li.textContent = userInfo.userName;
    // li.setAttribute("data-index",i)

    ol.appendChild(li);
}


}

function scoreboardNames(){
    var lastName = localStorage.getitem("name")
}


    // localStorage.setItem("userInfoStringify",JSON.stringify(userInfo));

