const rock = {
    name: "Rock",
    userMessage : "You chose rock.",
    computerMessage: "Computer chose rock.",
    value : 0
}

const paper = {
    name: "Paper",
    userMessage : "You chose paper.",
    computerMessage: "Computer chose paper.",
    value: 1
}

const scissors = {
    name: "Scissors",
    userMessage : "You chose scissors.",
    computerMessage: "Computer chose scissors.",
    value: 2
}

let winner = " ";
let userScore = 1;
let computerScore = 1;

// start of Rock function

function userChoice1() {
    const computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);

    document.getElementById('user-choice').innerHTML = `${rock.userMessage}`;


if(computerChoice == rock.value){
    document.getElementById('computer-choice').innerHTML = `${rock.computerMessage}
    `;

    winner = "It is a tie!";

    document.getElementById('winner').innerHTML = `${winner}`;
    
} else if (computerChoice == paper.value){
    document.getElementById('computer-choice').innerHTML = `${paper.computerMessage}
    `;

    winner = "The computer won!";

    document.getElementById('winner').innerHTML = `${winner}`;
    document.getElementById('computer-score').innerHTML = `${computerScore++}`;


} else {
    document.getElementById('computer-choice').innerHTML = `${scissors.computerMessage}`;

    winner = "You Won!";

    document.getElementById('winner').innerHTML = `${winner}`;

    document.getElementById('user-score').innerHTML = `${userScore++}`;


}

// start of paper function

}

function userChoice2() {
    const computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);

    document.getElementById('user-choice').innerHTML = `${paper.userMessage}`;

    if(computerChoice == rock.value){
        document.getElementById('computer-choice').innerHTML = `${rock.computerMessage}
        `;
        winner = "You Won!";

        document.getElementById('winner').innerHTML = `${winner}`;
        document.getElementById('user-score').innerHTML = `${userScore++}`;

    } else if (computerChoice == paper.value){
        document.getElementById('computer-choice').innerHTML = `${paper.computerMessage}
        `;
        winner = "It is a tie!";

        document.getElementById('winner').innerHTML = `${winner}`;

    } else {
        document.getElementById('computer-choice').innerHTML = `${scissors.computerMessage}`;

        winner = "You Lost!";

        document.getElementById('winner').innerHTML = `${winner}`;
        document.getElementById('computer-score').innerHTML = `${computerScore++}`;

    }
    

}

//start of scissors function

function userChoice3() {
    const computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);

    document.getElementById('user-choice').innerHTML = `${scissors.userMessage}`;

    if(computerChoice == rock.value){
        document.getElementById('computer-choice').innerHTML = `${rock.computerMessage}
        `;
        winner = "You Lost!";

        document.getElementById('winner').innerHTML = `${winner}`;
        document.getElementById('computer-score').innerHTML = `${computerScore++}`;

    } else if (computerChoice == paper.value){
        document.getElementById('computer-choice').innerHTML = `${paper.computerMessage}
        `;
        
        winner = "You Won!";

        document.getElementById('winner').innerHTML = `${winner}`;
        document.getElementById('user-score').innerHTML = `${userScore++}`;
    } else {
        document.getElementById('computer-choice').innerHTML = `${scissors.computerMessage}`;
        winner = "It is a tie!";

        document.getElementById('winner').innerHTML = `${winner}`;
    }
   
}



