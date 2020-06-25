"use strict"

//classes  game and player

class Game{
    constructor(){
        this.playerOne = new Player(name);
        // this.playerTwo = new Player(name);
        this.playerTwo = null;
        // this.botPlayer = new ComputerPlayer()
        this.choices = ["rock", "paper", "scissors", "lizard", "spock"];
    

    }

    runGame(){      // main method
        this.displayRules();
        this.numberOfPlayers();
        while(true){
            let playerOneChoice = this.playerOne.chooseGesture();
            let playerTwoChoice = this.playerTwo.chooseGesture();
            this.logic(playerOneChoice, playerTwoChoice);
        }
      



        // determine game mode (instantiate playerTwo as corect player type)


        this.playerTwo.chooseGesture(this.choices);





    }


    displayRules(){
        console.log("Welcome to Rock, Paper, Scissors, Lizard, Spock.");
        console.log("You and your oppentent will make a selection from the avaialable options.");
        console.log("The player that wins best of 3 rounds, Wins the Game!");
    }





    Logic(playerOneChoice, playerTwoChoice){
        // let playerChoice = this.playerOne.chooseGesture()
        // let botPlayer = this.playerTwo.chooseGesture()

    if (playerOneChoice == "rock" & playerTwoChoice == "rock"){
        alert("It's a Tie!");
    }
    else if (playerChoice == "rock" & botPlayer == "paper" || botPlayer == "spock"){
        alert("Sorry, you lost!");
        this.botPlayer.score++;
    }
    else if (playerChoice == "rock" & botPlayer == "scissors" || botPlayer == "lizard"){
        alert("Yay, You won!");
        this.playerOne.score++;
    }
    else if (playerChoice == "paper" & botPlayer == "rock" || botPlayer == "spock"){
        alert("Yay, You won!");
        this.playerOne.score++;
    }
    else if (playerChoice == "paper" & botPlayer == "paper"){
        alert("It's a Tie!");
    }
    else if (playerChoice== "paper" & botPlayer == "scissors" || botPlayer == "lizard"){
        alert("Sorry, you lost!");
        this.botPlayer.score++;
    }
    else if (playerChoice == "scissors"& botPlayer == "rock" || botPlayer == "spock"){
        alert("Sorry, you lost!");
        this.botPlayer.score++;
    }
    else if (playerChoice == "scissors" & botPlayer == "paper" || botPlayer == "lizard"){
        alert("Yay, you won!");
        this.playerOne.score++;
    }
    else if (playerChoice == "scissors" & botPlayer == "scissors"){
        alert("It's a Tie!");
    }
    else if (playerChoice == "lizard" & botPlayer == "paper" || botPlayer == "spock"){
        alert("Yay, you won!");
        this.playerOne.score++;
    }
    else if (playerChoice == "lizard"& botPlayer == "rock" || botPlayer == "scissors"){
        alert("Sorry, you lost!");
        this.botPlayer.score++;
    }
    else if (playerChoice == "lizard" & botPlayer == "lizard"){
        alert("It's a Tie!");
    }
    else if (playerChoice == "spock" & botPlayer == "rock" || botPlayer == "scissors"){
        alert("Yay, you won!");
        this.playerOne.score++;
    }
    else if (playerChoice == "spock"& botPlayer == "paper" || botPlayer == "lizard"){
        alert("Sorry, you lost!");
        this.botPlayer.score++;
    }
    else if (playerChoice == "spock" & botPlayer == "spock"){
        alert("It's a Tie!");
    }
     
    else{
        console.log("Please select again");
    }

    return gameResult;
    }


    scoreBoard(){
        //for (i = 0; i  )
    }



    numberOfPlayers(){
        let chooseNumberOfPlayers = prompt("Press 1 to play against another player. Press 2 to play against the computer: ")
        switch (chooseNumberOfPlayers){
            case "1":
                let userInput = prompt("what is the name of player two? ");
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
        let gesture = prompt("Please make a selection. Please choose: rock, paper, scissors, lizard, or spock? ");
        let playerChoice = gesture.toLocaleLowerCase()
        return playerChoice

        
    }
}

class ComputerPlayer extends Player{
    constructor(){
        super("CPU");
        
    }

    chooseGesture(choices){
        let randomChoice = Math.floor(Math.random() * choices.length) +1;
        return randomChoice
    }
}

// let gameCounter = 0
function BeginGame(){
    let game = new Game()
    game.runGame();
}


// let testComputerPlayer = new ComputerPlayer("CPU");
// let result = testComputerPlayer.chooseGesture();

// // let computerTest = new Player("carl");
// // let testResult = computerTest.computerGenerateRandomChoice()
// // console.log(testResult)

