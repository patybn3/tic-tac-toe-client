const store = require('./store')

const signUpSuccess = function (response) {
  $('#signup-alert').text('You Have Signed Up!')
  $('#signup').trigger('reset')
  $('#signup-alert').addClass('success')
}

const signUpFail = function (response) {
  $('#signup-alert').text('Unable to Sign Up. Please Try Again')
  $('#signup').trigger('reset')
  $('#signup-alert').addClass('failure')
}

const logInSuccess = function (response) {
  $('#login-alert').text('Welcome to Tic Tac Toe!')
  $('#login').trigger('reset')
  $('#login-alert').addClass('login-success')
  store.user = response.user // add to make it work
  $('#tictac').show()
  $('#scores').show()
  $('#tray').show()
  $('#logout').show()
  $('#login').hide()
  $('#signup').hide()
  $('#start-game').show()
  // $('#settings').show()
  $('#password-change').show()
  $('#lookup-game').show()
}

const logInFail = function (response) {
  $('#login-fail').text('Unable to Log In. Please Try Again')
  $('#login').trigger('reset')
  $('#login-fail').addClass('failure')
}

const changePwSuccess = function (response) {
  $('#change-alert').text('You Have Changed Your Password')
  $('#password-change').trigger('reset')
  $('#change-alert').addClass('success')

  setTimeout(() => {
    $('#password-change').fadeOut()
    $('change-alert').fadeOut()
  }, 2000)

  // setTimeout(() => {
  //   $('#settings').fadeIn()
  //   $('#scores').fadeIn()
  // }, 3000)
}

const changePwFail = function (response) {
  $('#change-alert').text('Unable to Change Your Password. Please Try Again')
  $('#password-change').trigger('reset')
  $('#change-alert').addClass('failure')
}

const logOutSuccess = function (response) {
  $('#logout-alert').text('You Have Signed Out!')
  $('#logout').trigger('reset')
  $('#logout-alert').addClass('success')
  $('#logout').hide()
  $('#tray').hide()
  $('#tictac').hide()
  $('#signup').show()
  $('#login').show()
  $('#settings').hide()
  $('#scores').hide()
  $('#lookup-game').hide()
  $('#password-change').hide()
  $('#start-game').hide()
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

// const settingsSuccess = function (response) {
//   $('#password-change').show()
//   $('#settings').hide()
//   $('#scores').hide()
// }
//
// const settingsFail = function (response) {
//   $('#signup-alert').text('Unable to Access Settings. Please Try Again')
//   $('#signup').trigger('reset')
//   $('#signup-alert').addClass('failure')
// }

module.exports = {
  signUpSuccess,
  signUpFail,
  logInSuccess,
  logInFail,
  changePwSuccess,
  changePwFail,
  logOutSuccess,
  logOutFail
  // settingsSuccess,
  // settingsFail
}
