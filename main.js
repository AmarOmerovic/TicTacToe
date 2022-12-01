let playerText = document.getElementById('playerText')
let restartButton = document.getElementById('restartButton')
let boxes = Array.from(document.getElementsByClassName('box'))

let winnerIndication = getComputedStyle(document.body).getPropertyValue('--winning-color')


const X_SIGN = "X"
const O_SIGN = "O"
var count = -1
let currentPlayer = X_SIGN
let spaces = Array(9).fill(null)

const startGame = () => {
    count = 0
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}


function boxClicked(e) {
    const id = e.target.id

    if(!spaces[id]) {
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        if(playerHasWon()) {
            playerText.innerHTML = `${currentPlayer} has won!`

            let winning_blocks = playerHasWon()
            
            winning_blocks.map( box => boxes[box].style.backgroundColor = winnerIndication)

            boxes.forEach(box => box.removeEventListener('click', boxClicked))

        } else {
            count++
            
            if(count == 9) {
                playerText.innerHTML = `Tie!`
            }
        }

        currentPlayer = currentPlayer == X_SIGN ? O_SIGN : X_SIGN
    } 
}

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
]


function playerHasWon() {
    for(const condition of winningCombos) {
        let [a, b, c] = condition

        if(spaces[a] && (spaces[a] == spaces[b]) && (spaces[a] == spaces[c])) {
            return [a, b, c]
        }
    }
    return false
}

restartButton.addEventListener('click', restart)

function restart() {
    currentPlayer = X_SIGN
    spaces.fill(null)
    
    boxes.forEach(box => {
        box.innerText = ''
        box.style.backgroundColor = ''
    })

    playerText.innerHTML = 'Tic Tac Toe'

    startGame()
}


startGame()