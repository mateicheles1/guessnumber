'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').textContent = ' ';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = ' ';
});


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

        /// NO INPUT ///
     if (!guess) {
         document.querySelector('.message').textContent = 'Please input a number between 1-20 😀';
     
        
         /// PLAYERS WIN ///
        } else if (guess === secretNumber) {
         document.querySelector('.message').textContent = 'Correct number 🎉';
         document.querySelector('.number').textContent = secretNumber;
         document.querySelector('body').style.backgroundColor = '#60b347';
         document.querySelector('.number').style.width = '30rem';
          
          if(score > highscore) {
              highscore = score;
              document.querySelector('.highscore').textContent = highscore;
          }
     
        
         /// NUMBER TOO HIGH ///
        } else if (guess > secretNumber) {
         
        if (score > 1) {
        document.querySelector('.message').textContent = 'Too high 📈';
         score--;
         document.querySelector('.score').textContent = score;
        } else {
            document.querySelecetor('.message').textConten = 'You lost 😢';
            document.querySelector('.score').textContent = 0;

        }
         
     
        /// NUMBER TOO LOW ///
        } else if (guess < secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = 'Too low 📉';
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You lost 😢';
                document.querySelector('.score').textContent = 0;
        }
     }
});
