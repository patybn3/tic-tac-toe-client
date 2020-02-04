// events page
const getForm = require('../../../lib/get-form-fields')
// go back to scrips count one, back to assets, two, back to tic-tac-toe main folder, three, enter lib, name file
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

// game starts here
//
//
const onNewGame = event => {
  event.preventDefault()

  const form = event.target
  const data = getForm(form)

  api.newGame(data)
    .then(ui.newSuccess)
    .catch(ui.newFail)
}

let currentPlayer = 'X'

const plugLetters = event => {
  event.preventDefault()// prevents refreshing of game ??

  $(event.target).text(currentPlayer)
  currentPlayer = currentPlayer === 'O' ? currentPlayer = 'X' : currentPlayer = 'O'

  // store.cells = gameArr
  gameLogic()
  if (gameLogic(gameArr)) {
  } else if (store.player === 'x') {
    store.player = 'o'
    $('#tictac').text('Its ' + store.player + ' turn!')
  } else {
    store.player = 'x'
    $('#tictac').text('Its ' + store.player + ' turn!')
  }

  api.gameApi()
    .then(ui.onGameSuccess)
    .catch(ui.onGetGamesFail)
}
// get total number of games
// const onGetGames = event => {
//   event.preventDefault()
//
//   const form = event.target
//   const data = getForm(form)
//
//   api.showGamesPlayed(data)
//     .then(ui.onGetGamesSuccess)
//     .catch(ui.onGetGamesFail)
// }
const gameArr = ['', '', '', '', '', '', '', '', '']
gameArr[0] = $('event.target').data('box0')
gameArr[1] = $('event.target').data('box1')
gameArr[2] = $('event.target').data('box2')
gameArr[3] = $('event.target').data('box3')
gameArr[4] = $('event.target').data('box4')
gameArr[5] = $('event.target').data('box5')
gameArr[6] = $('event.target').data('box6')
gameArr[7] = $('event.target').data('box7')
gameArr[8] = $('event.target').data('box8')

const gameLogic = event => {
  // const gameArr = store.game.cells
  // console.log(gameArr)
  for (let i = 0; i < 9; i++) {
    store.turn = [i]
    if ((gameArr[0] !== '' && gameArr[0] === gameArr[1] && gameArr[0] === gameArr[2]) ||
      (gameArr[0] !== '' && gameArr[0] === gameArr[4] && gameArr[0] === gameArr[8]) ||
      (gameArr[0] !== '' && gameArr[0] === gameArr[3] && gameArr[0] === gameArr[6]) ||
      (gameArr[1] !== '' && gameArr[1] === gameArr[4] && gameArr[1] === gameArr[7]) ||
      (gameArr[2] !== '' && gameArr[2] === gameArr[4] && gameArr[2] === gameArr[6]) ||
      (gameArr[3] !== '' && gameArr[3] === gameArr[4] && gameArr[3] === gameArr[5]) ||
      (gameArr[2] !== '' && gameArr[2] === gameArr[5] && gameArr[2] === gameArr[8]) ||
      (gameArr[6] !== '' && gameArr[6] === gameArr[7] && gameArr[6] === gameArr[8])) {
      store.game.over = true
      $('#tictac').text(store.player + ' Wins!')
      return true
    } else if (i === 9) {
      $('#tictac').html('Game Over: Its a tie!')
      store.game.over = true
      return true
    } else {
      store.game.over = false
      return false
    }
  }
}

module.exports = {
  gameLogic,
  onNewGame,
  // onGetGames,
  plugLetters
}
// const numberOfGames = event => {
//   event.preventDefault()
//
//   api.showGamesPlayed()
//     .then(ui.numberOfGamesSuccess)
//     .catch(ui.numberOfGamesFail)
// }
