/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 3, 6],
    // and so on
  ]

  const squareIndex = document.querySelector('#id')
  console.dir(squareIndex)

/*---------------------------- Variables (state) ----------------------------*/
let board = ['','','','','','','','','']
let turn = 'X'
let winner = false
let tie = false


/*------------------------ Cached Element References ------------------------*/
const squareEls  = document.querySelectorAll('.sqr')
console.dir(squareEls)

const messageEl = document.querySelector('#message')
console.dir(messageEl)

const resetBtnEl = document.querySelector('#reset')


/*-------------------------------- Functions --------------------------------*/
function init() {
board = ['','','','','','','','','']
turn = 'X'
winner = false
tie = false
    render()
}
init()
render()

function render () {
   updateBoard()
   updateMessage()

}


 function updateBoard() {
    board.forEach((square, i)=> {
        if (square === 'X'){
            squareEls[i].style.backgroundColor = 'red'
        }
        else if (square === 'O'){
            squareEls[i].style.backgroundColor = 'blue'
        }
        else {
             squareEls[i].style.backgroundColor = 'white'
        }
    })
};



function updateMessage(){
    if (winner === false && tie === false) {
        messageEl.textContent = `It is ${turn}'s turn`
    } else if (winner === false && tie === true) {
        messageEl.textContent = `It is a tie!`
    } else {
        messageEl.textContent = `${turn} is the winner!`
    }
}


function handleClick(event) {
    const squareIndex = event.target.id
    placePiece(squareIndex)
    checkForWinner(board)   
    checkForTie(board)
    switchPlayerTurn(board)
    render()

 }

 function placePiece(idx) {
    if (!board[idx]) {
        board[idx] = turn
    }
 }


 function checkForWinner() {
    if (board[0] === board[1] &&
        board[0] === board[2] &&
        board[0] !== ''
    ) {
        winner = true
    } 
 
    else if (board[3] === board[4] &&
        board[3] === board[5] &&
        board[3] !== ''
)
        winner = true
 
    else if (board[6] === board[7] &&
        board[6] === board[8] &&
        board[6] !== ''
)
        winner = true
 
    else if (board[0] === board[4] &&
        board[0] === board[8] &&
        board[0] !== ''
) 
        winner = true
 
    else if (board[1] === board[4] &&
        board[1] === board[7] &&
        board[1] !== ''
) 
        winner = true
 
    else if (board[2] === board[5] &&
        board[2] === board[8] &&
        board[2] !== ''
) 
        winner = true
 
    else if (board[2] === board[4] &&
        board[2] === board[6] &&
        board[2] !== ''
) 
        winner = true

    else if (board[0] === board[3] &&
        board[0] === board[6] &&
        board[0] !== ''
)
        winner = true
} 


function checkForTie() {
    if(winner === true){
        return
    }
    if(board.includes('')){
        tie = false
    } else{
        tie = true
    }
}


function switchPlayerTurn() {
    if(winner === true){
        return
    }
    else{
        if(turn === 'X'){
            turn = 'O'
        }else{
            turn = 'X'
        }
    }

}


function reset(){
board = ['','','','','','','','','']
turn = 'X'
winner = false
tie = false
updateBoard()
messageEl.textContent = 'Try Again!'
}

/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach((square) => {
    square.addEventListener('click', handleClick);
})


resetBtnEl.addEventListener('click', init);



 