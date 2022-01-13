const questions = [
    {
        questionText: "Commonly used data types DO NOT include:",
        options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts",
    },
    {
        questionText: "Arrays in JavaScript can be used to store ______.",
        options: [
            "1. numbers and strings",
            "2. other arrays",
            "3. booleans",
            "4. all of the above",
        ],
        answer: "4. all of the above",
    },
    {
        questionText:
            "String values must be enclosed within _____ when being assigned to variables.",
        options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        answer: "3. quotes",
    },
    {
        questionText:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: [
            "1. JavaScript",
            "2. terminal/bash",
            "3. for loops",
            "4. console.log",
        ],
        answer: "4. console.log",
    },
    {
        questionText:
            "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
        options: ["1. break", "2. stop", "3. halt", "4. exit"],
        answer: "1. break",
    },
];
var i = 0;
var points = 0;
var leaderBoard=document.getElementById("leaderboard")
var container = document.querySelector(".container");
var submit = document.getElementById("submit");
var submited = document.getElementById("submited");
var timeValue = document.getElementById("time-value")
var time = "50"
var list = [];
var scoreList=[];
var total=[]

function run(){

    var timer = window.setInterval(() => {
        timeValue.textContent = `${time}`
        time = eval(time - 1);
        if (time < 0) {
            clearInterval(timer)
            testEnd()
        }
    }, 1000);
    display()
}

function displayscore() {
    time="00"
 var totalList=total.join("")
 container.innerHTML = `<h2>HighScore</h2>
<ol>
${totalList}
</ol>
<div class="buttons">

        

<a class="back btn" href="" onclick="document.location.reload()" >Go Back</a>

        
</div>`

}

 function some(){
    var input = document.getElementById("input")
    list.push(input.value)
    
    scoreList.push(points)
total.push(`<li>${list[list.length-1]} ${scoreList[scoreList.length-1]}</li>`)
    displayscore();
}

function testEnd() {
    time="00"
    container.innerHTML = `<h2>ALL Done!</h2>
    <div>Your final Score is ${points}</div>
 <div class="input">
 <div class="intials">Enter Name:</div>
    <input type="text" id="input">
    <a href="#" id="submit" onclick="some()">Submit</a>
    </div>`
    
}


function answercheck(e) {
    var option = document.querySelectorAll(".options")
    var result = document.querySelector(".result");
    var value = option[e].textContent;


    {if (value == `${questions[i].answer}`) {
        option[e].style.backgroundColor = "green"
        result.textContent = "correct!"
        i = i + 1;
        points = points + 1;

    }
    else {
        option[e].style.backgroundColor = "red"
        result.textContent = "Wrong!"
        wrong();
        i = i + 1

    }}
    
    {if(i < questions.length && time > 0) {
        setTimeout(display,1500);
    }
    else if(time < 0) {
        testEnd()
    }
    else {
        testEnd();
    }}


}
function clear(){
    total=[]
    
}

function wrong() {
    time = eval(time - 10);
}

function display() {
    container.innerHTML = `<h2>${questions[i].questionText}</h2>
  <div class="option-conatiner">
  <a href="#"class="options option-1" onclick="answercheck(0)">${questions[i].options[0]}</a>
  <a href="#" class="options option-2" onclick="answercheck(1)">${questions[i].options[1]}</a>
  <a href="#" class="options option-3" onclick="answercheck(2)">${questions[i].options[2]}</a>
  <a href="#" class="options option-4" onclick="answercheck(3)">${questions[i].options[3]}</a>
  <div class="result"></div>
  </div>`
}
