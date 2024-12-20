import { displayMatches } from './displaymatches.js'
import { gameOver } from './gameover.js'
import { arrPlayers, alertMessage, resultGame, gameButtons, game } from './start.js'

// Start Conditions //
export let totalMatches = sessionStorage.getItem("totalMatches")
export let maxMatches = sessionStorage.getItem("maxMatches")
export let numberOfPlayers = sessionStorage.getItem("numberOfPlayers")

// Gameplay //
export let currentPlayer = 0
export let winner = ''
export let gameInfo = ''

// Function Gameplay that manage the flow of the game //
export function gamePlay(matches) {
    
    matches = parseInt(gameButtons)
    
    // Warnings of the near end of the game //
    if (matches > totalMatches) {
        alertMessage.textContent = `Warning : only ${totalMatches} match(es) left`
        return
    }
    
    // Take matches //
    totalMatches -= matches
    displayMatches(matches)
    game.textContent = `PLAYER ${arrPlayers[currentPlayer]} takes ${matches} match(es)`
    gameInfo = document.getElementById("game")
    console.log(gameInfo.textContent)
    
    // Player Turn//
    currentPlayer = (currentPlayer +1) % numberOfPlayers
    resultGame.textContent = `Your turn PLAYER ${arrPlayers[currentPlayer]}`
    
    console.log('Current Player : ' + arrPlayers[currentPlayer])

    // Game Over //
    gameOver()
    
    
    // Winner //
    let arrWinners = arrPlayers.filter((player) => player != arrPlayers[currentPlayer])
    winner = arrWinners.join(', ')
    
    console.log('Number of matches : ' + matches, '| maxMatches : ' + maxMatches, '| totalMatches : ' + totalMatches)
}