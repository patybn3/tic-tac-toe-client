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

const checkEmpty = function (num) {
  return num === 'X' || num === 'O'
}

const gameLogic = event => {
  const gameArr = store.game.cells
  // const gameArr = store.game.cells
  // console.log(gameArr)
  if ((gameArr[0] && gameArr[0] === gameArr[1] && gameArr[0] === gameArr[2] && gameArr[0] !== '') ||
(gameArr[0] && gameArr[0] === gameArr[4] && gameArr[0] === gameArr[8] && gameArr[0] !== '') ||
(gameArr[0] && gameArr[0] === gameArr[3] && gameArr[0] === gameArr[6] && gameArr[0] !== '') ||
(gameArr[1] && gameArr[1] === gameArr[4] && gameArr[1] === gameArr[7] && gameArr[1] !== '') ||
(gameArr[2] && gameArr[2] === gameArr[4] && gameArr[2] === gameArr[6] && gameArr[2] !== '') ||
(gameArr[3] && gameArr[3] === gameArr[4] && gameArr[3] === gameArr[5] && gameArr[3] !== '') ||
(gameArr[2] && gameArr[2] === gameArr[5] && gameArr[2] === gameArr[8] && gameArr[2] !== '') ||
(gameArr[6] && gameArr[6] === gameArr[7] && gameArr[6] === gameArr[8] && gameArr[6] !== '')) {
    store.game.over = true
    $('#tray').fadeOut('slow')
    $('#tictac').hide()
    if (store.currentPlayer === 'X') {
      $('#winner').text('O Is The Winner!')
      $('#winner').addClass('winner')
    } else {
      $('#winner').text('X Is The Winner!')
      $('#winner').addClass('winner')
    }
    // $('#tictac').addClass('success')
    $('#start-game').hide()

    setTimeout(() => {
      $('#winner').fadeIn()
    }, 1000)

    setTimeout(() => {
      $('#winner').fadeOut()
    }, 2500)

    setTimeout(() => {
      $('#click-on-newGame').fadeIn()
      $('#start-game').fadeIn()
    }, 3000)
  } else if (gameArr.every(checkEmpty)) {
    store.game.over = true
    $('#tray').fadeOut('slow')
    $('#tictac').text('Game Over: Its a tie!')
    $('#tictac').addClass('failure')
    $('#winner').text('Game Over: Its a tie!')
    $('#winner').addClass('game-over')
    $('#start-game').hide()

    setTimeout(() => {
      $('#winner').fadeIn()
    }, 1000)

    setTimeout(() => {
      $('#winner').fadeOut()
    }, 2500)

    setTimeout(() => {
      $('#click-on-newGame').fadeIn()
      $('#start-game').fadeIn()
    }, 3000)
  } else {
    store.game.over = false
    $('#tictac').text(`It's ${store.currentPlayer === 'O' ? 'X' : 'O'}'s turn!`)
  }
}

// get total number of games
const onGetGames = event => {
  event.preventDefault()

  const form = event.target
  const data = getForm(form)

  api.showGamesPlayed(data)
    .then(ui.onGetGamesSuccess)
    .catch(ui.onGetGamesFail)
}

//
const clickOn = event => {
  event.preventDefault()

  const gameArr = store.game.cells
  const get = $(event.target).attr('data-id')
  gameArr[get] = store.currentPlayer

  if ($(event.target).text() === '') {
    $(event.target).text(store.currentPlayer)
    if (store.currentPlayer === 'X') {
      store.currentPlayer = 'O'
    } else {
      store.currentPlayer = 'X'
    }
  } else {
    $('#tictac').text('Invalid Spot.')
  }

  gameLogic()
  if (store.currentPlayer === 'X') {
    $('#tictac').text(`It's ${store.currentPlayer}'s turn!`)
  } else {
    $('#tictac').text(`It's ${store.currentPlayer}'s turn!`)
  }

  const data = {
    'game': {
      'cell': {
        'index': get,
        'value': store.currentPlayer
      },
      'over': store.game.over
    }
  }

  api.gameApi(data)
    .then(ui.onPlugSuccess)
    .catch(ui.onPlugFail)

  // if (store.currentPlayer === 'X') {
  //   store.currentPlayer = 'O'
  // } else {
  //   store.currentPlayer = 'X'
  // }
}

module.exports = {
  gameLogic,
  onNewGame,
  onGetGames,
  // plugLetters
  clickOn
}
// store.currentPlayer = 'X'
//
// const plugLetters = event => {
//   event.preventDefault()// prevents refreshing of game
//
//   $(event.target).text(store.currentPlayer)
//
//   const gameArr = store.game.cells
//   // resets the array every time the new game button is clicked
//   const index = $(event.target).attr('data-id')
//   gameArr[index] = store.currentPlayer
//   // console.log(gameArr)
//   gameLogic()
//
//   const data = {
//     'game': {
//       'cell': {
//         'index': index,
//         'value': store.currentPlayer
//       },
//       'over': store.game.over
//     }
//   }
//   // store.currentPlayer = store.currentPlayer === 'O' ? store.currentPlayer = 'X' : store.currentPlayer = 'O'
//
//   api.gameApi(data)
//     .then(ui.onPlugSuccess)
//     .catch(ui.onPlugFail)
// }
