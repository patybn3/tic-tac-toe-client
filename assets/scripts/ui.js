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
  store.user = response.user
  $('#password-change').show()
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
}

const changePwFail = function (response) {
  $('#change-alert').text('Unable to Change Your Password. Please Try Again')
  $('#password-change').trigger('reset')
  $('#change-alert').addClass('failure')
}

module.exports = {
  signUpSuccess,
  signUpFail,
  logInSuccess,
  logInFail,
  changePwSuccess,
  changePwFail
}
