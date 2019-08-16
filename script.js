const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const status = document.querySelector("#status");
const rounds = document.querySelector("#rounds");
const wins = document.querySelector("#wins");
const losses = document.querySelector("#losses");
const ties = document.querySelector("#ties");

const reset = document.querySelector("#reset");

const finalResult = document.querySelector("#final_result");

const buttons = document.querySelector(".buttons");

buttons.addEventListener('click', executePlayRound);

function executePlayRound(event)
{
    playRound(event.target.getAttribute('id'), computerPlay());
}

// ---------------- GAME CODE ---------------------

let roundNumber = 0;
let winningCriteria = 5;

/* CHOICES
 * 0 - Rock
 * 1 - Paper
 * 2 - Scissors
 */

function capitalize(str)    //Capitalize First Letter
{
    return (str[0].toUpperCase() + str.slice(1));
}

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

    if(!playerSelection)
    {
        return;
    }
    let playerWon = false;
    
    if(playerSelection === computerSelection)
    {
        status.innerText = `It's a tie. Both selected ${capitalize(playerSelection)}!`;
        ties.innerText++;
        rounds.innerText++;
        return;
    }
    
    else if ( (playerSelection==='rock' && computerSelection==='scissors') || 
            (playerSelection==='paper' && computerSelection==='rock') ||
            (playerSelection==='scissors' && computerSelection==='paper') )
    {
        playerWon = true;
        wins.innerText++;
    }
    else
    {
        playerWon = false;
        losses.innerText++;
    }
    
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);
    
    let win_or_loss_status = playerWon? 'Win' : 'Lose';
    let winningSelection = playerWon? playerSelection : computerSelection;
    let losingSelection = playerWon? computerSelection : playerSelection;
    let beatORbeats = winningSelection==='Scissors' ? 'beat' : 'beats';
    
    status.innerText = `You ${win_or_loss_status}! ${winningSelection} ${beatORbeats} ${losingSelection}!`;
    rounds.innerText++;

    if(wins.innerText === "5" || losses.innerText === "5")
    {
        if(wins.innerText > losses.innerText)
        {
            finalResult.innerText = "You Won! Reset the Game to Play again.";
        }
        else
        {
            finalResult.innerText = "You Lost. Reset the Game to Play again.";
        }
        buttons.removeEventListener('click', executePlayRound);
    }

    return;
}

reset.addEventListener('click', resetGame);

function resetGame() {
    document.location.reload();
}