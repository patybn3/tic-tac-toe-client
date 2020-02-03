// events page
const getForm = require('../../../lib/get-form-fields')
// go back to scrips count one, back to assets, two, back to tic-tac-toe main folder, three, enter lib, name file
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

// game starts here

const onNewGame = event => {
  event.preventDefault()

  const form = event.target
  const data = getForm(form)

  api.newGame(data)
    .then(ui.newSuccess)
    .catch(ui.newFail)
}

const getGames = event => {
  event.preventDefault()

  api.showGamesPlayed()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFail)
}

const gameLogic = event => {
  // let x = 'X'
  // let o = 'O'
  let playerOne = 0

  if ($(event.target).text() === '' && playerOne % 2 === 0 && store.game.over === false) {
    $(event.target).text('X')
    playerOne = 1
  } else if ($(event.target).text() === '' && playerOne % 2 !== 0 && store.game.over === false) {
    $(event.target).text('o')
    playerOne = 0
  }
  api.game(event)
    .then(ui.onGameSuccess)
    .catch(ui.onGameFail)
}

//
// const gameArr = ['', '', '', '', '', '', '', '', '']
// gameArr[0] = $(event.target).data('box0')
// gameArr[1] = $(event.target).data('box1')
// gameArr[2] = $(event.target).data('box2')
// gameArr[3] = $(event.target).data('box3')
// gameArr[4] = $(event.target).data('box4')
// gameArr[5] = $(event.target).data('box5')
// gameArr[6] = $(event.target).data('box6')
// gameArr[7] = $(event.target).data('box7')
// gameArr[8] = $(event.target).data('box8')
// // eight possible ways to win
// if ((gameArr[0] !== '' && gameArr[0] === gameArr[1] && gameArr[0] === gameArr[2]) ||
//     (gameArr[3] !== '' && gameArr[3] === gameArr[4] && gameArr[3] === gameArr[5]) ||
//     (gameArr[6] !== '' && gameArr[6] === gameArr[7] && gameArr[6] === gameArr[8]) ||
//     (gameArr[0] !== '' && gameArr[0] === gameArr[3] && gameArr[0] === gameArr[6]) ||
//     (gameArr[1] !== '' && gameArr[1] === gameArr[4] && gameArr[1] === gameArr[7]) ||
//     (gameArr[2] !== '' && gameArr[2] === gameArr[5] && gameArr[2] === gameArr[8]) ||
//     (gameArr[0] !== '' && gameArr[0] === gameArr[4] && gameArr[0] === gameArr[8]) ||
//     (gameArr[2] !== '' && gameArr[2] === gameArr[4] && gameArr[2] === gameArr[6])) {
// from box 0, 1, 8

module.exports = {
  gameLogic,
  onNewGame,
  getGames
}
