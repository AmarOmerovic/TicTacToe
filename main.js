let playerText = document.getElementById('playerText')
let restartButton = document.getElementById('restartButton')

let boxes = Array.from(document.getElementsByClassName('box'))


const X_SIGN = "X"
const O_SIGN = "O"
let currentPlayer = X_SIGN
let spaces = Array(9).fill(null)

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}


function boxClicked(e) {
    const id = e.target.id

    if(!spaces[id]) {
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        currentPlayer = currentPlayer == X_SIGN ? O_SIGN : X_SIGN
    } 
}


startGame()