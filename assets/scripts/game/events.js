// events page
// const getForm = require('../../../lib/get-form-fields')
// go back to scrips count one, back to assets, two, back to tic-tac-toe main folder, three, enter lib, name file
const api = require('./api')
const ui = require('./ui')

// game starts here
//
//
// create empty array to represent game board units
// const gameUnits = ['', '', '', '', '', '', '', '', '']
// store.turn = 0
const onNewGame = event => {
  api.newGame()
    .then(ui.newSuccess)
    .catch(ui.newFail)
}

// const numberOfGames = event => {
//   event.preventDefault()
//
//   api.showGamesPlayed()
//     .then(ui.numberOfGamesSuccess)
//     .catch(ui.numberOfGamesFail)
// }

const gameArr = ['', '', '', '', '', '', '', '', '']
gameArr[0] = document.getElementById('box0')
gameArr[1] = document.getElementById('box1')
gameArr[2] = document.getElementById('box2')
gameArr[3] = document.getElementById('box3')
gameArr[4] = document.getElementById('box4')
gameArr[5] = document.getElementById('box5')
gameArr[6] = document.getElementById('box6')
gameArr[7] = document.getElementById('box7')
gameArr[8] = document.getElementById('box8')

const gameLogic = function () {
  // eight possible ways to win
  if (gameArr[0].innerHTML !== '' && gameArr[0].innerHTML === gameArr[1].innerHTML && gameArr[0].innerHTML === gameArr[2].innerHTML) {
    // from box 0, 1, 2
    console.log('You won')
  } else if (gameArr[3].innerHTML !== '' && gameArr[3].innerHTML === gameArr[4].innerHTML && gameArr[3].innerHTML === gameArr[5].innerHTML) {
    // from box 3, 4, 5
    console.log('You won')
  } else if (gameArr[6].innerHTML !== '' && gameArr[6].innerHTML === gameArr[7].innerHTML && gameArr[6].innerHTML === gameArr[8].innerHTML) {
    // from box 6, 7, 8
    console.log('You won')
  } else if (gameArr[0].innerHTML !== '' && gameArr[0].innerHTML === gameArr[3].innerHTML && gameArr[0].innerHTML === gameArr[6].innerHTML) {
    // from box 0, 3, 6
    console.log('You won')
  } else if (gameArr[1].innerHTML !== '' && gameArr[1].innerHTML === gameArr[4].innerHTML && gameArr[1].innerHTML === gameArr[7].innerHTML) {
    // from box 1, 4, 7
    console.log('You won')
  } else if (gameArr[2].innerHTML !== '' && gameArr[2].innerHTML === gameArr[5].innerHTML && gameArr[2].innerHTML === gameArr[8].innerHTML) {
    // from box 2, 5, 8
    console.log('You won')
  } else if (gameArr[0].innerHTML !== '' && gameArr[0].innerHTML === gameArr[4].innerHTML && gameArr[0].innerHTML === gameArr[8].innerHTML) {
    // from box 0, 4, 8
    console.log('You won')
  } else if (gameArr[2].innerHTML !== '' && gameArr[2].innerHTML === gameArr[4].innerHTML && gameArr[2].innerHTML === gameArr[6].innerHTML) {
    // from box 2, 4, 6
    console.log('You won')
  }
}

const gameBoard = document.querySelectorAll('#tray')
let value = 0

for (let i = 0; i < gameBoard.length; i++) {
  gameBoard[i].onclick = function () {
    if (value % 2 === 0) {
      this.innerHTML = 'X'
      gameLogic()
      value += 1
    } else {
      this.innerHTML = 'O'
      gameLogic()
      value += 1
    }
  }
}

module.exports = {
  gameLogic,
  onNewGame
}
