const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// ---------------- GAME CODE ---------------------

let playerScore = 0;
let computerScore = 0;
let ties = 0;
let roundNumber = 0;
let winningCriteria = 5;

/* CHOICES
 * 0 - Rock
 * 1 - Paper
 * 2 - Scissors
 */

 function computerPlay()     //Computer Selection
{
    let choice = Math.floor(Math.random()*3);
    if(choice === 0)
    {
        return 'rock';
    }
    else if(choice === 1)
    {
        return 'paper';
    }
    else
    {
        return 'scissors';
    }
}

//Play Round Function
function playRound(playerSelection, computerSelection)
{
    let playerWon = false;
    
    if(playerSelection === computerSelection)
    {
        console.log(`It's a tie. Both selected ${capitalize(playerSelection)}!`);
        ties++;
        return;
    }
    
    else if ( (playerSelection==='rock' && computerSelection==='scissors') || 
            (playerSelection==='paper' && computerSelection==='rock') ||
            (playerSelection==='scissors' && computerSelection==='paper') )
    {
        playerWon = true;
        playerScore++;
    }
    else
    {
        playerWon = false;
        computerScore++;
    }
    
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);
    
    let status = playerWon? 'Win' : 'Lose';
    let winningSelection = playerWon? playerSelection : computerSelection;
    let losingSelection = playerWon? computerSelection : playerSelection;
    let beatORbeats = winningSelection==='Scissors' ? 'beat' : 'beats';
    
    console.log(`You ${status}! ${winningSelection} ${beatORbeats} ${losingSelection}!`);
}

function capitalize(str)    //Capitalize First Letter
{
    return (str[0].toUpperCase() + str.slice(1));
}

window.addEventListener('click', e=> playRound(e.target.getAttribute('id'), computerPlay()));
/*
function game()
{
    let playerScore = 0;
    let computerScore = 0;
    let ties = 0;
    let roundNumber = 0;
    let winningCriteria = 5;
    
    while
    {
        //let playerChoice = prompt("Make your move:");
        let playerChoice;
        playerChoice = playerChoice.toLowerCase();
        
        if(playerChoice==='rock' || playerChoice==='paper' || playerChoice==='scissors')
        {
            let message = playRound(playerChoice, computerPlay());
            console.log(message);
            
            if(message.includes('Win'))
            {
                playerScore++;
            }
            else if(message.includes('Lose'))
            {
                computerScore++;
            }
            else
            {
                ties++;
            }
        }
        else
        {
            alert("Invalid Input. Please enter Rock/Paper/Scissors.");
            roundNumber--;
        }
    }
    
    console.log("---Results---");
    console.log("Your Score: "+playerScore);
    console.log("Computer's Score: "+computerScore);
    console.log("Ties: "+ties);
    
    let status = (playerScore > computerScore) ? "You Win!" : 
                    (playerScore === computerScore) ? "It's a Tie!" : "You Lose."
    console.log(status);
}

game();
*/