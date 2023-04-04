
// variables pointing to html doc
li = document.createElement("li")




var i = 0
var score = 0;





// for scoreboard
var ul = document.querySelector("ul")

var form = document.querySelector("form");
var labelEl = document.createElement("label");
var inputEl = document.createElement("input");
labelEl.textContent = "Initials";
var submit = document.createElement("button")
submit.textContent = "Submit";

var userInfo;
    
// storing the users name and score in an object 
function storeUserInfo(){
    userInfo = {
    // need to have .value to input the string that is the name 
        userName:inputEl.value,
        score: score
    
};
// Need to bring in existin scores from localStorage;
var hs = []
hs.push(userInfo.value)
localStorage.setItem("hs", JSON.stringify(hs));

;
// setting the userInfo into local storage
   
localStorage.setItem("userInfo", JSON.stringify(userInfo));
}
// printing the users name 
function printScore(){
    ul.innerHTML = " "
    console.log("score is:"+score)
    // retreiving the usersInfo from local storage 
    var userScore = JSON.parse(localStorage.getItem('hs')) || [];
    var li = document.createElement("li")
    li.textContent = ("Name: "+userScore.userName + "  Score: "+userScore.score) 
    ul.appendChild(li)
    console.log(userScore)
// need to clear the inner HTML
   
}


        storeUserInfo();
    
       
        printScore();
    