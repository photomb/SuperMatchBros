import { gamePlay, numberOfPlayers } from './gameplay.js'
import { displayMatches } from './displaymatches.js'

//Players Management//
export let arrPlayers = []

// DOM  elements //
export const totalMatchesContainer = document.getElementById("totalMatches")
export const showPlayer = document.getElementById("player")
export const game = document.getElementById("game")
export const resultGame = document.getElementById("resultGame")
export const alertMessage = document.getElementById("alertMessage")
export let gameButtons = 0

// ProgressBar //
let maxBar = 200
let currentBar = 0
let progressBar
let intervalID

function updateProgressBar() {
    progressBar = getElementById('progressBar')
    progressBar.value = currentBar
    progressBar.max = maxBar
}

function displayBar() {
    currentBar++
    progressBar = currentBar
    if (currentBar > maxBar) {
        clearInterval( intervalID )
    }
    progressBar.valueOf = currentBar
}

intervalID = setInterval( displayBar(), 100)

// Number of players //
for (let n = 1; n <= numberOfPlayers; n++) {
    arrPlayers.push(n)
}
console.log(arrPlayers)

// Screen initialization //
displayMatches()

// Add event listeners with classics game buttons //
document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', function(event) {
        gameButtons = parseInt(event.target.value) // Get the value of the clicked event //
        gamePlay() // Call the gameplay function //
    })
})

// Add event listeners with special game button //
document.querySelectorAll('.special').forEach(button => {
    button.addEventListener('click', function(event) {
        gameButtons = parseInt(event.target.value) // Get the value of the clicked event //
        gameButtons = document.getElementById('btn4').style.opacity = 0
        gamePlay() // Call the gameplay function //
    })
})
