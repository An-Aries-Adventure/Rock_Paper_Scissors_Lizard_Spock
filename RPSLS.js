"use strict"

//classes  game and player

class Game{
    constructor(){
        this.playerOne = new Player(name);
        // this.playerTwo = new Player(name);
        this.playerTwo = null;
        // this.botPlayer = new ComputerPlayer()
        this.choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]
    

    }

    runGame(){      // main method
        this.displayRules()
        // determine game mode (instantiate playerTwo as corect player type)


        this.playerTwo.chooseGesture(this.choices);





    }


    displayRules(){
        console.log("Welcome to Rock, Paper, Scissors, Lizard, Spock.")
        console.log("You and your oppentent will make a selection from the avaialable options.")
        console.log("The player that wins best of 3 rounds, Wins the Game!")
    }

    Logic(){  
    if (playerChoice == "rock" & botPlayer == "rock"){
        console.log("It's a Tie!");
    }
    else if (playerChoice == "rock" & botPlayer == "paper" || botPlayer == "spock"){
        console.log("Sorry, you lost!");
        this.botPlayer.score++;
    }
    else if (playerChoice == "rock" & botPlayer == "scissors" || botPlayer == "lizard"){
        console.log("Yay, You won!");
        this.playerOne.score++;
    }
    else if (playerChoice == "paper" & botPlayer == "rock" || botPlayer == "spock"){
        console.log("Yay, You won!");
        this.playerOne.score++;
    }
    else if (playerChoice == "paper" & botPlayer == "paper"){
        console.log("It's a Tie!");
    }
    else if (playerChoice== "paper" & botPlayer == "scissors" || botPlayer == "lizard"){
        console.log("Sorry, you lost!");
        this.botPlayer.score++;
    }
    else if (playerChoice == "scissors"& botPlayer == "rock" || botPlayer == "spock"){
        console.log("Sorry, you lost!");
        this.botPlayer.score++;
    }
    else if (playerChoice == "scissors" & botPlayer == "paper" || botPlayer == "lizard"){
        console.log("Yay, you won!");
        this.playerOne.score++;
    }
    else if (playerChoice == "scissors" & botPlayer == "scissors"){
        console.log("It's a Tie!");
    }
    else if (playerChoice == "lizard" & botPlayer == "paper" || botPlayer == "spock"){
        console.log("Yay, you won!");
        this.playerOne.score++;
    }
    else if (playerChoice == "lizard"& botPlayer == "rock" || botPlayer == "scissors"){
        console.log("Sorry, you lost!");
        this.botPlayer.score++;
    }
    else if (playerChoice == "lizard" & botPlayer == "lizard"){
        console.log("It's a Tie!");
    }
    else if (playerChoice == "spock" & botPlayer == "rock" || botPlayer == "scissors"){
            console.log("Yay, you won!");
            this.playerOne.score++;
    }
    else if (playerChoice == "spock"& botPlayer == "paper" || botPlayer == "lizard"){
            console.log("Sorry, you lost!");
            this.botPlayer.score++;
    }
    else if (playerChoice == "spock" & botPlayer == "spock"){
                console.log("It's a Tie!");
    }
     
    else{
        console.log("Please select again")
    }

    return gameResult
    }
}



class Player{
    constructor(name){

        this.score = 0;
        this.name = name;  

    }

    chooseGesture() {
        // logic to allow human to choose gesture
    }




}

class ComputerPlayer extends Player{
    constructor(name){
        super();
        this.name = "CPU"
    }

    chooseGesture(choices){
        let randomChoice = Math.floor(Math.random() * choices.length) +1;
        return randomChoice
    }
}

let gameCounter = 0

// let game = new Game()
// game.runGame()

let testComputerPlayer = new ComputerPlayer("CPU");
let result = testComputerPlayer.chooseGesture();

// let computerTest = new Player("carl");
// let testResult = computerTest.computerGenerateRandomChoice()
// console.log(testResult)

