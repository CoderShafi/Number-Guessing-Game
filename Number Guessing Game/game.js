const min = 1;
const max= 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Please enter a number from ${min} - ${max}`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert("Please enter a valid Number")
    }
    else if(guess > max || guess < min){
        window.alert("Please enter a valid Number");
    }
    else{
        attempts++
        if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN")
        }
        else if(guess > answer){
            window.alert("TOO HIGH! TRY AGAIN")
        }
        else{
            window.alert(`Correct! The answer was ${answer} and it took ${attempts} attempts`);
            running = false;
        }
    }
}