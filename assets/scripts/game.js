//1. Dois jogadores jogam ao mesmo tempo X
//2. Um jogador é uma pessoa e o outro é a CPU X
//3. Pedra vence Tesoura X
//4. Papel vence Pedra X
//5. Tesoura vence Papel X
//6. Se os dois escolherem o mesmo item, dá empate  X
//7. A pontuação total de cada jogador seja exibida X
//8. A escolha atual de cada jogador seja exibida X
//9. A pontuação possa ser "resetada" X
//10. O jogo só pode começar depois de um sinal de start X
//11. Criar uma classe para organizar o jogo X
//12. Vence o melhor de n rounds X

class RockPaperScissors {
    constructor(maxRounds) {
        this.personPoints = 0
        this.cpuPoints = 0
        this.cpuChoice = ''
        this.personChoice = ''
        this.roundWinner = ''
        this.maxRounds = maxRounds
        this.roundsPlayed = 0
        this.gameOver = false
        this.gameWinner = ''
    }

    getCpuChoice() {
        const choices = ['rock', 'paper', 'scissors']
        const randomNumber = Math.floor(Math.random() * choices.length)
    
        return choices[randomNumber]
    }

    play(personChoice) {
        if(!this.gameOver) {
            //Incrementa o número de rounds jogados
            this.roundsPlayed++

            //Atribui uma escolha aleatória para a CPU
            this.cpuChoice = this.getCpuChoice()

            //Atribui uma escolha para a pessoa que está jogando
            this.personChoice = personChoice
        
            if(this.personChoice === this.cpuChoice) {
                this.roundWinner = null
                return {
                    winner: this.roundWinner, 
                    personChoice: this.personChoice, 
                    cpuChoice: this.cpuChoice
                }
            } else if (
                (this.personChoice === 'rock' && this.cpuChoice === 'scissors') ||
                (this.personChoice === 'paper' && this.cpuChoice === 'rock') ||
                (this.personChoice === 'scissors' && this.cpuChoice === 'paper')
            ) {
                this.personPoints++
                this.roundWinner = 'person'
                return {
                    winner: this.roundWinner, 
                    personChoice: this.personChoice, 
                    cpuChoice: this.cpuChoice
                }
            } else {
                this.cpuPoints++
                this.roundWinner = 'cpu'
                return {
                    winner: this.roundWinner, 
                    personChoice: this.personChoice, 
                    cpuChoice: this.cpuChoice
                }
            }
        } else {
            return {
                winner: this.roundWinner, 
                personChoice: this.personChoice, 
                cpuChoice: this.cpuChoice
            }
        }
    }

    checkGameOver() {
        if(this.roundsPlayed === this.maxRounds) {
            console.log('game over')
            this.gameOver = true
            if(this.personPoints > this.cpuPoints) {
                this.gameWinner = 'person'
            } else if (this.personPoints < this.cpuPoints) {
                this.gameWinner = 'cpu'
            } else {
                this.gameWinner = ''
            }
        }
    }

    reset() {
        this.personPoints = 0
        this.cpuPoints = 0
        this.cpuChoice = ''
        this.personChoice = ''
        this.roundWinner = ''
    }
}