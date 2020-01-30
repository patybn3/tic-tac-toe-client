// events page
const getForm = require('./../../lib/get-form-fields') // this was so hard
// go back to scrips count one, back to assets, two, back to tic-tac-toe main folder, three, enter lib, name file

const api = require('./api')
const ui = require('./ui')

const onSignUp = event => {
  event.preventDefault()

  const form = event.target
  const data = getForm(form)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}

const onLogIn = event => {
  event.preventDefault()

  const form = event.target
  const data = getForm(form)

  api.logIn(data)
    .then(ui.logInSuccess)
    .catch(ui.logInFail)
}

const changePw = event => {
  event.preventDefault()

  const form = event.target
  const data = getForm(form)

  api.onChange(data)
    .then(ui.changePwSuccess)
    .catch(ui.changePwFail)
}

const settings = event => {
  event.preventDefault()

  api.onSettings()
    .then(ui.onSettingsSuccess)
    .catch(ui.onSettingsFailure)
}

module.exports = {
  onSignUp,
  onLogIn,
  changePw,
  settings
}
