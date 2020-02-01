const config = require('../config')

const store = require('../store')

// game starts here
//
//
//

const showGamesPlayed = data => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showGames = data => {
  const getId = data.game.id
  return $.ajax({
    url: config.apiUrl + '/games/' + getId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const startGame = data => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {

    }
  })
}

const game = (number, letter, over) => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: { Authorization: 'Token token=' + store.user.token },
    data: {
      'game': {
        'cell': {
          'index': number,
          'value': letter
        },
        'over': over
      }
    }
  }
  )
}

module.exports = {
  game,
  showGamesPlayed,
  showGames,
  startGame
}
