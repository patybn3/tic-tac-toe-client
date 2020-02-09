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
  $('#tictac').show()
  $('#tictac').text(`It's ${store.currentPlayer}'s turn!`)
  // $('#game-number').text(`Your current game ID: ${store.game.id}`)
  // $('#game-number').fadeIn('fast')
  $('#click-on-newGame').hide()

  $('#tictac').removeClass('failure')
  $('#winner').removeClass('game-over')
  $('#winner').hide()
}

const newFail = function (response) {
  console.log('newFail')
  $('#tictac').text('The game failed to start')
}

const onPlugSuccess = function (response) {
  // $('.boxTwo').off('click')
}

const onPlugFail = function (response) {
  $('#tictac').text('Please Try Again.')
  $('#tictac').addClass('failure')
}

const onGetGamesSuccess = data => {
  const gamesStarted = data.games
  const gamesPlayed = gamesStarted.map(game => game.over)
  $('#number-message').text(`You've played ${gamesPlayed.length} games.`)
  $('#settings').hide()
  $('#settings-back').show()
  $('#game-number').hide()

  $('#number-message').show()
  $('#about').hide()
}

const onGetGamesFail = data => {
  $('#number-message').text('Try again.')
}

const onCurrentSuccess = data => {
  $('#game-number').text(`Your current game ID: ${store.game.id}`)
  $('#game-number').fadeIn('fast')
  $('#about').hide()
  $('#number-message').hide()
  $('#settings').hide()
  $('#settings-back').show()
}

module.exports = {
  newSuccess,
  newFail,
  onPlugSuccess,
  onGetGamesSuccess,
  onGetGamesFail,
  onPlugFail,
  onCurrentSuccess
}
