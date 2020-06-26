"use strict"

//classes  game and player

class Game{
    constructor(){
        this.playerOne;// = new Player(name);
        // this.playerTwo = new Player(name);
        this.playerTwo;// = null;
        // this.botPlayer = new ComputerPlayer()
        this.choices = ["rock", "paper", "scissors", "lizard", "spock"];
        
    }

    runGame(){      // main method
        this.displayRules();
        this.numberOfPlayers();
        while(this.playerOne.score < 3 && this.playerTwo.score < 3){
           
            let playerOneChoice = this.playerOne.chooseGesture(); 
            let playerTwoChoice = this.playerTwo.chooseGesture(this.choices);
            this.logic(playerOneChoice, playerTwoChoice);
            
        }
        if (this.playerOne.score == 3){
            alert("Congratulations " + this.playerOne.name + "! You are the winner");
        }
        else if (this.playerTwo.score == 3){
            alert("Contratulations " + this.playerTwo.name + "! You are the winner");
        }

    }

        // determine game mode (instantiate playerTwo as corect player type)
        // this.playerTwo.chooseGesture(this.choices);


    displayRules(){
        console.log("Welcome to Rock, Paper, Scissors, Lizard, Spock.");
        console.log("You and your oppentent will make a selection from the avaialable options.");
        console.log("The player that wins 3 rounds first, Wins the Game!");
    }





    logic(playerOneChoice, playerTwoChoice){
        // let playerChoice = this.playerOne.chooseGesture()
        // let botPlayer = this.playerTwo.chooseGesture()

        if (playerOneChoice == playerTwoChoice){
            alert("It's a Tie! You each chose " + playerOneChoice);
        }
        else if (playerOneChoice == "rock" && playerTwoChoice == "paper" || playerTwoChoice == "spock"){
            alert("Sorry " + this.playerOne.name + ", you lost! You chose " + playerOneChoice + " and " + this.playerTwo.name + " chose " + playerTwoChoice + ".");
            this.playerTwo.score++;
        }
        else if (playerOneChoice == "rock" && playerTwoChoice == "scissors" || playerTwoChoice == "lizard"){
            alert("Yay " + this.playerOne.name + ", you won! You chose " + playerOneChoice + " and " + this.playerTwo.name + " chose " + playerTwoChoice + ".");
            this.playerOne.score++;
        }
        else if (playerOneChoice == "paper" && playerTwoChoice == "rock" || playerTwoChoice == "spock"){
            alert("Yay " + this.playerOne.name + ", you won! You chose " + playerOneChoice + " and " + this.playerTwo.name + " chose " + playerTwoChoice + ".");
            this.playerOne.score++;
        }
        else if (playerOneChoice == "paper" && playerTwoChoice == "scissors" || playerTwoChoice == "lizard"){
            alert("Sorry " + this.playerOne.name + ", you lost! You chose " + playerOneChoice + " and " + this.playerTwo.name + " chose " + playerTwoChoice + ".");
            this.playerTwo.score++;
        }
        else if (playerOneChoice == "scissors" && playerTwoChoice == "rock" || playerTwoChoice == "spock"){
            alert("Sorry " + this.playerOne.name + ", you lost! You chose " + playerOneChoice + " and " + this.playerTwo.name + " chose " + playerTwoChoice + ".");
            this.playerTwo.score++;
        }
        else if (playerOneChoice == "scissors" && playerTwoChoice == "paper" || playerTwoChoice == "lizard"){
            alert("Yay " + this.playerOne.name + ", you won! You chose " + playerOneChoice + " and " + this.playerTwo.name + " chose " + playerTwoChoice + ".");
            this.playerOne.score++;
        }
        else if (playerOneChoice == "lizard" && playerTwoChoice == "paper" || playerTwoChoice == "spock"){
            alert("Yay " + this.playerOne.name + ", you won! You chose " + playerOneChoice + " and " + this.playerTwo.name + " chose " + playerTwoChoice + ".");
            this.playerOne.score++;
        }
        else if (playerOneChoice == "lizard" && playerTwoChoice == "rock" || playerTwoChoice == "scissors"){
            alert("Sorry " + this.playerOne.name + ", you lost! You chose " + playerOneChoice + " and " + this.playerTwo.name + " chose " + playerTwoChoice + ".");
            this.playerTwo.score++;
        }
        else if (playerOneChoice == "spock" && playerTwoChoice == "rock" || playerTwoChoice == "scissors"){
            alert("Yay " + this.playerOne.name + ", you won! You chose " + playerOneChoice + " and " + this.playerTwo.name + " chose " + playerTwoChoice + ".");
            this.playerOne.score++;
        }
        else if (playerOneChoice == "spock" && playerTwoChoice == "paper" || playerTwoChoice == "lizard"){
            alert("Sorry " + this.playerOne.name + ", you lost! You chose " + playerOneChoice + " and " + this.playerTwo.name + " chose " + playerTwoChoice + ".");
            this.playerTwo.score++;
        }
        else{
            console.log("Please select again");
    
        }
    }


    

    numberOfPlayers(){
        let playerOneName = prompt("Please choose a name:");
        this.playerOne = new Player(playerOneName);
        let chooseNumberOfPlayers = prompt("Hello "+ playerOneName + " Press 1 to play against another player. Press 2 to play against the computer: ")
        switch (chooseNumberOfPlayers){
            case "1":
                let userInput = prompt("What is the name of player two? ");
                this.playerTwo = new Player(userInput);
            break;
            case "2":
                this.playerTwo = new ComputerPlayer();
            break;
        }
    }

}





class Player{
    constructor(name){

        this.score = 0;
        this.name = name;  
        
    }

    chooseGesture() {
        let choiceOptions = ["rock", "paper", "scissors", "lizard", "spock"];
        // let tryAgain = prompt("Please try again. Please choose: rock, paper, scissors, lizard, or spock?")
        
        while (true){
            let gesture = prompt("Please make a selection. Please choose: rock, paper, scissors, lizard, or spock? ");
            let playerChoice = gesture.toLocaleLowerCase();
                for (let i = 0; i <= choiceOptions.length; i++){
                    if(playerChoice == choiceOptions[i]){
                        return playerChoice;
                    }

                }
            }
    }
}

class ComputerPlayer extends Player{
    constructor(){
        super("CPU");
        
    }

    chooseGesture(choices){
        let randomChoice = choices[Math.floor(Math.random()* choices.length)];
        return randomChoice;
    }
}

// let gameCounter = 0
function BeginGame(){
    let game = new Game();
    game.runGame();
}


// let testComputerPlayer = new ComputerPlayer("CPU");
// let result = testComputerPlayer.chooseGesture();

// // let computerTest = new Player("carl");
// // let testResult = computerTest.computerGenerateRandomChoice()
// // console.log(testResult)

