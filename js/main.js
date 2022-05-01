
const modal = document.querySelector('.modal-container');
const img = document.querySelector('.confetti')
let counter = 0
let isX;

function selectedPiece() {
    document.getElementById('x').addEventListener('click', () => {
        modal.classList.add('modal-container--hide')
        isX = true
    })
    document.getElementById('o').addEventListener('click', () => {
        modal.classList.add('modal-container--hide')
        isX = false
    })
}
selectedPiece()

class TicTacToe {
    constructor() {
        this.board = Array.from(document.querySelectorAll('div'))
        this.board.forEach(item => item.addEventListener('click', this.handlePlayer))
    }

    handlePlayer = (e) => {
        if (e.target.innerText) {
            return
        }

        if (isX) {
            e.target.innerText = 'X'
            isX = false
        } else {
            e.target.innerText = 'O'
            isX = true
        }
        this.checkWin()
    }

    checkWin = () => {
        if (this.board[0].innerText === this.board[1].innerText && this.board[1].innerText === this.board[2].innerText && this.board[0].innerText) {
            document.getElementById('4').innerText = `${this.board[0].innerText} wins!`
            document.getElementById('4').classList.add('confetti')
            this.reload()
        } else if (this.board[3].innerText === this.board[4].innerText && this.board[4].innerText === this.board[5].innerText && this.board[3].innerText) {
            document.getElementById('4').innerText = `${this.board[3].innerText} wins!`
            document.getElementById('4').classList.add('confetti')
            this.reload()
        } else if (this.board[6].innerText === this.board[7].innerText && this.board[7].innerText === this.board[8].innerText && this.board[6].innerText) {
            document.getElementById('4').innerText = `${this.board[6].innerText} wins!`
            document.getElementById('4').classList.add('confetti')
           this.reload()
        } else if (this.board[2].innerText === this.board[4].innerText && this.board[4].innerText === this.board[6].innerText && this.board[2].innerText) {
            document.getElementById('4').innerText = `${this.board[2].innerText} wins!`
            document.getElementById('4').classList.add('confetti')
            this.reload()
        } else if (this.board[0].innerText === this.board[4].innerText && this.board[4].innerText === this.board[8].innerText && this.board[0].innerText) {
            document.getElementById('4').innerText = `${this.board[0].innerText} wins!`
            document.getElementById('4').classList.add('confetti')
            this.reload()
        } else if (this.board[0].innerText === this.board[3].innerText && this.board[3].innerText === this.board[6].innerText && this.board[0].innerText) {
            document.getElementById('4').innerText = `${this.board[0].innerText} wins!`
            document.getElementById('4').classList.add('confetti')
            this.reload()
        } else if (this.board[1].innerText === this.board[4].innerText && this.board[4].innerText === this.board[7].innerText && this.board[1].innerText) {
            document.getElementById('4').innerText = `${this.board[1].innerText} wins!`
            document.getElementById('4').classList.add('confetti')
            this.reload()
        } else if (this.board[2].innerText === this.board[5].innerText && this.board[5].innerText === this.board[8].innerText && this.board[2].innerText) {
            document.getElementById('4').innerText = `${this.board[2].innerText} wins!`
            document.getElementById('4').classList.add('confetti')
            this.reload()
        } else {
            counter++
            if (counter === 9) {
                document.getElementById('4').innerText = 'Tie game';
            this.reload()
                
            }
        }
    }

    reload = () => {
        setTimeout(function () {
            document.querySelector('.reset-container').classList.remove('reset-container--hide')
            document.querySelector('.r-btn').addEventListener('click', () => {
                location.reload()
            })
        }, 4000)
    }
}


let board1 = new TicTacToe()