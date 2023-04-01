// variables pointing to html doc
var startButton = document.getElementById("start");
var count = document.getElementById("timer");
var question = document.getElementById("question");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var answers = document.getElementById("answers");


// questions 
var qAndA = {
    set1:["What does i stand for in typical for loops?","Indicate","Index","Isolate","I dunno"],
    set2:["Which one of these is NOT an event handler for .addEventListener?","click","mouseout", "submit", "over"],
    set3:["setInterval() is counted in:","milliseconds", "minutes","seconds","nanoseconds"],
};

var qAndALength = Object.keys(qAndA).length

// answers
// var answerSets = [["Indicate","Index","Isolate","I dunno"],["click","mouseout", "submit", "over"], 
//     set3:["milliseconds", "minutes","seconds","nanoseconds"]


// creating form elements 
var form = document.querySelector("form");
var labelEl = document.createElement("label");
var inputEl = document.createElement("input");
labelEl.textContent = "Name";
var submit = document.createElement("button")
submit.textContent = "Submit";

// for scoreboard
var ol = document.querySelector("ol")

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
            for(var i = 0; i <qAndALength; i++){
                question.textContent = qAndA[i].qAndA[0];
                // answer1.textContent = qAndA[i].qAndA[1];
                // answer2.textContent = qAndA[i].qAndA[2];
                // answer3.textContent = qAndA[i].qAndA[3];
                // answer4.textContent = qAndA[i].qAndA[4];
                

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
function displayForm(){
    
    // event.preventDefault();
    // TODO add a score element right here score.textContent = ("Your score is" + score)
    form.appendChild(labelEl);
    form.appendChild(inputEl);
    form.appendChild(submit)
    
    submit.addEventListener("click",function(event){
        event.preventDefault();
        var userInfo = {
            userName:inputEl,
            // score: 
        };
        // need to have .value to input the string that is the name 
        names.push(userInfo.userName.value);
       
        // need to clear the inner HTML
        ol.innerHTML = ""
        // for loop to add a new list item every time a new name is added to userInfo
        for(var i = 0; i<names.length;i++){
            var listNames = names[i];
            var li = document.createElement("li");
            console.log("help")
            li.textContent = listNames
            // li.textContent = userInfo.userName.value;
            li.setAttribute("data-index",i);
            ol.appendChild(li);
            
           
        // localStorage.setItem("userInfoStringify", JSON.stringify(userInfo))
        // li.textContent = "userInfoStringify".userName;
            labelEl.remove;
            inputEl.remove;
            submit.remove;
        }
        
    
    })
    
   
  

    

}
function scoreboard(){
for(var i = 0; i<names.length;i++){
    li.textContent = userInfo.userName;
    // li.setAttribute("data-index",i)

    ;
}


}

function scoreboardNames(){
    var lastName = JSON.parse(localStorage.getitem("userInfoStringify"));
    document.querySelector("ol").textContent = lastName
}


    // localStorage.setItem("userInfoStringify",JSON.stringify(userInfo));

