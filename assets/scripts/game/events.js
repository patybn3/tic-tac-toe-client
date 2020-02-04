// events page
const getForm = require('../../../lib/get-form-fields')
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
  event.preventDefault()

  const form = event.target
  const data = getForm(form)

  api.newGame(data)
    .then(ui.newSuccess)
    .catch(ui.newFail)
}

let currentPlayer = 'X'

const gameLogic = event => {
  event.preventDefault()// prevents refreshing of game ??

  $(event.target).text(currentPlayer)
  currentPlayer = currentPlayer === 'O' ? currentPlayer = 'X' : currentPlayer = 'O'
  api.gameApi()
    .then(ui.eachSuccess)
    .catch(ui.eachFail)
}

module.exports = {
  gameLogic,
  onNewGame
}
// const numberOfGames = event => {
//   event.preventDefault()
//
//   api.showGamesPlayed()
//     .then(ui.numberOfGamesSuccess)
//     .catch(ui.numberOfGamesFail)
// }
