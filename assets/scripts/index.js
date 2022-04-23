const btnRock = document.getElementById('rock')
const btnPaper = document.getElementById('paper')
const btnScissors = document.getElementById('scissors')
const btnReset = document.getElementById('reset')
const btnStart = document.getElementById('start')
const displayPersonChoice = document.querySelector('.person-choice')
const displayCpuChoice = document.querySelector('.cpu-choice')
const displayPersonScore = document.querySelector('.person-score span')
const displayCpuScore = document.querySelector('.cpu-score span')

const game = new RockPaperScissors(5)


function playGame(event) {
    const choice = event.currentTarget.getAttribute('id')
    const round = game.play(choice)
    
    displayPersonChoice.innerHTML = ''
    displayCpuChoice.innerHTML = ''
    
    const personChoiceImage = document.createElement('img')
    console.log(round);
    personChoiceImage.setAttribute('src', `./assets/img/${round.personChoice}.svg`)
    personChoiceImage.setAttribute('width', '50px')
    displayPersonChoice.appendChild(personChoiceImage)
    
    const cpuChoiceImage = document.createElement('img')
    cpuChoiceImage.setAttribute('src', `./assets/img/${round.cpuChoice}.svg`)
    cpuChoiceImage.setAttribute('width', '50px')
    displayCpuChoice.appendChild(cpuChoiceImage)
    
    displayPersonScore.innerHTML = game.personPoints
    displayCpuScore.innerHTML = game.cpuPoints

    game.checkGameOver()
}

function enableButtons() {
    btnRock.removeAttribute('disabled')
    btnPaper.removeAttribute('disabled')
    btnScissors.removeAttribute('disabled')
}

function disableButtons() {
    btnRock.setAttribute('disabled', true)
    btnPaper.setAttribute('disabled', true)
    btnScissors.setAttribute('disabled', true)
}

function resetGame() {
    game.reset()
    displayPersonScore.innerHTML = game.personPoints
    displayCpuScore.innerHTML = game.cpuPoints
    displayPersonChoice.innerHTML = ''
    displayCpuChoice.innerHTML = ''
    disableButtons()
}

btnRock.addEventListener('click', playGame)
btnPaper.addEventListener('click', playGame)
btnScissors.addEventListener('click', playGame)
btnReset.addEventListener('click', resetGame)
btnStart.addEventListener('click', enableButtons)