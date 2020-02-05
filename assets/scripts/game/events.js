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

// store.currentPlayer = 'X'

const plugLetters = event => {
  event.preventDefault()// prevents refreshing of game ??

  $(event.target).text(store.currentPlayer)
  // store.currentPlayer = store.currentPlayer === 'O' ? store.currentPlayer = 'X' : store.currentPlayer = 'O'
  const gameArr = store.game.cells
  // store.cells = gameArr
  const index = $(event.target).attr('data-id')
  gameArr[index] = store.currentPlayer
  // console.log(gameArr)
  gameLogic()
  // if (store.currentPlayer === 'X') {
  //   store.currentPlayer = 'X'
  //   $('#tictac').text('Its X turn!')
  // } else if (store.currentPlayer === 'O') {
  //   store.currentPlayer = 'O'
  //   $('#tictac').text('Its O turn!')
  // }
  const data = {
    'game': {
      'cell': {
        'index': index,
        'value': store.currentPlayer
      },
      'over': store.game.over
    }
  }
  store.currentPlayer = store.currentPlayer === 'O' ? store.currentPlayer = 'X' : store.currentPlayer = 'O'

  api.gameApi(data)
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
// const gameArr = store.game.cells

const checkEmpty = function (num) {
  return num === 'X' || num === 'O'
}

const gameLogic = event => {
  const gameArr = store.game.cells
  // const gameArr = store.game.cells
  // console.log(gameArr)
  if (gameArr[0] && gameArr[0] === gameArr[1] && gameArr[0] === gameArr[2] && gameArr[0] !== '') {
    store.game.over = true
    $('#tictac').text(store.currentPlayer + ' Wins!')
    // console.log('winner')
  } else if (gameArr[0] && gameArr[0] === gameArr[4] && gameArr[0] === gameArr[8] && gameArr[0] !== '') {
    store.game.over = true
    $('#tictac').text(store.currentPlayer + ' Wins!')
    // console.log('winner')
  } else if (gameArr[0] && gameArr[0] === gameArr[3] && gameArr[0] === gameArr[6] && gameArr[0] !== '') {
    store.game.over = true
    $('#tictac').text(store.currentPlayer + ' Wins!')
    // console.log('winner')
  } else if (gameArr[1] && gameArr[1] === gameArr[4] && gameArr[1] === gameArr[7] && gameArr[1] !== '') {
    store.game.over = true
    $('#tictac').text(store.currentPlayer + ' Wins!')
    // console.log('winner')
  } else if (gameArr[2] && gameArr[2] === gameArr[4] && gameArr[2] === gameArr[6] && gameArr[2] !== '') {
    store.game.over = true
    $('#tictac').text(store.currentPlayer + ' Wins!')
    // console.log('winner')
  } else if (gameArr[3] && gameArr[3] === gameArr[4] && gameArr[3] === gameArr[5] && gameArr[3] !== '') {
    store.game.over = true
    $('#tictac').text(store.currentPlayer + ' Wins!')
    // console.log('winner')
  } else if (gameArr[2] && gameArr[2] === gameArr[5] && gameArr[2] === gameArr[8] && gameArr[2] !== '') {
    store.game.over = true
    $('#tictac').text(store.currentPlayer + ' Wins!')
    // console.log('winner')
  } else if (gameArr[6] && gameArr[6] === gameArr[7] && gameArr[6] === gameArr[8] && gameArr[6] !== '') {
    store.game.over = true
    $('#tictac').text(store.currentPlayer + ' Wins!')
    // console.log('winner')
  } else if (gameArr.every(checkEmpty)) {
    store.game.over = true
    $('#tictac').text('Game Over: Its a tie!')
  } else {
    store.game.over = false
    $('#tictac').text(`It's ${store.currentPlayer === 'O' ? 'X' : 'O'}'s turn!`)
  }
}

const onEndGame = event => {
  event.preventDefault()

  const form = event.target
  const data = getForm(form)

  api.endGame(data)
    .then(ui.endSuccess)
    .catch(ui.endFail)
}

module.exports = {
  gameLogic,
  onNewGame,
  // onGetGames,
  plugLetters,
  onEndGame
}
// const numberOfGames = event => {
//   event.preventDefault()
//
//   api.showGamesPlayed()
//     .then(ui.numberOfGamesSuccess)
//     .catch(ui.numberOfGamesFail)
// }
// gameArr[0] = $('event.target').data('box0')
// gameArr[1] = $('event.target').data('box1')
// gameArr[2] = $('event.target').data('box2')
// gameArr[3] = $('event.target').data('box3')
// gameArr[4] = $('event.target').data('box4')
// gameArr[5] = $('event.target').data('box5')
// gameArr[6] = $('event.target').data('box6')
// gameArr[7] = $('event.target').data('box7')
// gameArr[8] = $('event.target').data('box8')
