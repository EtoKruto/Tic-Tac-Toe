
function computerPlay () {    //randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
    let computerTurn = 1
    computerTurn = (Math.floor(Math.random()*3))+1
    
    return computerTurn;
    //1 = Rock
    //2 = Paper
    //3 = Scissors
}

function playRound (playerSelection, computerSelection, currentScore) {   // The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
    if (playerSelection == 1 && computerSelection == 1) {
        alert('Tie! Rock equals Rock');
    } 
    else if (playerSelection == 1 && computerSelection == 2) {
        alert('Lose! Rock looses to Paper');
    }
    else if (playerSelection == 1 && computerSelection == 3) {
        alert('Win! Rock beats Scissors');
        currentScore++;
    }
    else if (playerSelection == 2 && computerSelection == 1) {
        alert('Win! Paper beats Rock');
        currentScore++;
    }
    else if (playerSelection == 2 && computerSelection == 2) {
        alert('Tie! Paper equals Paper');
    }
    else if (playerSelection == 2 && computerSelection == 3) {
        alert('Lose! Paper looses to Scissors');
    }
    else if (playerSelection == 3 && computerSelection == 1) {
        alert('Lose! Scissors loose to Rock');
    }
    else if (playerSelection == 3 && computerSelection == 2) {
        alert('Win! Scissors beat Paper');
        currentScore++;
    }
    else if (playerSelection == 3 && computerSelection == 3) {
        alert('Tie! Scissors equal Scissors');
    }
    else {
        message = 'What Happened?';
    }
    
    return currentScore;    
    
    
    
}



// function doAction () {
//     var input = document.getElementById('numberinput');
//     var times = parseint(input.value);



function game() {
    currentScore = 0;
    i = 0;
    while(i < 5 )
    {
        const input = Number(window.prompt("Select Rock (1), Paper (2) or Scissors(3)", ""));
        if (input == 1 || input == 2 || input == 3)
        {
            const computerSelection = parseInt(computerPlay());
            currentScore = playRound(input, computerSelection, currentScore);
            console.log(currentScore);
            i++;
            alert("Out of the " + i + " games, you won " + currentScore + " time(s).")
        }
        else {
            alert ("incorrect selection");
            
        }
    }
    if (currentScore >2) {
        document.getElementById("demo").innerHTML = "CONGRATS Out of the 5 games, you won " + currentScore + " time(s)."
    }
    else {
        document.getElementById("demo").innerHTML = "SORRY Out of the 5 games, you won only " + currentScore + " time(s)."

    }    
}