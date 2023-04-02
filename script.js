// variables pointing to html doc
var startButton = document.getElementById("start");
var count = document.getElementById("timer");

// question answer containers 
var question = document.getElementById("question");
var answerContainer = document.getElementById("answers")
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");



// questions 
var qAndA = [
    {question:"What does i stand for in typical for loops?",
    options:["Indicate","Index","Isolate","I dunno"],
    answerIndex : 1
    },
    {question:"Which one of these is NOT an event handler for .addEventListener?",
    options:["click","mouseout", "submit", "over"],
    answerIndex: 3
    },
    {question:"setInterval() is counted in:",
    options:["milliseconds", "minutes","seconds","nanoseconds"],
    answerIndex: 0
    }
 ]   

 var qText = question.textContent;
 var a1Text = answer1.textContent;
 var a2Text = answer2.textContent;
 var a3Text = answer3.textContent;
 var a4Text = answer2.textContent

var qAndALength = Object.keys(qAndA).length



// creating form elements 
var form = document.querySelector("form");
var labelEl = document.createElement("label");
var inputEl = document.createElement("input");
labelEl.textContent = "Name";
var submit = document.createElement("button")
submit.textContent = "Submit";


// for scoreboard
var ol = document.querySelector("ol")

var timeGiven = 20;

// clicking the start button will start the timer, and show the first questions 
// if the timer runs out the user form will be shown 
startButton.addEventListener("click",function(event){
    console.log('hey');
    var timeInterval = setInterval(function(){
        timeGiven--
        if(timeGiven >=1){
            count.textContent = (timeGiven + " seconds left")
            
        }
          // if the timer is equal to zero then the form for the scoreboard will show 
        if(timeGiven === 0){
            count.textContent = ("Times up!");
            clearInterval(timeInterval);
           displayForm()
            
        }

    },1000)
    // first questions presented
    question.textContent = qAndA[0].question;
    answer1.textContent = qAndA[0].options[0];
    answer2.textContent = qAndA[0].options[1];
    answer3.textContent = qAndA[0].options[2];
    answer4.textContent = qAndA[0].options[3];
         
     })


    //  if anywhere in the button container is clicked then:
    answerContainer.addEventListener("click",function(event){
        event.preventDefault()
        if(event.target ===answer2){
           event.stopPropagation
           console.log("q1 correct");
           timeGiven = timeGiven
        }
        else{
           console.log("q1wrong")
           timeGiven = timeGiven - 5;
           
        }
     
    for(var i = 0;i<qAndALength;i++){
        question.textContent = qAndA[i].question;
        answer1.textContent = qAndA[i].options[0];
        answer2.textContent = qAndA[i].options[1];
        answer3.textContent = qAndA[i].options[2];
        answer4.textContent = qAndA[i].options[3];
     
        if(i = 1){
           if(event.target === answer3){
              event.stopPropagation
              timeGiven = timeGiven
              
           }
           else{
              console.log("q2 wrong");
              timeGiven = timeGiven-5;
              
           }
        }
        
     
        if(i=2){
           if(event.target === answer1){
              event.stopPropagation;
              console.log("q3 right");
              timeGiven = timeGiven   
              displayForm()
           }
           else{
              console.log("q3 wrong");
              timeGiven = timeGiven-5
              displayForm()
              
           }
        }
        }
    }
        
     )
    


    
    
   
        
// storing the users name and score in an object 
function storeUserInfo(){
    var userInfo = {
    // need to have .value to input the string that is the name 
        userName:inputEl.value,
        score: timeGiven
    
};
// setting the userInfo into local storage
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
}
// printing the users name 
function printScore(){
    ol.innerHTML = " "
    console.log("yup")
    // retreiving the usersInfo from local storage 
    var lastUser = JSON.parse(localStorage.getItem("userInfo"))
    var li = document.createElement("li")
    li.textContent = ("Name: "+lastUser.userName + " | Score: "+lastUser.score) 
    ol.appendChild(li)
// need to clear the inner HTML
   
}

// triggered by the end of the timer 
function displayForm(){
    
    // event.preventDefault();
    // TODO add a score element right here score.textContent = ("Your score is" + score)
    form.appendChild(labelEl);
    form.appendChild(inputEl);
    form.appendChild(submit)
    
    submit.addEventListener("click",function(event){
        event.preventDefault();
        storeUserInfo();
    // ol.innerHTML = ""
       
        printScore();
    }

        )
        // for loop to add a new list item every time a new name is added to userInfo
        // var = names[]
        // for(var i = 0; i<names.length;i++){
        //     // var listNames = names[i];
        //     
            

          
        }
    
        // labelEl.remove;
        // inputEl.remove;
        // submit.remove;
    
