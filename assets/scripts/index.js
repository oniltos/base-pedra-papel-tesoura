const btnRock = document.getElementById('rock')
const btnPaper = document.getElementById('paper')
const btnScissors = document.getElementById('scissors')
const btnReset = document.getElementById('reset')
const btnStart = document.getElementById('start')
const displayPersonChoice = document.querySelector('.person-choice .choice')
const displayCpuChoice = document.querySelector('.cpu-choice .choice')
const displayPersonScore = document.querySelector('.person-score span')
const displayCpuScore = document.querySelector('.cpu-score span')

function playGame(event) {
    const choice = event.currentTarget.getAttribute('id')
    const round = play(choice)
    console.log(round)
    
    displayPersonChoice.innerHTML = ''
    displayCpuChoice.innerHTML = ''
    
    const personChoiceImage = document.createElement('img')
    personChoiceImage.setAttribute('src', `./assets/img/${round.personChoice}.svg`)
    personChoiceImage.setAttribute('width', '50px')
    displayPersonChoice.appendChild(personChoiceImage)
    
    const cpuChoiceImage = document.createElement('img')
    cpuChoiceImage.setAttribute('src', `./assets/img/${round.cpuChoice}.svg`)
    cpuChoiceImage.setAttribute('width', '50px')
    displayCpuChoice.appendChild(cpuChoiceImage)
    
    displayPersonScore.innerHTML = personPoints
    displayCpuScore.innerHTML = cpuPoints
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
    reset()
    displayPersonScore.innerHTML = personPoints
    displayCpuScore.innerHTML = cpuPoints
    displayPersonChoice.innerHTML = ''
    displayCpuChoice.innerHTML = ''
    disableButtons()
}

btnRock.addEventListener('click', playGame)
btnPaper.addEventListener('click', playGame)
btnScissors.addEventListener('click', playGame)
btnReset.addEventListener('click', resetGame)
btnStart.addEventListener('click', enableButtons)