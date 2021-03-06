const store = require('./store')

const signUpSuccess = function (response) {
  $('#signup-alert').text('You Have Signed Up!')
  $('#signup').trigger('reset')
  $('#signup-alert').addClass('success')

  setTimeout(() => {
    $('#signup-alert').fadeOut()
  }, 2000)
}

const signUpFail = function (response) {
  $('#signup-alert').text('Unable to Sign Up. Please Try Again')
  $('#signup').trigger('reset')
  $('#signup-alert').addClass('failure')

  setTimeout(() => {
    $('#signup-alert').fadeOut()
  }, 2000)
}

const logInSuccess = function (response) {
  $('#login-alert').text('Welcome to Tic Tac Toe!')
  $('#login').trigger('reset')
  $('#login-alert').addClass('login-success')
  store.user = response.user // add to make it work
  $('#tictac').show()
  $('#tictac').text(`Let's Play! The Game Starts With X.`)
  $('#tictac').trigger('reset')
  $('#scores').show()
  $('#click-on-newGame').show()
  $('#logout').show()
  $('#login').hide()
  $('#signup').hide()
  $('#start-game').show()
  $('.let-play').removeClass('opacity')
  $('#lookup-game').show()
  $('#gamenumber').show()
  $('#password-change').hide()
  $('#settings-back').hide()
  $('#login-alert').show()
  $('#about').show()
}

const logInFail = function (response) {
  $('#login-fail').text('Unable to Log In. Please Try Again')
  $('#login').trigger('reset')
  $('#login-fail').addClass('failure')

  setTimeout(() => {
    $('#login-fail').fadeOut()
  }, 2000)
}

const changePwSuccess = function (response) {
  $('#change-alert').text('You Have Changed Your Password')
  $('#password-change').trigger('reset')
  $('#change-alert').addClass('success')

  setTimeout(() => {
    $('#change-alert').fadeOut()
  }, 1500)
  //
  // setTimeout(() => {
  //   $('#password-change').fadeOut()
  // }, 2500)

  $('#change-alert').show()

  $('#change-alert').removeClass('failure')
  // setTimeout(() => {
  //   $('#settings').fadeIn()
  //   $('#scores').fadeIn()
  // }, 3000)
}

const changePwFail = function (response) {
  $('#change-alert').show()
  $('#change-alert').text('Unable to Change Your Password. Please Try Again')
  $('#password-change').trigger('reset')
  $('#change-alert').addClass('failure')

  setTimeout(() => {
    $('#change-alert').fadeOut()
  }, 1500)
  $('#change-alert').removeClass('success')
}

const logOutSuccess = function (response) {
  $('#logout-alert').show()
  $('#logout-alert').text('You Have Signed Out!')
  $('#logout').trigger('reset')
  $('#logout-alert').addClass('success')
  $('#logout').hide()
  $('#tray').hide()
  $('#tictac').text(`Let's Play! The Game Starts With X.`)
  $('#tictac').hide()
  $('#signup').show()
  $('#signup').trigger('reset')
  $('#login').show()
  $('#settings').hide()
  $('#scores').hide()
  $('#lookup-game').hide()
  $('#password-change').hide()
  $('#start-game').hide()
  $('#gamenumber').hide()
  $('#click-on-newGame').hide()
  $('.let-play').addClass('opacity')
  $('#settings').show()
  $('#password-change').trigger('reset')
  $('#number-message').hide()
  // $('#game-number').hide()
  // $('#current').trigger('reset')
  $('#about').hide()
  $('#start-game').trigger('reset')
  store.user = null

  setTimeout(() => {
    $('#login-alert').fadeOut()
    $('#logout-alert').fadeOut()
  }, 1000)
}

const logOutFail = function (response) {
  $('#logout-alert').text('Try Again!')
  $('#logout-alert').addClass('failure')

  setTimeout(() => {
    $('#logout-alert').fadeOut()
  }, 2000)
}

const settingsSuccess = function (response) {
  $('#password-change').show()
  $('#settings-back').show()
  $('#gamenumber').hide()
  $('#settings').hide()
  $('#game-number').hide()
  $('#about').hide()
  $('#current').hide()
}

const settingsFail = function (response) {
  $('#tictac').text('Unable to Access Settings. Please Try Again')
  $('#tictac').trigger('reset')
  $('#tictac').addClass('failure')
}

const settingsBackSuccess = function (response) {
  $('#password-change').hide()
  $('#gamenumber').show()
  $('#settings-back').hide()
  $('#settings').show()
  $('#number-message').hide()
  $('#game-number').hide()
  $('#about').show()
  $('#current').show()
}

const settingsBackFail = function (response) {
  $('#tictac').text('Error. Please Try Again')
  $('#tictac').trigger('reset')
  $('#tictac').addClass('failure')
}

module.exports = {
  signUpSuccess,
  signUpFail,
  logInSuccess,
  logInFail,
  changePwSuccess,
  changePwFail,
  logOutSuccess,
  logOutFail,
  settingsSuccess,
  settingsFail,
  settingsBackSuccess,
  settingsBackFail
}
