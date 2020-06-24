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



// let game = new Game()
// game.runGame()

let computerTest = new Player("carl");
let testResult = computerTest.computerGenerateRandomChoice()
console.log(testResult)