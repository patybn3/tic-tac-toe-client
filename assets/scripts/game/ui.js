const store = require('../store')

// const events = require('./events')

const newSuccess = (data) => {
  // console.log('newSuccess')
  $('#start-game').trigger('reset')
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
  $('#tictac').trigger('reset')
  $('#tictac').text(`It's ${store.currentPlayer}'s turn!`)
  // $('#game-number').text(`Your current game ID: ${store.game.id}`)
  // $('#game-number').fadeIn('fast')
  $('#click-on-newGame').hide()

  $('#tictac').removeClass('failure')
  $('#winner').removeClass('game-over')
  $('#winner').hide()
  // $('#game-number').removeClass('failure')
  // $('#game-number').hide()
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
  // $('#game-number').hide()

  $('#number-message').show()
  $('#about').hide()
}

const onGetGamesFail = data => {
  $('#number-message').text('Try again.')
}
// decided to remove game ID function since it wasnt required. Will used if I work on the
// number of games for individual players
// const onCurrentSuccess = data => {
//   $('#current').trigger('reset')
//   $('#game-number').show()
//   $('#game-number').removeClass('failure')
//   $('#game-number').text(`Your current game ID: ${store.game.id}`)
//   $('#game-number').fadeIn('fast')
//   $('#about').hide()
//   $('#number-message').hide()
//   $('#settings').hide()
//   $('#settings-back').show()
// }
//
// const onCurrentFail = data => {
//   $('#about').hide()
//   $('#game-number').text('Please Click on the New Game button to Start a Game and Click on Current Game ID button to See The Current Game ID')
//   $('#game-number').addClass('failure')
// }

module.exports = {
  newSuccess,
  newFail,
  onPlugSuccess,
  onGetGamesSuccess,
  onGetGamesFail,
  onPlugFail
  // onCurrentSuccess,
  // onCurrentFail
}
