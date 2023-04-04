// variables pointing to html doc
var startButton = document.getElementById("start");
var count = document.getElementById("timer");
var replayButton = document.getElementById("replay")

replayButton.setAttribute("class", "hide");
// question answer containers 
var question = document.getElementById("question");
var answerContainer = document.getElementById("answers")
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");


var i = 0
var score = 0;
var hs;
var timeGiven = 30;
// questions 
var qAndA = [
    {
        question: "What does i stand for in typical for loops?",
        options: ["indicate", "index", "isolate", "i-dunno"],
        answer: "index"
    },
    {
        question: "Which one of these is NOT an event handler for .addEventListener?",
        options: ["click", "mouseout", "submit", "over"],
        answer: "over",
    },
    {
        question: "setInterval() is counted in:",
        options: ["milliseconds", "minutes", "seconds", "nanoseconds"],
        answer: "milliseconds"
    },
    {
        question: "Where can you find the console?",
        options: ["inside my dev tools", "printed on the page", "it doesn't do anything", "in my .html file "],
        answer: "inside my dev tools"
    }
]

console.log(qAndA[0].answer)
console.log(qAndA[1].answer)
console.log(qAndA[2].answer)



var qAndALength = Object.keys(qAndA).length

function whichQandA() {
    console.log("qandALength: " + qAndALength)
    if (i < qAndALength) {
        question.textContent = qAndA[i].question;
        answer1.textContent = qAndA[i].options[0];
        answer2.textContent = qAndA[i].options[1];
        answer3.textContent = qAndA[i].options[2];
        answer4.textContent = qAndA[i].options[3];
        
    }
    if (i === qAndALength) {
        
        console.log("i is equal to length")
    }
    if (i === qAndALength + 1) {
        displayForm()
        console.log("i is greather than length")
    }
}


// creating form elements 
var form = document.querySelector("form");
var labelEl = document.createElement("label");
var inputEl = document.createElement("input");
labelEl.textContent = "Initials";
var submit = document.createElement("button")
submit.textContent = "Submit";


// for scoreboard
var ol = document.querySelector("ol")



// clicking the start button will start the timer, and show the first questions 
// if the timer runs out the user form will be shown 
startButton.addEventListener("click", function (event) {
    startButton.setAttribute("class", "hide");
    console.log('hey');
    var timeInterval = setInterval(function () {
        timeGiven--
        if (timeGiven >= 1) {
            count.textContent = (timeGiven + " seconds left")

        }
        // if the timer is equal to zero then the form for the scoreboard will show 
        if (timeGiven <= 0) {
            count.textContent = ("Game Over!");
            clearInterval(timeInterval);
            displayForm()

        }
        if (i === qAndALength && timeGiven > 0) {
            count.textContent = (" You finished with " + timeGiven + " seconds left!");
            clearInterval(timeInterval)
            displayForm()
        }

    }, 1000)
    // first questions presented

    whichQandA()

    // start button is "replaced" by a replay button 
    replayButton.textContent = "Play Again"
    replayButton.setAttribute("class", "button");
})


//  if anywhere in the button container is clicked then:
answerContainer.addEventListener("click", function (event) {
    event.stopPropagation()
    console.log(i + "for each click")
    console.log("event.target.textContent = ", event.target.textContent);
    function scoring() {

        if (i < qAndA.length) {
            console.log(qAndA[i].answer)

            if (event.target.textContent === qAndA[i].answer) {
                score++
                console.log("correct")
            }
            else {
                timeGiven = timeGiven - 5
                console.log("wrong");
                if (timeGiven < 5) {
                    timeGiven = 0
                }
                count.textContent = (timeGiven + " seconds left");
            }
        }
        i++;
    }
    scoring()

    whichQandA()
}

)

// storing the users name and score in an object 
function storeUserInfo() {
    var userInfo = {
        // need to have .value to input the string that is the name 
        userName: inputEl.value,
        score: score

    };
    // Need to bring in existin scores from localStorage;
    hs = JSON.parse(localStorage.getItem('hs')) || [];
    hs.push(userInfo);
    // setting the userInfo into local storage
    localStorage.setItem("hs", JSON.stringify(hs));
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
}
// printing the users name 
function printScore() {
    ol.innerHTML = " "
    console.log("score is:" + score)
    // retreiving the usersInfo from local storage 
    var lastUser = JSON.parse(localStorage.getItem("userInfo"))
    var li = document.createElement("li")
    li.textContent = ("Initials: " + lastUser.userName + "  Score: " + lastUser.score)
    ol.appendChild(li)

}

// triggered by the end of the timer 
function displayForm() {
    var qAndA = document.getElementById("qAndA-div");
    qAndA.setAttribute("class", "hide");
    // event.preventDefault();
    // TODO add a score element right here score.textContent = ("Your score is" + score)
    form.appendChild(labelEl);
    form.appendChild(inputEl);
    form.appendChild(submit)

    // when the submit button is clicked then user initials and score are stored and printed 
    submit.addEventListener("click", function (event) {
        event.preventDefault();
        storeUserInfo();
        

        printScore();

    }

    )

}
// resets page to the beggining 
replayButton.addEventListener("click", function (event) {
    window.location.reload()
})



