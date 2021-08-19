const quizForm= document.querySelector(".quiz-form");
const submitAnswer = document.querySelector("#submit-answer");
const output = document.querySelector("#output");

submitAnswer.addEventListener("click",calculateScore);

function calculateScore(){
let index=0;
let score=0;
let answers=["90","90","90","90"];


    let formResults=new FormData(quizForm);
    for(value of formResults.values()){
        if(value==answers[index]){
score++;
        }
        index++;
    }
output.innerText=score;
}