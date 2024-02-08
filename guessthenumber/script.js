`use strict`;
/* 
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 13;

document.querySelector('.guess').value = 50;
console.log(document.querySelector('.guess').value);
*/

// event listner and event handler:
// eventlistern is an event occuring on web page, or an opertion we have to perform to do task:
// fuction that operate the event listner is known as event handeler;
let cnt = 20;
let high = 0;
document.querySelector('.score').textContent = cnt;

let nayanshree = Math.trunc(Math.random()*20)+1;


document.querySelector('.check').addEventListener('click', function() { 

    //console.log(document.querySelector('.guess').value);
    // humne uper bnaya tha ki, message change ho rha h into correct number wala:
    // document.querySelector('.message').textContent = 'Correct Number!';

    // ab uper waale funtion of variable mai save kr lo aur vo string mai output dega to usko convert kr lo:
    // like that:

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
        document.querySelector('.message').textContent = 'No Number!';
    }
    else if(guess == nayanshree){
        document.querySelector('.message').textContent = 'Correct Answer Bale Bale';
        document.querySelector('.highscore').textContent = cnt;

        // display when person winn:
        document.querySelector('.number').textContent = nayanshree;

        document.querySelector('body').style.backgroundColor = '#60B347';
        // changing the the width of number block;
        document.querySelector('.number').style.width = '30rem';

        if(cnt > high){
            high = cnt;
            document.querySelector('.highscore').textContent = high;
        }
    }
    else if(guess > nayanshree){
        if(cnt > 1){
            document.querySelector('.message').textContent = 'Too High Bacche';
            cnt--;
            document.querySelector('.score').textContent = cnt;
        }
        else{
            document.querySelector('.message').textContent = 'You Lost the game, get out';
            document.querySelector('.score').textContent = 0;
        }
    }
    else if(guess < nayanshree){
        if(cnt > 1){
            document.querySelector('.message').textContent = 'Too Low bacche';
            cnt--;
            document.querySelector('.score').textContent = cnt;
        }
        else{
            document.querySelector('.message').textContent = 'You Lost the game, get out';
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    cnt = 20;
    nayanshree = Math.trunc(Math.random()*20)+1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = cnt;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem';
})