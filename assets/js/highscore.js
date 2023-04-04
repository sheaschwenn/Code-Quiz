var userScore = [];
ul = document.querySelector("ul")
//  printing the users name 
function printScore() {
    ul.innerHTML = " "

    // retreiving the usersInfo from local storage 

    userScore = JSON.parse(localStorage.getItem('hs')) || [];

    if (userScore === null) {
        return
    }

  

   
    for (var i = 0; i < userScore.length; i++) {
        var li = document.createElement("li")
        li.textContent = (userScore[i].userName + " - score: " + userScore[i].score)
        ul.appendChild(li)
        console.log(userScore[i])
    }

}



printScore();
