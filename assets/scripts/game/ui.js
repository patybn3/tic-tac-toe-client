const store = require('./../store')

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

module.exports = {
  newSuccess,
  newFail,
  getGamesSuccess,
  getGamesFail
}
