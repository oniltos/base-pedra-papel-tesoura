//1. Dois jogadores jogam ao mesmo tempo X
//2. Um jogador é uma pessoa e o outro é a CPU X
//3. Pedra vence Tesoura X
//4. Papel vence Pedra X
//5. Tesoura vence Papel X
//6. Se os dois escolherem o mesmo item, dá empate  X
//7. A pontuação total de cada jogador seja exibida X
//8. A escolha atual de cada jogador seja exibida X
//9. A pontuação possa ser "resetada" X
//10. O jogo só pode começar depois de um sinal de start


let personPoints = 0
let cpuPoints = 0

function getCpuChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * choices.length)

    return choices[randomNumber]
}

/**
 * 
 * Recebe uma choice como argumento ['rock', 'paper', 'scissors']
 */
function play(personChoice) {
    const cpuChoice = getCpuChoice()

    if(personChoice === cpuChoice) {
        return {winner: null, personChoice, cpuChoice}
    } else if (
        (personChoice === 'rock' && cpuChoice === 'scissors') ||
        (personChoice === 'paper' && cpuChoice === 'rock') ||
        (personChoice === 'scissors' && cpuChoice === 'paper')
    ) {
        personPoints++
        return {winner: 'person', personChoice, cpuChoice}
    } else {
        cpuPoints++
        return {winner: 'cpu', personChoice, cpuChoice}
    }
}

function reset() {
    personPoints = 0
    cpuPoints = 0
}