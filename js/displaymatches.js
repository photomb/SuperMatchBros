import { totalMatchesContainer, showPlayer, resultGame, arrPlayers } from './start.js'
import { totalMatches, numberOfPlayers, currentPlayer } from './gameplay.js'
import { randomizeBtns, specialBtn } from './random.js'

// Start Displayed Game Interface //
export function displayMatches() {
    totalMatchesContainer.innerHTML = `<br>Total matches remaining : ${totalMatches}<br>`
    showPlayer.textContent = `Number of players : ${numberOfPlayers}`
    resultGame.textContent = `Your turn Player ${arrPlayers[currentPlayer]}`
    randomizeBtns()
    specialBtn()

    // Materialize Matches for Game interface //
    for(let i = 0; i < totalMatches; i++) {
        const match = document.createElement('div');
        match.classList.add('matchVisu')
        totalMatchesContainer.appendChild(match)
    }
}