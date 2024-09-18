'use strict'

let rand_num1 = 0;
let rand_num2 = 0;
let correctAnswers = 0; 
let incorrectAnswers = 0; 

const getRandomIntNumberRange = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}

const randomizeNumbers = () => {
    rand_num1 = getRandomIntNumberRange(1, 10);
    rand_num2 = getRandomIntNumberRange(1, 10);
    document.querySelector("#num1").innerHTML = rand_num1;
    document.querySelector("#num2").innerHTML = rand_num2;
}

addEventListener("DOMContentLoaded", () => {
    randomizeNumbers();
})

document.querySelector('button').addEventListener('click', () => {
    const answer = Number(document.querySelector('input').value);
    const correctAnswer = rand_num1 + rand_num2;

    if (answer === correctAnswer) {
        alert('Correct!');
        correctAnswers += 1; 
    } else {
        alert('Incorrect!');
        incorrectAnswers += 1; 
    }

    document.querySelector('#correctCount').innerHTML = correctAnswers;
    document.querySelector('#incorrectCount').innerHTML = incorrectAnswers;

    randomizeNumbers();
    document.querySelector('input').value = '';
});
