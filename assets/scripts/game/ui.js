const store = require('../store')

// const events = require('./events')

const newSuccess = (data) => {
  // console.log('newSuccess')
  $('#tictac').html('')
  $('#tictac').removeClass('success')
  // store.turn = 1
  store.game = data.game
  // console.log(store.game)
  store.currentPlayer = 'X'
  // store.over = data.game.over
  $('#tray').fadeIn('slow')
  $('.boxTwo').empty()
  $('#tictac').text(`It's ${store.currentPlayer}'s turn!`)
  $('#game-number').text(`Your current game ID: ${store.game.id}`)
  $('#game-number').fadeIn('fast')
  $('#click-on-newGame').hide()

  $('#tictac').removeClass('failure')
  $('#winner').hide()
}

const newFail = function (response) {
  console.log('newFail')
  $('#tictac').text('The game failed to start')
}

const getGamesSuccess = function (response) {
  $('#scores').text(response.games.length)
}

const getGamesFail = function (response) {
  $('#scores').text('Unable to get total. Please Try Again')
}

const onGameSuccess = function (response) {
  $('.boxTwo').off('click')
}

module.exports = {
  newSuccess,
  newFail,
  getGamesSuccess,
  getGamesFail,
  onGameSuccess
  // onGetGamesSuccess
}
