# Code-Quiz
Multiple choice quiz to test coding knowledge

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |    
|JavaScript| [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)|

## Description 

[Take my Quiz!](https://sheaschwenn.github.io/Code-Quiz/)

A coding quiz written with HTML, CSS and JavaScript. This quiz can be used to test the users knowledge of JavaScript and saves the users score so they can track progress as they continue to learn more about JavaScript. 




![Site Langing Page](assets\code-quiz.gif)


## Table of Contents 


* [JavaScript Example](#javascript-example)
* [Usage](#usage)
* [Learning Points](#learning-points)
* [Author Info](#author-info)
* [Credits](#credits)
* [License](#license)


## JavaScript Example

A function to iterate through an array that held the questions, answer options, and correct options.  This function also called another function that displayed a form to input the users initials.  The users initials would then get stored along with their score in local storage to be rendered on the current page as well as on anther page that held all scores. 
```js
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
```


## Usage 

This web application can be used to test your knowledge of JavaScript as a quick check in. 


![code quiz landing page](assets/Screenshot%202023-04-03%20193341.png)



## Learning Points 
This was my first project incoperating HTML, CSS, and JavaScript all together in on application, and let me tell you I learned a lot. 

* I gained a much better understanding of event listeners

* APIs in general and how to use them to add functionality to my JavaScript

* Local storage 

* Objects

* And just generally I learned a lot about JavaScript and know that there is so so so much more to learn! 


## Author Info


### Shea Schwennicke 


* [Portfolio](https://sheaschwenn.github.io/Portfolio/)
* [LinkedIn](https://www.linkedin.com/in/shea-schwennicke-76a378210/)
* [Github](https://github.com/sheaschwenn)




Give credit where credit is due! 

If you Pseudocode or Pair Program with someone else, give them kudos in your Contributors section!


## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.


## License

MIT License 

For more information please refer to the LICENSE in the repo.


---


© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.