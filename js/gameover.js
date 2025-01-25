import { resultGame } from "./start.js"
import { totalMatches, winner, gameTrack, arrNames } from "./gameplay.js"

export function gameOver() {
    if(totalMatches === 0) {
        let loser = gameTrack
        for (let y = 0; y < arrNames.length; y++) {
            if (loser == y + 1) {
                resultGame.style.display = 'block'
                resultGame.innerHTML = '<p class="resultloser">  🌀🌀 You lose ' + arrNames[y] + ' 🌀🌀</p>'
                resultGame.innerHTML += `<p class="resultwinner">⭐⭐⭐ ${winner}, you win ⭐⭐⭐</p>`
            }
        }
        document.querySelectorAll('.choice').forEach(button => { 
            button.disabled = true
        })
        document.querySelectorAll('.special').forEach(button => { 
            button.disabled = true, button.style.opacity = 0.3
        })
        resultGame.innerHTML += `<br><button id="btnReset" class="gameBtn" onclick="location.reload()">New Game</button>`
        return
    }
}