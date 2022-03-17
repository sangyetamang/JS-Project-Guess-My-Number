'use strict';
/*
document.querySelector('.message').textContent = '🎉Correct Number!';
document.querySelector('.guess').value = 23;
document.querySelector('.number').textContent = 50;

//document.querySelector('.score').textContent = 20;
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//to display message
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);

        console.log(guess, typeof guess);
        // when there is no input
        if (!guess) {
            // document.querySelector('.message').textContent = '⛔ No number!';
            displayMessage('⛔ No number!');
            //when player wins
        } else if (guess === secretNumber) {
            //document.querySelector('.message').textContent = '🎉 Correct Number';
            displayMessage('🎉 Correct Number');
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            //setting highscore
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
            //when the guess is too high
        } else if (guess !== secretNumber) {
            if (score > 1) {
                //document.querySelector('.message').textContent =
                //   guess > secretNumber ? '📈 Your guess is too high!' : '📉 Your guess is too low!';
                displayMessage(guess > secretNumber ? '📈 Your guess is too high!' : '📉 Your guess is too low!');
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.score').textContent = 0;
                //document.querySelector('.message').textContent = "💥 You lost the game!";
                displayMessage('💥 You lost the game!');
                document.querySelector('body').style.backgroundColor = "#800000";
            }
        }

        // else if (guess > secretNumber && score > 0) {
        //     if (score > 1) {
        //         document.querySelector('.message').textContent = '📈 Your guess is too high!';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         document.querySelector('.score').textContent = 0;
        //         document.querySelector('.message').textContent = "💥 You lost the game!";
        //         document.querySelector('body').style.backgroundColor = "#800000";
        //     }
        //     //when the guess is too low
        // } else if (guess < secretNumber && score > 0) {
        //     if (score > 1) {
        //         document.querySelector('.message').textContent = '📉 Your guess is too low!';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         document.querySelector('.score').textContent = 0;
        //         document.querySelector('.message').textContent = "💥 You lost the game!";
        //         document.querySelector('body').style.backgroundColor = "#800000";
        //     }
        // }

    });

document.querySelector('.again').addEventListener
    ('click', function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        // document.querySelector('.message').textContent = 'Start guessing...';
        displayMessage('Start guessing...');
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = '';
        document.querySelector('.number').textContent = "?";
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('body').style.backgroundColor = '#222';
    });



