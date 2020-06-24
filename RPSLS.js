"use strict"

//classes  game and player

class Game{
    constructor(){
        this.playerOne = new Player(name)
        this.playerTwo = new Player(name)
        this.choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]
    

    }

    runGame(){
        this.displayRules()








    }


    displayRules(){
        console.log("Welcome to Rock, Paper, Scissors, Lizard, Spock.")
        console.log("You and your oppentent will make a selection from the avaialable options.")
        console.log("The player that wins best of 3 rounds, Wins the Game!")
    }
}

class Player{
    constructor(name){

        this.score = 0;
        this.name = name;  

    }

    computerGenerateRandomChoice(){
        let randomChoice = Math.floor(Math.random() * this.choices) +1;
        return randomChoice
    }




}

class ComputerPlayer extends Player{
    constructor(name){

    }
}

let gameCounter = 0

let game = new Game()
game.runGame()

// let computerTest = new Player("carl");
// let testResult = computerTest.computerGenerateRandomChoice()
// console.log(testResult)


if (player == "rock" & cpu == "rock"){
    console.log("It's a Tie!");
}
    
else if (player == "rock" & cpu == "paper"){
    console.log("Sorry, you lost!");
}
 
else if (player == "rock" & cpu == "scissors"){
    console.log("Yay, You won!");
}

else if (player == "paper" & cpu == "rock"){
    console.log("Yay, You won!");
}

else if (player == "paper" & cpu == "paper"){
    console.log("It's a Tie!");
}
else if (player == "paper" & cpu == "scissors"){
    console.log("Sorry, you lost!");
}

else if (player == "scissors"& cpu == "rock"){
    console.log("Sorry, you lost!");
}
else if (player == "scissors" & cpu == "paper"){
    console.log("Yay, you won!");
}
else if (player == "scissors" & cpu == "scissors"){
    console.log("It's a Tie!");
}
else{
     console.log("Please select again")
}