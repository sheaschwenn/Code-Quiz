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


Your GitHub profile is an extremely important aspect of your public identity as a developer. A well-crafted one allows you to show off your work to other developers as well as potential employers. An important component of your GitHub profile—and one that many new developers often overlook—is the README.md file.

The quality of a README often differentiates a good project from a bad project. A good one takes advantage of the opportunity to explain and showcase what your application does, justify the technologies used, and even talk about some of the challenges you faced and features you hope to implement in the future. A good README helps you stand out among the large crowd of developers putting their work on GitHub.

There's no one right way to structure a good README. There is one very wrong way, however, and that is to not include a README at all or to create a very anemic one. This guide outlines a few best practices. As you progress in your career, you will develop your own ideas about what makes a good README.

At a minimum, your project README needs a title and a short description explaining the what, why, and how. What was your motivation? Why did you build this project? (Note: The answer is not "Because it was a homework assignment.") What problem does it solve? What did you learn? What makes your project stand out? 

Lastly, if your project is deployed, include a link to the deployed application here.



![Site Langing Page](./site.gif)


## Table of Contents (Optional)

If your README is very long, add a table of contents to make it easy for users to find what they need.

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

```md
![alt text](assets/images/screenshot.png)
```


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

The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)


---


© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.