const store = require('../store')

const newSuccess = (data) => {
  $('#tictac').html('')
  store.turn = 1
  store.gameID = data.game.id
  store.cells = data.game.cells
  store.player = 'x'
  store.over = data.game.over
  $('#tray').fadeIn('fast')
  $('.boxTwo').empty()
  $('#tictac').text(`It's ${store.player}'s turn!`)
  $('#game-number').text(`Your current game ID: ${store.gameID}`)
  $('#game-number').fadeIn('fast')
}

const newFail = function (response) {
  $('#tictac').text('The game failed to start')
}

const getGamesSuccess = function (response) {
  $('#scores').text(response.games.length)
}

const getGamesFail = function (response) {
  $('#scores').text('Unable to get total. Please Try Again')
}

const onGameSuccess = function (response) {
  const gameArr = store.game.cells
  if ((gameArr[0] !== '' && gameArr[0] === gameArr[1] && gameArr[0] === gameArr[2]) ||
      (gameArr[0] !== '' && gameArr[0] === gameArr[4] && gameArr[0] === gameArr[8]) ||
      (gameArr[0] !== '' && gameArr[0] === gameArr[3] && gameArr[0] === gameArr[6])) {
    store.game.over = true
    $('#tictac').text(gameArr[0] + 'Wins!')
  } else if ((gameArr[1] !== '' && gameArr[1] === gameArr[4] && gameArr[1] === gameArr[7]) ||
      (gameArr[2] !== '' && gameArr[2] === gameArr[4] && gameArr[2] === gameArr[6]) ||
      (gameArr[3] !== '' && gameArr[3] === gameArr[4] && gameArr[3] === gameArr[5])) {
    store.game.over = true
    $('#tictac').text(gameArr[2] + 'Wins')
  } else if ((gameArr[2] !== '' && gameArr[2] === gameArr[5] && gameArr[2] === gameArr[8]) ||
    (gameArr[6] !== '' && gameArr[6] === gameArr[7] && gameArr[6] === gameArr[8])) {
    store.game.over = true
    $('#tictac').text(gameArr[6] + 'Wins')
  }
}

module.exports = {
  newSuccess,
  newFail,
  getGamesSuccess,
  getGamesFail,
  onGameSuccess
}
