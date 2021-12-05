let buttons = document.querySelectorAll("button");
let disButtons = document.querySelectorAll(".disable");
let playerScore = document.querySelector("playerScore");
let computerScore = document.querySelector("computerScore");
let playAgainBtn = document.getElementById("playAgainBtn");
document.getElementById('playAgainBtn').style.visibility='hidden';

//)
for (let button of Array.from(buttons)) {
    button.addEventListener("click", event => {
        let playerChoice = event.target.getAttribute("data-selection");
        let computerChoice = computerPlay(); 
        let score = playRound(playerChoice,computerChoice,playerScore, computerScore);
        
        if (score === "player") {
            playerScore++;
            document.querySelector("#playerScore").innerHTML = playerScore;
            
        }
        else if (score === "computer"){
            computerScore++;
            document.querySelector("#computerScore").innerHTML = computerScore;
            
        }
        else { return;}
        if (playerScore >= 5) {
            document.querySelector("#playerScore").innerHTML = playerScore;
            document.querySelector("#currentStandings").innerHTML = 'WINNER IS PLAYER';
            // for (let i = 0; i < buttons.length; i++) {
            //     buttons[i].style.visibility = "hidden";}
            playAgain();
            // for (let i = 0; i < buttons.length; i++) {
            //     buttons[i].style.visibility = "visible";}
            return;
            
        }
        else if (computerScore >= 5){
            document.querySelector("#computerScore").innerHTML = computerScore;
            document.querySelector("#currentStandings").innerHTML = 'WINNER IS COMPUTER';
              // for (let i = 0; i < buttons.length; i++) {
            //     buttons[i].style.visibility = "hidden";}
            playAgain();
            // for (let i = 0; i < buttons.length; i++) {
            //     buttons[i].style.visibility = "visible";}
            return;
        }
        
        
    })}

 
    
    
    function playAgain() {
        playAgainBtn.style.visibility = 'visible';
        playAgainBtn.addEventListener("click", event => {
            
            document.querySelector("#playerScore").innerHTML = 0;
            document.querySelector("#computerScore").innerHTML = 0;
            playerScore = 0
            computerScore = 0
            playAgainBtn.style.visibility = 'hidden';
            document.querySelector("#currentStandings").innerHTML = 'NEW GAME IS ABOUT TO BEGIN';
            
        });
        
    }
    // function disableButtons() {
    
    //     disButtons.forEach(function (i) {
    //         i.removeEventListener('click', function() {
    //             console.log(i);
    //         });
    //     })
    // }
    
    
    
    
    
    
    
    function computerPlay () {    //randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
        let computerTurn = 1
        computerTurn = (Math.floor(Math.random()*3))+1        
        return computerTurn;
        //1 = Rock
        //2 = Paper
        //3 = Scissors
    }
    
    
    //  The function should take two parameters - the playerSelection and computerSelection - 
    //  and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
    
    function playRound (playerSelection, computerSelection, playerScore, computerScore) {  
        
        
        if (playerSelection == 1 && computerSelection == 1) {
            document.querySelector("#currentStandings").innerHTML = 'Tie! Rock equals Rock';
        } 
        else if (playerSelection == 1 && computerSelection == 2) {
            document.querySelector("#currentStandings").innerHTML = 'Lose! Rock looses to Paper';
            return "computer";
            
        }
        else if (playerSelection == 1 && computerSelection == 3) {
            document.querySelector("#currentStandings").innerHTML = 'Win! Rock beats Scissors';
            return "player";
            
        }
        else if (playerSelection == 2 && computerSelection == 1) {
            document.querySelector("#currentStandings").innerHTML = 'Win! Paper beats Rock';
            return "player";
            
        }
        else if (playerSelection == 2 && computerSelection == 2) {
            document.querySelector("#currentStandings").innerHTML = 'Tie! Paper equals Paper';
        }
        else if (playerSelection == 2 && computerSelection == 3) {
            document.querySelector("#currentStandings").innerHTML = 'Lose! Paper looses to Scissors';
            return "computer";
            
        }
        else if (playerSelection == 3 && computerSelection == 1) {
            document.querySelector("#currentStandings").innerHTML = 'Lose! Scissors loose to Rock';
            return "computer";
            
        }
        else if (playerSelection == 3 && computerSelection == 2) {
            document.querySelector("#currentStandings").innerHTML = 'Win! Scissors beat Paper';
            return "player";
            
        }
        else if (playerSelection == 3 && computerSelection == 3) {
            document.querySelector("#currentStandings").innerHTML = 'Tie! Scissors equal Scissors';
        }
        else {
            return;
        }
        
        return;
        
        
    }
    
    
    
    // function doAction () {
    //     var input = document.getElementById('numberinput');
    //     var times = parseint(input.value);
    
    
    
    // function game() {
    //     playerScore = 0;
    //     i = 0;
    //     while(i < 5 )
    //     {
    //         const input = Number(window.prompt("Select Rock (1), Paper (2) or Scissors(3)", ""));
    //         if (input == 1 || input == 2 || input == 3)
    //         {
    //             const computerSelection = parseInt(computerPlay());
    //             playerScore = playRound(input, computerSelection, playerScore);
    //             console.log(playerScore);
    //             i++;
    //             console.log("Out of the " + i + " games, you won " + playerScore + " time(s).")
    //         }
    //         else {
    //             console.log ("incorrect selection");
    
    //         }
    //     }
    //     if (playerScore >2) {
    //         document.getElementById("demo").innerHTML = "CONGRATS Out of the 5 games, you won " + playerScore + " time(s)."
    //     }
    //     else {
    //         document.getElementById("demo").innerHTML = "SORRY Out of the 5 games, you won only " + playerScore + " time(s)."
    
    //     }    
    // }
    
    
    
    
    
    
    //   }
    
    
    
    
    //let button1 = document.getElementsByTagName('1');
    
    //button1.addEventListener('click', event {
    //  console.log(textn);
    
    // btns.forEach(function (i) {
    //   i.addEventListener('click', function() {
    //     console.log(i);
    //   });
    // })
    
    // buttonPress.forEach((button) => {
    
    //     // and for each one we add a 'click' listener
    //     button.addEventListener('click', () => {
    //       console.log(button.id);
    //     });
    //   });
    
    // document.body.addEventListener("click", event => {
    //     if (event.target.nodeName == "BUTTON") {
    //       console.log("Clicked", event.target.textContent);
    //     }
    //   });
    
    
    //const playerScore = document.getElementById('playerScore');
    //const playerScore = document.getElementById('playerScore');
    
    
    
    // buttonPress.addEventListener('click',  function () {
    //     let playerSelection = buttonPress.getAttribute('id');
    //     console.log (playerSelection);
    //     playRound(playerSelection, computerPlay(), playerScore)
    
    // });
    
    
    // if (computerTurn == 1) {
    //     console.log('Tie! Rock equals Rock');
    // } 
    // else if (playerSelection == 1 && computerSelection == 2) {
    //     console.log('Lose! Rock looses to Paper');
    // }
    // else if (playerSelection == 1 && computerSelection == 3) {
    //     console.log('Win! Rock beats Scissors');
    //     playerScore++;
    // }