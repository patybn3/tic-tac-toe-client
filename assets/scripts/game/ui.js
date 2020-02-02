
const newSuccess = function (response) {
  $('#tictac').text('Ready to Play!')
}

const newFail = function (response) {
  $('#tictac').text('The game failed to start')
}

const numberOfGamesSuccess = function (response) {
  $('#scores').text(response.games.length)
}

const numberOfGamesFail = function (response) {
  $('#scores').text('Unable to get total. Please Try Again')
}

module.exports = {
  newSuccess,
  newFail,
  numberOfGamesSuccess,
  numberOfGamesFail
}
