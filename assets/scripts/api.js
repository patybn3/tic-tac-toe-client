const config = require('./config')

const store = require('./store')

const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const logIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const onChange = data => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const logingOut = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
// game starts here
//
//
//
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
  return $.ajax({
    url: config.apiUrl + '/games/' + store.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const game = data => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: { Authorization: 'Token token=' + store.user.token },
    data: {
      'game': {
        'cell': {
          'index': $(event.target).data('id'),
          'value': $(event.target).text('')
        },
        'over': store.game.over
      }
    }
  }
  )
}

module.exports = {
  signUp,
  logIn,
  onChange,
  logingOut,
  startGame,
  game,
  showGamesPlayed,
  showGames
}
