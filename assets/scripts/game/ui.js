const store = require('../store')

const newSuccess = (data) => {
  console.log('newSuccess')
  $('#tictac').html('')
  store.turn = 1
  store.game = data.game
  console.log(store.game)
  store.player = 'x'
  // store.over = data.game.over
  $('#tray').fadeIn('slow')
  $('.boxTwo').empty()
  $('#tictac').text(`It's ${store.player}'s turn!`)
  $('#game-number').text(`Your current game ID: ${store.game.id}`)
  $('#game-number').fadeIn('fast')
  $('#click-on-newGame').hide()
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
  const gameArr = store.game.cells
  console.log(gameArr)
  for (let i = 0; i < gameArr.length; i++) {
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
}

const eachSuccess = function () {
  onGameSuccess()
}
module.exports = {
  newSuccess,
  newFail,
  getGamesSuccess,
  getGamesFail,
  onGameSuccess,
  eachSuccess
}
