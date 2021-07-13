// const change=document.getElementById("player-id");
// console.log(change);
// change.addEventListener('click',updateName);
// function updateName(){
//     let name=prompt("Enter a new name");
//     change.textContent="Player 1 :" + name;
// }

// task # 2
// document.addEventListener("DOMContentLoaded", function() {
//     function createParagraph() {
//       let para = document.createElement('p');
//       para.textContent = 'You clicked the button!';
//       document.body.appendChild(para);
//     }

//     const buttons = document.querySelectorAll('button');

//     for(let i = 0; i < buttons.length ; i++) {
//       buttons[i].addEventListener('click', createParagraph);
//     }
//   });

//  task 3
let random = Math.floor(Math.random() * 100) + 1;
console.log(random);

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi')

const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');

let guessCount = 1;
let reset;

function checkGuess(){
let userGuess = Number(guessField.value);
if (guessCount === 1) {
    guesses.textContent = 'Previous Guess : ';
}
guesses.textContent += guessField.value + ' ';
if (userGuess === random) {
    lastResult.textContent = " Your Answer Is Correct";
    lastResult.style.backgroundColor = 'green';
    lowOrHigh.textContent = '';

    setGameOver();
}
else if (guessCount == 10) {
    lastResult.textContent='!!GAME OVER!!';
    setGameOver();
}
else{
    lastResult.textContent='Wrong';
    lastResult.style.backgroundColor = 'red';
    if(userGuess > random){
        lowOrHigh.textContent = " Your Guess is Two High";
    }
    else if(userGuess < random){
        lowOrHigh.textContent = " Your Guess is Two Low";
    }
    
}
guessCount += 1;
guessField.value="";
guessField.focus();
}
guessSubmit.addEventListener('click' , checkGuess);
// console.log(cc);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled=true;
    resetButton = document.createElement('button');
    resetButton.textContent='Start a New Game';
    document.body.append(resetButton);
    resetButton.addEventListener('click' , resetGame);
}

function resetGame(){
    guessCount=1;
    const resetParas = document.querySelectorAll('.resultParas p');
    console.log(resetParas)
    for(let i = 0; i < resetParas.length ; i++ ){
        resetParas[i].textContent ='';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled=false;
    guessSubmit.disabled=false;
    guessField.value='';
    guessField.focus;

    lastResult.style.backgroundColor='white';
    random =  Math.floor(Math.random() * 100) + 1;


}