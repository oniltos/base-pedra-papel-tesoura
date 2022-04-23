const btnRock = document.getElementById('rock')
const btnPaper = document.getElementById('paper')
const btnScissors = document.getElementById('scissors')
const btnReset = document.getElementById('reset')
const btnStart = document.getElementById('start')
const displayPersonChoice = document.querySelector('.person-choice')
const displayCpuChoice = document.querySelector('.cpu-choice')
const displayPersonScore = document.querySelector('.person-score span')
const displayCpuScore = document.querySelector('.cpu-score span')
const winAudio = document.getElementById('win-audio')
const loseAudio = document.getElementById('lose-audio')
const tieAudio = document.getElementById('tie-audio')
const bgAudio = document.getElementById('bg-audio')
const btnMusic = document.getElementById('music')


const game = new RockPaperScissors(5)


function playGame(event) {
    displayPersonChoice.classList.remove('animate-blink')
    displayCpuChoice.classList.remove('animate-blink')


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

    if(game.roundWinner === 'person') {
        displayPersonChoice.classList.add('animate-blink')
        winAudio.play()
    } else if (game.roundWinner === 'cpu') {
        displayCpuChoice.classList.add('animate-blink')
        loseAudio.play()
    } else {
        displayPersonChoice.classList.add('animate-blink')
        displayCpuChoice.classList.add('animate-blink')
        tieAudio.play()
    }

    game.checkGameOver()
}

function enableButtons() {
    bgAudio.play()
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

function toggleAudio() {
    if(bgAudio.classList.contains('bg-audio-active')) {
        btnMusic.innerText = 'Music OFF'
        bgAudio.pause()
        bgAudio.classList.remove('bg-audio-active')
    } else {
        btnMusic.innerText = 'Music ON'
        bgAudio.play()
        bgAudio.classList.add('bg-audio-active')
    }
}

btnRock.addEventListener('click', playGame)
btnPaper.addEventListener('click', playGame)
btnScissors.addEventListener('click', playGame)
btnReset.addEventListener('click', resetGame)
btnStart.addEventListener('click', enableButtons)
btnMusic.addEventListener('click', toggleAudio)